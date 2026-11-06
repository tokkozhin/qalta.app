---
title: "Automatyzacja Apple Pay w iOS 26 — Qalta"
description: "Skonfiguruj automatyzację w Skrótach, aby każdy zakup Apple Pay zapisywał się w Qalta jako wydatek, z uzupełnioną kwotą i sprzedawcą. Dla iOS 26."
url: https://qalta.app/pl/tutorials/apple-pay-ios-26
---

# Automatyzacja Apple Pay w iOS 26

Po płatności Apple Pay Qalta może zapisać zakup jako wydatek. Kwota i sprzedawca pochodzą z transakcji; kategorię i konto możesz wybierać za każdym razem albo ustawić z góry.

Potrzebujesz iOS 26, aplikacji **Qalta** i **Skróty** oraz kart w Portfelu.

1.  Otwórz **Ustawienia → Portfel i Apple Pay**. Włącz **Aktywności na żywo** i **Dane sieci komórkowej**.

    ![Uprawnienia Portfela i Apple Pay](https://qalta.app/assets/apple-pay-ios-26/en/01-wallet-settings.png)
    *Uprawnienia Portfela*

2.  Otwórz **Skróty**, przejdź do karty **Automatyzacja** i stuknij **Nowa automatyzacja**.

    ![Karta Automatyzacja w Skrótach](https://qalta.app/assets/apple-pay-ios-26/en/02-automation-tab.png)
    *Nowa automatyzacja*

3.  Wybierz **Portfel** — „When I tap a Wallet Card or Pass” (płatność w terminalu).

    ![Wyzwalacz Portfela na liście automatyzacji](https://qalta.app/assets/apple-pay-ios-26/en/03-wallet-trigger.png)
    *Wyzwalacz Portfela*

4.  Zaznacz karty, które Qalta ma śledzić. Stuknij **Dalej**.

    ![Wybór kart płatniczych](https://qalta.app/assets/apple-pay-ios-26/en/04-select-cards.png)
    *Które karty śledzić*

5.  Zostaw kategorie Portfela, które Cię interesują (mogą być wszystkie). Wybierz **Uruchom natychmiast** (nie Uruchom po potwierdzeniu). Stuknij **Dalej**.

    ![Kategorie Portfela](https://qalta.app/assets/apple-pay-ios-26/en/05-categories.png)
    *Kategorie*

6.  Na ekranie z kafelkami stuknij szarą kartę **Utwórz nowy skrót** w lewym górnym rogu. Nie wybieraj istniejącego skrótu z listy poniżej.

    ![Kafelek Utwórz nowy skrót](https://qalta.app/assets/apple-pay-ios-26/en/06-create-shortcut.png)
    *Nowy skrót*

7.  Otworzy się pusty edytor. W wyszukiwarce czynności na dole wpisz **Qalta** i stuknij **Create Wallet Expense** (nie „Create Transaction”).

    ![Wyszukiwanie Create Wallet Expense](https://qalta.app/assets/apple-pay-ios-26/en/07-search-qalta.png)
    *Czynność Qalta*

8.  Powinny być widoczne dwa bloki: „Receive transaction as input” i czynność Qalta. Stuknij szare pole **Amount** (kwota) w czynności Qalta — pojawi się klawiatura numeryczna. Nad nią stuknij **Wybierz zmienną**.

    ![Pole Amount i Wybierz zmienną](https://qalta.app/assets/apple-pay-ios-26/en/08-tap-amount.png)
    *Stuknij Amount, potem Wybierz zmienną*

9.  Na ekranie Wybierz zmienną stuknij niebieską etykietę **Dane wejściowe skrótu** pod „Receive transaction as input”.

    ![Wybór Danych wejściowych skrótu jako zmiennej](https://qalta.app/assets/apple-pay-ios-26/en/09-select-variable.png)
    *Dane wejściowe skrótu*

10.  Stuknij niebieską etykietę **Dane wejściowe skrótu**, która jest teraz wewnątrz czynności Qalta. W arkuszu pole Type powinno mieć wartość **Transaction**. Nie zostawiaj znacznika na „Transaction” — przewiń listę i stuknij **Amount**.

     ![Właściwości transakcji: stuknij Amount](https://qalta.app/assets/apple-pay-ios-26/en/10-pick-amount.png)
     *Type Transaction → Amount*

11.  Powtórz to dla nazwy sklepu. Stuknij strzałkę przy czynności Qalta, aby rozwinąć pola. Stuknij **Merchant** (sprzedawca) → **Wybierz zmienną** → **Dane wejściowe skrótu**. Stuknij etykietę ponownie, ustaw Type na **Transaction**, a potem wybierz z listy **Merchant**.

     ![Wybór Merchant z transakcji](https://qalta.app/assets/apple-pay-ios-26/en/11-merchant.png)
     *Type Transaction → Merchant*

12.  Pozostałe pola są opcjonalne. Opcje dla **Category** (kategoria) i **Account** (konto):

     -   **Wybierz** — wskaż konkretną kategorię lub konto z Qalta. Jeśli masz tylko jedno konto, zrób właśnie tak: wybierz je raz. Opcja Pytaj za każdym razem nie jest potrzebna.
     -   **Pytaj za każdym razem** — po każdej płatności Qalta zapyta, gdzie zapisać wydatek. Przydatne, jeśli masz kilka kategorii lub kont.
     -   Pole **Wybierz** możesz zostawić puste — Qalta użyje ustawień domyślnych i spróbuje rozpoznać kategorię.

     Pola **Currency**, **Note** i **Date** (waluta, notatka, data) mogą zostać puste. Włącz **Show When Run**, aby po płatności pojawiało się potwierdzenie. Stuknij niebieski znacznik wyboru u góry.

     ![Category, Account i Show When Run](https://qalta.app/assets/apple-pay-ios-26/en/12-category-account.png)
     *Kategoria, konto i potwierdzenie*

13.  Automatyzacja pojawi się na karcie **Automatyzacja**. Po następnym zakupie Apple Pay wybraną kartą Qalta zaproponuje zapisanie wydatku.

     ![Gotowa automatyzacja na liście](https://qalta.app/assets/apple-pay-ios-26/en/13-automation-list.png)
     *Gotowe*

## Pełne wideo

Wolisz śledzić nagranie ekranu?

*Konfiguracja krok po kroku w iOS 26.*

[Wszystkie poradniki](https://qalta.app/pl/tutorials/)
