-- =========================
-- PILATIQUE / SUPABASE SETUP
-- Next.js + Supabase CMS
-- Tables: posts, pages, home_settings, contact_messages, admin_users
-- Storage: public-images
-- RLS: public read (limited), admin CRUD, contact insert-only
-- =========================

-- 0) Extensions (usually already enabled, but safe to include)
create extension if not exists pgcrypto;

-- 1) Helper: updated_at trigger
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- 2) Admin table (whitelist by USER_ID)
-- NOTE: you add admins manually once they sign in
create table if not exists public.admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  email text unique,
  created_at timestamptz not null default now()
);

-- 3) is_admin() helper for RLS
create or replace function public.is_admin()
returns boolean
language sql
stable
as $$
  select exists (
    select 1
    from public.admin_users au
    where au.user_id = auth.uid()
  );
$$;

-- =========================
-- POSTS (BLOG)
-- =========================
create table if not exists public.posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  excerpt text,
  content_markdown text not null,
  cover_image_url text,
  tags text[] not null default '{}',
  published boolean not null default false,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists posts_published_idx on public.posts(published);
create index if not exists posts_published_at_idx on public.posts(published_at desc);

drop trigger if exists trg_posts_updated_at on public.posts;
create trigger trg_posts_updated_at
before update on public.posts
for each row execute function public.set_updated_at();

-- =========================
-- PAGES (STATIC CONTENT AS MARKDOWN)
-- One row per page, e.g. o-nas, oferta-dla-firm, dlaczego-warto
-- =========================
create table if not exists public.pages (
  id uuid primary key default gen_random_uuid(),
  page_key text not null unique, -- e.g. "o-nas"
  title text not null,
  content_markdown text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

drop trigger if exists trg_pages_updated_at on public.pages;
create trigger trg_pages_updated_at
before update on public.pages
for each row execute function public.set_updated_at();

-- =========================
-- HOME SETTINGS (SINGLETON)
-- Includes hero copy + CTA + carousel images (max 3)
-- =========================
create table if not exists public.home_settings (
  id int primary key default 1,
  hero_title text not null default 'Pilates & wellbeing dla firm',
  hero_subtitle text not null default 'Wyjątkowe zajęcia integracyjne, eventy i wyjazdy dla zespołów',
  cta_text text not null default 'Zaplanuj wydarzenie',
  cta_href text not null default '/kontakt',
  carousel_images jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint carousel_max_3 check (jsonb_array_length(carousel_images) <= 3)
);

drop trigger if exists trg_home_settings_updated_at on public.home_settings;
create trigger trg_home_settings_updated_at
before update on public.home_settings
for each row execute function public.set_updated_at();

-- Ensure singleton row exists
insert into public.home_settings (id)
values (1)
on conflict (id) do nothing;

-- =========================
-- CONTACT MESSAGES
-- Public can insert only (form), nobody public can read
-- Admin can read/manage
-- =========================
create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz not null default now()
);

create index if not exists contact_messages_created_at_idx on public.contact_messages(created_at desc);

-- =========================
-- RLS ENABLE
-- =========================
alter table public.admin_users enable row level security;
alter table public.posts enable row level security;
alter table public.pages enable row level security;
alter table public.home_settings enable row level security;
alter table public.contact_messages enable row level security;

-- =========================
-- RLS POLICIES: admin_users
-- =========================
drop policy if exists "Admin can read admin_users" on public.admin_users;
create policy "Admin can read admin_users"
on public.admin_users
for select
to authenticated
using (public.is_admin());

-- No public access
-- Insert/update/delete admin_users: typically via SQL/manual using service role
-- If you want, you can allow admin to manage admin table:
drop policy if exists "Admin can manage admin_users" on public.admin_users;
create policy "Admin can manage admin_users"
on public.admin_users
for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

-- =========================
-- RLS POLICIES: posts
-- =========================

-- Public read ONLY published posts
drop policy if exists "Public can read published posts" on public.posts;
create policy "Public can read published posts"
on public.posts
for select
to anon
using (published = true);

-- Authenticated users can also read published posts (same as anon)
drop policy if exists "Authenticated can read published posts" on public.posts;
create policy "Authenticated can read published posts"
on public.posts
for select
to authenticated
using (published = true);

