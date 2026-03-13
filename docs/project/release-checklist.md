# Pilatique — release checklist

## Obowiązkowo przed pushem

- `npm run build`
- test `/`
- test `/kontakt`
- test `/admin`
- test `/admin/posts`
- test `/admin/pages`
- test `/admin/home`
- test mobile drawer
- test sidebar desktop
- test carousel
- test zapis do Supabase
- test brak dostępu dla non-admina

## Obowiązkowo przed zmianą bazy

- backup / eksport danych
- zapis SQL do `/supabase/migrations`
- brak destrukcyjnych dropów bez zgody

## Obowiązkowo po zmianie bazy

- test logowania admin
- test odczytu publicznego
- test insert kontaktu
- test upload do storage
