---
title: "Automatyzacja powiadomień z banku w iOS 27 — Qalta"
description: "Skonfiguruj skrót, aby powiadomienie o płatności z aplikacji banku zapisywało się w Qalta jako wydatek, z kwotą odczytaną z treści. Dla iOS 27."
url: https://qalta.app/pl/tutorials/push-notification-ios-27
---

# Automatyzacja powiadomień z banku w iOS 27

Gdy aplikacja banku wyśle powiadomienie o płatności, Qalta może zapisać je jako wydatek. Kwota i sprzedawca są odczytywane z treści powiadomienia.

Potrzebujesz iOS 27, aplikacji **Qalta** i **Skróty** oraz aplikacji banku, która wyświetla powiadomienia na ekranie blokady. Ten wyzwalacz nie jest dostępny w iOS 26.

1.  Otwórz **Skróty** i stuknij przycisk **+** na dole, aby utworzyć nowy skrót.

    ![Wszystkie skróty z przyciskiem plus](https://qalta.app/assets/push-notification-ios-27/en/01-shortcuts.png)
    *Nowy skrót*

2.  Otworzy się pusty edytor. W wyszukiwarce czynności stuknij etykietę **Automatyzacja** — albo wpisz „Automatyzacja”.

    ![Pusty edytor skrótu z etykietą Automatyzacja](https://qalta.app/assets/push-notification-ios-27/en/02-new-shortcut.png)
    *Etykieta Automatyzacja*

3.  W sekcji **Aplikacje** stuknij **Notification** — „When I receive a notification from …”.

    ![Wyzwalacz powiadomienia na liście automatyzacji](https://qalta.app/assets/push-notification-ios-27/en/03-notification-trigger.png)
    *Wyzwalacz powiadomienia*

4.  Pierwszy blok brzmi **When I receive a notification from App**. Stuknij niebieską etykietę **App**, aby wybrać swój bank.

    ![When I receive a notification from App](https://qalta.app/assets/push-notification-ios-27/en/04-from-app.png)
    *Wybierz aplikację*

5.  Wyszukaj swój bank i stuknij aplikację, która wysyła powiadomienia o płatnościach (na przykład **Kaspi.kz**, a nie powiązaną aplikację do płatności czy kodów QR).

    ![Wybór aplikacji z wyszukiwaniem banku](https://qalta.app/assets/push-notification-ios-27/en/05-pick-bank.png)
    *Aplikacja banku*

6.  Powinien być teraz widoczny blok **When I receive a notification from \[bank\]**. W polu wyszukiwania na dole wpisz **Qalta**.

    ![Wyzwalacz powiadomienia dla wybranej aplikacji banku](https://qalta.app/assets/push-notification-ios-27/en/06-bank-selected.png)
    *Wyzwalacz banku ustawiony*

7.  Stuknij **Log Bank Expense** (nie „Create Wallet Expense” i nie „Create Transaction”).

    ![Wyszukiwanie Log Bank Expense](https://qalta.app/assets/push-notification-ios-27/en/07-search-qalta.png)
    *Czynność Qalta*

8.  Powinny być widoczne dwa bloki: wyzwalacz powiadomienia i **Log bank expense from Notification body**. Stuknij szare pole **Notification body** (treść powiadomienia).

    ![Log bank expense z polem Notification body](https://qalta.app/assets/push-notification-ios-27/en/08-tap-body.png)
    *Stuknij Notification body*

9.  Pojawi się klawiatura. Nad nią stuknij **Wybierz zmienną**, a następnie niebieską etykietę **Notification** pod wyzwalaczem.

    ![Wybierz zmienną z etykietą Notification](https://qalta.app/assets/push-notification-ios-27/en/09-select-variable.png)
    *Wybierz zmienną → Notification*

10.  Stuknij niebieską etykietę **Notification**, która jest teraz wewnątrz czynności Qalta. W arkuszu nie zostawiaj znacznika na „Notification” — stuknij **Body**. Qalta odczytuje kwotę z treści powiadomienia, a nie z całego obiektu powiadomienia.

     ![Właściwości powiadomienia: stuknij Body](https://qalta.app/assets/push-notification-ios-27/en/10-pick-body.png)
     *Pobierz → Body*

11.  Czynność Qalta powinna teraz brzmieć **Log bank expense from Body**.

     ![Body przypisane do Log bank expense](https://qalta.app/assets/push-notification-ios-27/en/11-body-mapped.png)
     *Body przypisane*

12.  Pozostałe pola są opcjonalne. Stuknij strzałkę, aby je rozwinąć. Opcje dla **Category** (kategoria) i **Account** (konto):

     -   **Wybierz** — wskaż konkretną kategorię lub konto z Qalta. Jeśli masz tylko jedno konto, zrób właśnie tak: wybierz je raz. Opcja Pytaj za każdym razem nie jest potrzebna.
     -   **Pytaj za każdym razem** — po każdym powiadomieniu Qalta zapyta, gdzie zapisać wydatek. Przydatne, jeśli masz kilka kategorii lub kont.
     -   Pole **Wybierz** możesz zostawić puste — Qalta użyje ustawień domyślnych i spróbuje rozpoznać kategorię.

     Pola **Note** i **Date** (notatka, data) mogą zostać puste. Włącz **Show When Run**, aby pojawiało się potwierdzenie. Stuknij strzałkę wstecz.

     ![Category, Account i Show When Run](https://qalta.app/assets/push-notification-ios-27/en/12-category-account.png)
     *Kategoria, konto i potwierdzenie*

13.  Skrót pojawi się w sekcji **Wszystkie skróty** jako **Log Bank Expense**. Po następnym powiadomieniu o płatności z tej aplikacji banku Qalta zaproponuje zapisanie wydatku.

     ![Log Bank Expense we Wszystkich skrótach](https://qalta.app/assets/push-notification-ios-27/en/13-all-shortcuts.png)
     *Gotowe*

## Pełne wideo

Wolisz śledzić nagranie ekranu?

*Konfiguracja krok po kroku w iOS 27.*

[Wszystkie poradniki](https://qalta.app/pl/tutorials/)