-- Admin can read all posts (including drafts)
drop policy if exists "Admin can read all posts" on public.posts;
create policy "Admin can read all posts"
on public.posts
for select
to authenticated
using (public.is_admin());

-- Admin can insert/update/delete
drop policy if exists "Admin can insert posts" on public.posts;
create policy "Admin can insert posts"
on public.posts
for insert
to authenticated
with check (public.is_admin());

drop policy if exists "Admin can update posts" on public.posts;
create policy "Admin can update posts"
on public.posts
for update
to authenticated
using (public.is_admin())
with check (public.is_admin());

drop policy if exists "Admin can delete posts" on public.posts;
create policy "Admin can delete posts"
on public.posts
for delete
to authenticated
using (public.is_admin());

-- =========================
-- RLS POLICIES: pages
-- =========================

-- Public can read pages (all)
drop policy if exists "Public can read pages" on public.pages;
create policy "Public can read pages"
on public.pages
for select
to anon
using (true);

-- Admin can manage pages
drop policy if exists "Admin can manage pages" on public.pages;
create policy "Admin can manage pages"
on public.pages
for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

-- =========================
-- RLS POLICIES: home_settings
-- =========================

-- Public can read home settings
drop policy if exists "Public can read home settings" on public.home_settings;
create policy "Public can read home settings"
on public.home_settings
for select
to anon
using (true);

-- Admin can update home settings
drop policy if exists "Admin can manage home settings" on public.home_settings;
create policy "Admin can manage home settings"
on public.home_settings
for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

-- =========================
-- RLS POLICIES: contact_messages
-- =========================

-- Public can insert contact message
drop policy if exists "Public can send contact messages" on public.contact_messages;
create policy "Public can send contact messages"
on public.contact_messages
for insert
to anon
with check (true);

-- Authenticated can also insert (optional, but fine)
drop policy if exists "Authenticated can send contact messages" on public.contact_messages;
create policy "Authenticated can send contact messages"
on public.contact_messages
for insert
to authenticated
with check (true);

-- Admin can read/manage contact messages
drop policy if exists "Admin can read contact messages" on public.contact_messages;
create policy "Admin can read contact messages"
on public.contact_messages
for select
to authenticated
using (public.is_admin());

drop policy if exists "Admin can delete contact messages" on public.contact_messages;
create policy "Admin can delete contact messages"
on public.contact_messages
for delete
to authenticated
using (public.is_admin());

-- =========================
-- SEED PAGES (optional)
-- =========================
insert into public.pages (page_key, title, content_markdown)
values
  ('o-nas', 'O nas', 'Wpisz treść strony **O nas** tutaj...'),
  ('oferta-dla-firm', 'Oferta dla firm', 'Wpisz treść strony **Oferta dla firm** tutaj...'),
  ('dlaczego-warto', 'Dlaczego warto', 'Wpisz treść strony **Dlaczego warto** tutaj...')
on conflict (page_key) do nothing;

-- =========================
-- STORAGE: bucket + policies
-- =========================

-- Create bucket if not exists
-- NOTE: This usually works in SQL editor on Supabase.
-- If it fails, create it manually in Storage UI with name: public-images (public bucket)
insert into storage.buckets (id, name, public)
values ('public-images', 'public-images', true)
on conflict (id) do nothing;

-- RLS for storage.objects is enabled by default in Supabase

-- Public read images from public-images bucket
drop policy if exists "Public can read public-images" on storage.objects;
create policy "Public can read public-images"
on storage.objects
for select
to anon
using (bucket_id = 'public-images');

-- Admin can upload images
drop policy if exists "Admin can upload public-images" on storage.objects;
create policy "Admin can upload public-images"
on storage.objects
for insert
to authenticated
with check (bucket_id = 'public-images' and public.is_admin());

-- Admin can update images (overwrite metadata/path)
drop policy if exists "Admin can update public-images" on storage.objects;
create policy "Admin can update public-images"
on storage.objects
for update
to authenticated
using (bucket_id = 'public-images' and public.is_admin())
with check (bucket_id = 'public-images' and public.is_admin());

-- Admin can delete images
drop policy if exists "Admin can delete public-images" on storage.objects;
create policy "Admin can delete public-images"
on storage.objects
for delete
to authenticated
using (bucket_id = 'public-images' and public.is_admin());

-- =========================
-- DONE ✅
-- =========================
