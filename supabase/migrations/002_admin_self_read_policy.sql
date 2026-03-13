drop policy if exists "Self can read own admin_users" on public.admin_users;

create policy "Self can read own admin_users"
on public.admin_users
for select
to authenticated
using (user_id = auth.uid());
