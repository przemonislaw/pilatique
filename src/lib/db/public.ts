import { supabase } from "@/lib/supabase/client";

const isMock = !process.env.NEXT_PUBLIC_SUPABASE_URL;

/** HOME SETTINGS (singleton id=1) */
export async function getHomeSettings() {
  if (isMock) {
    return {
      hero_title: "Pilates & wellbeing dla firm",
      hero_subtitle: "Ekskluzywne zajęcia i wyjazdy integracyjne dla zespołów IT i biznesu",
      cta_text: "Zaplanuj wydarzenie",
      cta_href: "/kontakt",
      carousel_images: [
        { url: "https://images.unsplash.com/photo-1571019614242-c5c5adee9f50?q=80&w=2000&auto=format&fit=crop" },
        { url: "https://images.unsplash.com/photo-1522898467493-49726bf28798?q=80&w=2000&auto=format&fit=crop" }
      ]
    };
  }

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
  if (isMock) {
    return {
      title: `Strona: ${pageKey}`,
      content_markdown: `
# Przykładowy nagłówek dla ${pageKey}

To jest **treść** wprowadzona przez CMS. Wyświetlam ją lokalnie z mockowanych danych, by zweryfikować *typography* i design "Soft Earth".

> Wellness to nie tylko ruch, to styl życia. Wybierz zdrowie i harmonię dla swojego zespołu.

## Co oferujemy?
- Profesjonalne instruktaże
- Dopasowane plany
- Sprzęt premium

[Skontaktuj się z nami](/kontakt) lub dowiedz się więcej.
      `
    };
  }

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


/** CONTACT: public insert */
export async function sendContactMessage(input: {
  name: string;
  email: string;
  message: string;
}) {
  const { error } = await supabase.from("contact_messages").insert({
    name: input.name,
    email: input.email,
    message: input.message,
  });

  if (error) throw new Error(`sendContactMessage error: ${error.message}`);
}
