import { supabase } from "@/lib/supabase/client";

/** HOME SETTINGS (singleton id=1) */
export async function getHomeSettings() {
  const { data, error } = await supabase
    .from("home_settings")
    .select("*")
    .eq("id", 1)
    .single();

  if (error) throw new Error(`getHomeSettings error: ${error.message}`);
  return data;
}

/** PAGES by key, e.g. "o-nas" */
export async function getPageByKey(pageKey: string) {
  const { data, error } = await supabase
    .from("pages")
    .select("*")
    .eq("page_key", pageKey)
    .single();

  if (error) throw new Error(`getPageByKey(${pageKey}) error: ${error.message}`);
  return data;
}

/** BLOG: published posts */
export async function getPublishedPosts() {
  const { data, error } = await supabase
    .from("posts")
    .select("id,title,slug,excerpt,cover_image_url,published_at,tags")
    .eq("published", true)
    .order("published_at", { ascending: false });

  if (error) throw new Error(`getPublishedPosts error: ${error.message}`);
  return data ?? [];
}

/** BLOG: single post by slug */
export async function getPublishedPostBySlug(slug: string) {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .single();

  if (error) throw new Error(`getPublishedPostBySlug(${slug}) error: ${error.message}`);
  return data;
}
