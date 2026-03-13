# Pilatique — model danych

## Tabele używane przez aplikację

### posts
Pola:
- title
- slug
- excerpt
- content_markdown
- cover_image_url
- tags
- published
- published_at

Uwagi:
- `slug` musi być unikalny

### pages
Pola:
- page_key
- title
- content_markdown

Uwagi:
- `page_key` musi być unikalny
- strony leaf są zarządzane przez CMS

### home_settings
Singleton:
- `id = 1`

Pola:
- hero_title
- hero_subtitle
- cta_text
- cta_href
- carousel_images

Uwagi:
- `carousel_images` max 3

### contact_messages
Pola:
- name
- email
- message

### admin_users
Pola:
- user_id
- email

Uwagi:
- `user_id` musi odpowiadać `auth.users.id`
- whitelist adminów działa przez `user_id`

## Storage

Bucket:
- `public-images`

Użycie:
- upload carousel do homepage

## Auth

- Supabase OTP / magic link
- dostęp do `/admin` tylko dla usera istniejącego w `admin_users`
