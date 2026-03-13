# Pilatique — routing

## Public routes

- `/`
- `/o-nas`
- `/kontakt`
- `/blog`
- `/blog/[slug]`

## Leaf pages zarządzane przez CMS

### Oferta dla firm
Nagłówek w sidebarze jest NIEKLIKALNY.
Klika się tylko w poniższe podstrony:

- `/oferta-dla-firm/organizacja-jednostkowych-eventow`
- `/oferta-dla-firm/core-and-glow`
- `/oferta-dla-firm/stars-and-stretches`
- `/oferta-dla-firm/organizacja-wyjazdow-integracyjnych`

### Dlaczego warto
Nagłówek w sidebarze jest NIEKLIKALNY.
Klika się tylko w poniższe podstrony:

- `/dlaczego-warto/korzysci-dla-kregoslupa`
- `/dlaczego-warto/poprawa-postury`

## Admin routes

- `/admin`
- `/admin/posts`
- `/admin/pages`
- `/admin/home`

## Source of truth

- publiczny routing nie może być zmieniany bez wyraźnej zgody
- `pages.page_key` jest źródłem prawdy dla stron CMS
- `posts.slug` jest źródłem prawdy dla bloga
