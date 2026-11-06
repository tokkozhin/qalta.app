---
title: "Automatyzacja Apple Pay w iOS 27 — Qalta"
description: "Skonfiguruj skrót, aby każdy zakup Apple Pay zapisywał się w Qalta jako wydatek, z kwotą i sprzedawcą z Portfela. Dla iOS 27."
url: https://qalta.app/pl/tutorials/apple-pay-ios-27
---

# Automatyzacja Apple Pay w iOS 27

Po płatności Apple Pay Qalta może zapisać zakup jako wydatek. Kwota i sprzedawca pochodzą z transakcji w Portfelu; kategorię i konto możesz wybierać za każdym razem albo ustawić z góry.

Potrzebujesz iOS 27, aplikacji **Qalta** i **Skróty** oraz kart w Portfelu. W iOS 27 wyzwalacz Portfela znajduje się wewnątrz nowego skrótu — nie ma osobnej karty Automatyzacja.

1.  Otwórz **Skróty** i stuknij przycisk **+** na dole, aby utworzyć nowy skrót.

    ![Wszystkie skróty z przyciskiem plus](https://qalta.app/assets/apple-pay-ios-27/en/01-shortcuts.png)
    *Nowy skrót*

2.  Otworzy się pusty edytor. W wyszukiwarce czynności stuknij etykietę **Automatyzacja** — albo wpisz „Automatyzacja”.

    ![Pusty edytor skrótu z etykietą Automatyzacja](https://qalta.app/assets/apple-pay-ios-27/en/02-new-shortcut.png)
    *Etykieta Automatyzacja*

3.  W sekcji **Aplikacje** stuknij **Portfel** — „When I tap a Wallet Card or Pass” (płatność w terminalu).

    ![Wyzwalacz Portfela na liście automatyzacji](https://qalta.app/assets/apple-pay-ios-27/en/03-wallet-trigger.png)
    *Wyzwalacz Portfela*

4.  Pierwszy blok brzmi **When Any Card is tapped**. Jeśli Qalta ma działać tylko dla niektórych kart, stuknij niebieską etykietę **Any Card**.

    ![Wyzwalacz When Any Card is tapped](https://qalta.app/assets/apple-pay-ios-27/en/04-any-card.png)
    *Any Card*

5.  Wybierz kartę, którą płacisz (na przykład **Kaspi Gold**). Stuknij znacznik wyboru.

    ![Wybór karty płatniczej](https://qalta.app/assets/apple-pay-ios-27/en/05-select-card.png)
    *Którą kartę śledzić*

6.  Powinien być teraz widoczny jeden blok: **When \[Twoja karta\] is tapped**. W polu wyszukiwania na dole wpisz **Qalta**.

    ![Wyzwalacz Portfela dla wybranej karty](https://qalta.app/assets/apple-pay-ios-27/en/06-card-tapped.png)
    *Wyzwalacz karty ustawiony*

7.  Stuknij **Create Wallet Expense** (nie „Create Transaction”).

    ![Wyszukiwanie Create Wallet Expense](https://qalta.app/assets/apple-pay-ios-27/en/07-search-qalta.png)
    *Czynność Qalta*

8.  Powinny być widoczne dwa bloki: wyzwalacz Portfela i czynność Qalta. Stuknij szare pole **Amount** (kwota) — pojawi się klawiatura numeryczna. Nad nią stuknij **Wybierz zmienną**.

    ![Pole Amount i Wybierz zmienną](https://qalta.app/assets/apple-pay-ios-27/en/08-tap-amount.png)
    *Stuknij Amount, potem Wybierz zmienną*

9.  Na ekranie Wybierz zmienną stuknij niebieską etykietę **Transaction** pod wyzwalaczem Portfela. To płatność Apple Pay, a nie Dane wejściowe skrótu.

    ![Wybór Transaction z wyzwalacza Portfela](https://qalta.app/assets/apple-pay-ios-27/en/09-select-transaction.png)
    *Transaction*

10.  Stuknij niebieską etykietę **Transaction**, która jest teraz wewnątrz czynności Qalta. W arkuszu nie zostawiaj znacznika na „Transaction” — stuknij **Amount**.

     ![Właściwości transakcji: stuknij Amount](https://qalta.app/assets/apple-pay-ios-27/en/10-pick-amount.png)
     *Pobierz → Amount*

11.  Powtórz to dla nazwy sklepu. Stuknij strzałkę przy czynności Qalta, aby rozwinąć pola. Stuknij **Merchant** (sprzedawca) → **Wybierz zmienną** → **Transaction**. Stuknij etykietę ponownie i wybierz z listy **Merchant** — nie „Transaction”.

     ![Wybór Merchant z transakcji](https://qalta.app/assets/apple-pay-ios-27/en/11-merchant.png)
     *Pobierz → Merchant*

12.  Pozostałe pola są opcjonalne. Opcje dla **Category** (kategoria) i **Account** (konto):

     -   **Wybierz** — wskaż konkretną kategorię lub konto z Qalta. Jeśli masz tylko jedno konto, zrób właśnie tak: wybierz je raz. Opcja Pytaj za każdym razem nie jest potrzebna.
     -   **Pytaj za każdym razem** — po każdej płatności Qalta zapyta, gdzie zapisać wydatek. Przydatne, jeśli masz kilka kategorii lub kont.
     -   Pole **Wybierz** możesz zostawić puste — Qalta użyje ustawień domyślnych i spróbuje rozpoznać kategorię.

     Pola **Currency**, **Note** i **Date** (waluta, notatka, data) mogą zostać puste. Włącz **Show When Run**, aby po płatności pojawiało się potwierdzenie. Stuknij strzałkę wstecz.

     ![Category, Account i Show When Run](https://qalta.app/assets/apple-pay-ios-27/en/12-category-account.png)
     *Kategoria, konto i potwierdzenie*

13.  Skrót pojawi się w sekcji **Wszystkie skróty** jako **Create Wallet Expense**. Po następnym zakupie Apple Pay wybraną kartą Qalta zaproponuje zapisanie wydatku.

     ![Create Wallet Expense we Wszystkich skrótach](https://qalta.app/assets/apple-pay-ios-27/en/13-all-shortcuts.png)
     *Gotowe*

## Pełne wideo

Wolisz śledzić nagranie ekranu?

*Konfiguracja krok po kroku w iOS 27.*

[Wszystkie poradniki](https://qalta.app/pl/tutorials/)
