insert into public.pages (page_key, title, content_markdown)
values
  ('o-nas', 'O nas', 'Treść strony **O nas**.'),

  ('oferta-dla-firm/organizacja-jednostkowych-eventow', 'Organizacja jednostkowych eventów', 'Treść strony **Organizacja jednostkowych eventów**.'),
  ('oferta-dla-firm/core-and-glow', 'Core&Glow', 'Treść strony **Core&Glow**.'),
  ('oferta-dla-firm/stars-and-stretches', 'Stars&Stretches', 'Treść strony **Stars&Stretches**.'),
  ('oferta-dla-firm/organizacja-wyjazdow-integracyjnych', 'Organizacja wyjazdów integracyjnych', 'Treść strony **Organizacja wyjazdów integracyjnych**.'),

  ('dlaczego-warto/korzysci-dla-kregoslupa', 'Korzyści dla kręgosłupa', 'Treść strony **Korzyści dla kręgosłupa**.'),
  ('dlaczego-warto/poprawa-postury', 'Poprawa postury', 'Treść strony **Poprawa postury**.')
on conflict (page_key) do nothing;
