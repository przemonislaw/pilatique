# Pilatique — brief projektu

## Cel

Dokończyć stronę Pilatique tak, aby:
- przypominała wizualnie dostarczony screenshot
- była responsywna
- miała prosty CMS `/admin`
- pozwalała adminowi zarządzać blogiem, stronami i homepage
- była lekka, czytelna i praktyczna

## Aktualny stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Supabase
- Markdown rendering

## Zakres

CMS ma obsługiwać tylko:
- posts
- pages
- home settings
- carousel max 3 zdjęcia
- login email OTP
- whitelist adminów

## Poza zakresem

Nie dodawać:
- komentarzy
- workflow approvals
- ról editor/viewer
- analytics
- zewnętrznego headless CMS

## Zasady pracy

- Nie zgaduj stanu repo.
- Najpierw analizuj aktualny kod, potem proponuj zmiany.
- Pracuj tylko nad jednym małym celem na raz.
- Jedna iteracja = max 3 pliki, chyba że jest mocny powód.
- Dawaj pełne pliki do podmiany, nie urywki.
- Nie przebudowuj architektury bez twardego powodu.
- Nie dodawaj ciężkich bibliotek bez potrzeby.
- Nie rozszerzaj scope bez wyraźnej prośby.
- Każdą zmianę kończ testem ręcznym i buildem.

## Definition of Done

Projekt uznajemy za gotowy dopiero gdy:
- UI desktop + mobile jest spójne i przypomina screenshot
- `/admin` działa end-to-end
- blog jest zarządzalny
- strony są zarządzalne
- home settings są zarządzalne
- carousel max 3 działa
- kontakt zapisuje do Supabase
- nie-admin nie ma dostępu do `/admin`
