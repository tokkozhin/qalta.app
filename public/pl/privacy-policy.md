---
title: "Polityka prywatności — Qalta"
description: "Jak Qalta przetwarza Twoje dane. Prywatne przestrzenie zostają na iPhonie z opcjonalną kopią zapasową w iCloud; wspólne przestrzenie synchronizują się wyłącznie z osobami, które zaprosisz; nagrania głosowe i skany trafiają do naszego serwera i OpenAI wyłącznie w celu odczytania."
url: https://qalta.app/pl/privacy-policy
---

# Polityka prywatności

Data wejścia w życie: 16 października 2026 r.

To tłumaczenie udostępniamy dla wygody. Jeśli różni się od [wersji angielskiej](https://qalta.app/privacy-policy), obowiązuje wersja angielska.

Niniejsza polityka dotyczy aplikacji mobilnej Qalta („aplikacja”) udostępnianej przez Daniela Tokkozhina („my”). Wyjaśnia, co pozostaje na Twoim urządzeniu, co je opuszcza i które firmy przetwarzają te dane.

## Prywatne przestrzenie zostają na urządzeniu

Twoje zapisy są przechowywane w przestrzeniach. Prywatna przestrzeń wraz z jej kontami, transakcjami, kategoriami, budżetami, celami, długami, pozycjami cyklicznymi i podobnymi danymi jest przechowywana wyłącznie na Twoim urządzeniu (SQLite). Nie przesyłamy prywatnych przestrzeni na nasze serwery.

Jeśli korzystasz z opcjonalnej funkcji kopii zapasowej, kopie mogą być przechowywane na Twoim koncie iCloud. To miejsce na dane zapewnia Apple i obowiązuje w nim polityka prywatności Apple.

## Wspólne przestrzenie

Udostępnianie jest opcjonalne. Jeśli udostępnisz przestrzeń, ta przestrzeń i wszystko, co się w niej znajduje (jej nazwa, konta, transakcje, przelewy, kategorie, budżety, cele, długi, pozycje cykliczne oraz dodane przez Ciebie notatki), jest przesyłana do naszego dostawcy backendu, Supabase, i synchronizowana z Twoimi innymi urządzeniami oraz z osobami, które zaprosisz. Dostęp do niej mają wyłącznie członkowie przestrzeni. Przy każdym zapisie widać, który członek go utworzył i kto edytował go jako ostatni.

Członkowie wspólnej przestrzeni widzą nawzajem swoje imiona i nazwiska, adresy e-mail i zdjęcia profilowe z konta używanego do logowania, a także to, kiedy dołączył każdy z członków. Zaproszenia to jednorazowe linki, które wygasają po 7 dniach. Przechowujemy wyłącznie zahaszowaną postać kodu zaproszenia, a wygasłe zaproszenia są usuwane automatycznie.

Gdy właściciel przestanie udostępniać wspólną przestrzeń lub ją usunie, jej dane są usuwane z naszych serwerów, a wszyscy członkowie tracą do niej dostęp; kopia pozostaje na urządzeniu każdego członka, dopóki jej nie usunie. Gdy członek opuści przestrzeń lub zostanie z niej usunięty, traci dostęp do danych na naszych serwerach. Jeśli Twoja subskrypcja wygaśnie, synchronizacja zostaje wstrzymana, a dane już przesłane pozostają na naszych serwerach do czasu usunięcia przestrzeni.

## Konto

Logujesz się przez Sign in with Apple lub Sign in with Google. Otrzymujemy token tożsamości od Apple lub Google i tworzymy konto u naszego dostawcy backendu, Supabase. Konto może zawierać identyfikator użytkownika, adres e-mail (w tym adres przekierowujący Apple Ukryj mój e-mail), Twoje imię i nazwisko oraz, w przypadku Google, Twoje zdjęcie profilowe. Imię i nazwisko widoczne dla innych członków możesz zmienić w aplikacji.

Możesz usunąć konto w aplikacji. Spowoduje to usunięcie konta i przechowywanych przez nas danych o subskrypcji. Jeśli jesteś właścicielem wspólnych przestrzeni z innymi członkami, musisz najpierw usunąć te przestrzenie lub ich członków. Dane w prywatnych przestrzeniach na urządzeniu są odrębne; lokalne dane finansowe możesz też wyczyścić w Ustawieniach.

## Subskrypcje i zakupy

Zakupy obsługuje Apple. Do odczytu statusu subskrypcji używamy RevenueCat. W Supabase, powiązane z Twoim identyfikatorem użytkownika, przechowujemy znacznik wersji premium oraz liczniki wykorzystania AI (ile żądań głosowych, obrazowych i dokumentowych wykorzystano). Nie otrzymujemy ani nie przechowujemy numerów kart płatniczych.

## Głos, skanowanie, dokumenty i inne funkcje AI

Gdy korzystasz z wprowadzania głosowego, skanowania paragonów lub dokumentów albo innego wyodrębniania danych przez AI, aplikacja wysyła przekazane przez Ciebie treści do naszego backendu (Supabase Edge Functions). Backend przekazuje te treści do OpenAI, aby aplikacja mogła zaproponować transakcje.

W zależności od funkcji treści te mogą obejmować:

-   nagranie głosu;
-   zdjęcia paragonów, rachunków, wyciągów lub podobnych dokumentów;
-   tekst wyodrębniony z dokumentów;
-   wpisany przez Ciebie tekst;
-   nazwy kont i kategorii na urządzeniu wraz z powiązanymi kwotami i walutą, aby model mógł je dopasować.

Treści te są wysyłane wyłącznie w celu realizacji funkcji, z której chcesz skorzystać. Nie przechowujemy przesłanych treści w naszej bazie danych. Backend wykorzystuje żądanie, aby zwrócić uporządkowane wpisy i doliczyć wykorzystanie do Twoich limitów.

OpenAI przetwarza żądanie na warunkach swojego API. OpenAI deklaruje, że domyślnie dane wejściowe API nie są używane do trenowania jego modeli. OpenAI może przechowywać dane przez ograniczony czas w celu obsługi API i monitorowania nadużyć. Zobacz zasady OpenAI, do których linki znajdują się poniżej.

Funkcje AI są opcjonalne. Możesz dodawać transakcje ręcznie, bez wysyłania tych treści.

## Analityka, awarie i inne dane sieciowe

-   **Kursy walut.** Aplikacja pobiera z naszych serwerów publiczne zestawienia kursów walut. Nie są to Twoje zapisy.
-   **Analityka produktowa (PostHog).** Rejestrujemy zdarzenia, takie jak funkcje, z których korzystasz, przybliżone liczby użycia (na przykład liczbę transakcji, a nie kwoty) oraz język aplikacji. Zdarzenia są powiązane z Twoim identyfikatorem użytkownika. Nie wysyłamy do PostHog kwot transakcji, notatek, zdjęć ani nagrań audio.
-   **Raporty o awariach (Sentry).** Wysyłamy dane diagnostyczne awarii, aby łatwiej naprawiać błędy. Nie dołączamy do tych raportów zrzutów ekranu ani dodatkowych danych osobowych.
-   **Dane techniczne.** Gdy aplikacja łączy się z serwerem lub SDK, dany podmiot zazwyczaj otrzymuje informacje techniczne, takie jak adres IP, typ urządzenia i wersja systemu operacyjnego.

## Czego nie robimy

-   Nie sprzedajemy Twoich danych.
-   Nie wykorzystujemy Twoich danych na potrzeby sieci reklamowych ani do śledzenia Cię w aplikacjach i witrynach innych firm.
-   Nie zbieramy dokładnej lokalizacji GPS. Aplikacja korzysta z ustawień języka i regionu urządzenia, a nie z GPS.

## Podmioty przetwarzające

Poniższe firmy przetwarzają dane w sposób opisany powyżej. Każda z nich ma własną politykę prywatności:

-   [Apple](https://www.apple.com/legal/privacy/) — Sign in with Apple, App Store, zakupy w aplikacji, opcjonalna kopia zapasowa w iCloud
-   [Google](https://policies.google.com/privacy) — Sign in with Google
-   [Supabase](https://supabase.com/privacy) — konto, dane o subskrypcji i wykorzystaniu, wspólne przestrzenie, funkcje backendu
-   [OpenAI](https://openai.com/policies/privacy-policy/) — przetwarzanie przez AI przekazanych przez Ciebie treści ([prywatność API / dla firm](https://openai.com/enterprise-privacy/))
-   [RevenueCat](https://www.revenuecat.com/privacy) — status subskrypcji
-   [PostHog](https://posthog.com/privacy) — analityka produktowa
-   [Sentry](https://sentry.io/privacy/) — raporty o awariach
-   [Expo](https://expo.dev/privacy) — środowisko uruchomieniowe aplikacji

Możemy również ujawnić informacje, jeśli wymaga tego prawo lub jeśli w dobrej wierze uznamy, że ujawnienie jest konieczne do ochrony praw lub bezpieczeństwa albo do zbadania oszustwa.

## Przechowywanie i usuwanie

-   Dane w prywatnych przestrzeniach pozostają na urządzeniu, dopóki ich nie usuniesz lub nie odinstalujesz aplikacji (chyba że zachowasz też kopię zapasową w iCloud).
-   Dane we wspólnych przestrzeniach są przechowywane na naszych serwerach, dopóki przestrzeń jest udostępniana, i są usuwane, gdy właściciel przestanie ją udostępniać lub ją usunie.
-   Dane konta i wykorzystania przechowujemy, dopóki masz konto, a usuwamy je po usunięciu konta, z uwzględnieniem krótkiego okresu potrzebnego na dokończenie usuwania.
-   Treści żądań AI są przetwarzane w celu realizacji żądania. Nie przechowujemy ich jako Twoich zapisów. Podmioty przetwarzające mogą je przechowywać zgodnie z własnymi zasadami.
-   Dane analityczne i dane o awariach przechowujemy tak długo, jak jest to potrzebne do działania i ulepszania aplikacji.

Aby usunąć dane konta, użyj opcji Usuń konto w aplikacji lub napisz na adres [help.qalta.app@outlook.com](mailto:help.qalta.app@outlook.com).

## Zmiany

Możemy aktualizować niniejszą politykę. Zmieni się wtedy podana powyżej data wejścia w życie. Dalsze korzystanie z aplikacji po aktualizacji oznacza akceptację zmienionej polityki.

## Kontakt

Daniel Tokkozhin
[help.qalta.app@outlook.com](mailto:help.qalta.app@outlook.com)
