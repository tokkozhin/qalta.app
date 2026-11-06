---
title: "Automation für Bankmitteilungen unter iOS 27 — Qalta"
description: "Richte einen Kurzbefehl ein, damit eine Zahlungsmitteilung deiner Banking-App in Qalta als Ausgabe gespeichert wird, mit dem Betrag aus dem Text. Für iOS 27."
url: https://qalta.app/de/tutorials/push-notification-ios-27
---

# Automation für Bankmitteilungen unter iOS 27

Wenn deine Banking-App eine Zahlungsmitteilung sendet, kann Qalta sie als Ausgabe speichern. Betrag und Händler werden aus dem Text der Mitteilung gelesen.

Du brauchst iOS 27, **Qalta** und **Kurzbefehle** sowie eine Banking-App, die Mitteilungen auf dem Sperrbildschirm anzeigt. Unter iOS 26 gibt es diesen Auslöser nicht.

1.  Öffne **Kurzbefehle** und tippe unten auf **+**, um einen neuen Kurzbefehl zu erstellen.

    ![Alle Kurzbefehle mit der Plus-Taste](https://qalta.app/assets/push-notification-ios-27/en/01-shortcuts.png)
    *Neuer Kurzbefehl*

2.  Ein leerer Editor öffnet sich. Tippe in der Aktionssuche auf den Chip **Automation** – oder gib „Automation“ ein.

    ![Leerer Kurzbefehl-Editor mit dem Chip Automation](https://qalta.app/assets/push-notification-ios-27/en/02-new-shortcut.png)
    *Chip Automation*

3.  Tippe unter **Apps** auf **Mitteilung** – „When I receive a notification from …“.

    ![Auslöser Mitteilung in der Liste Automation](https://qalta.app/assets/push-notification-ios-27/en/03-notification-trigger.png)
    *Auslöser Mitteilung*

4.  Im ersten Block steht **When I receive a notification from App**. Tippe auf den blauen Chip **App**, um deine Bank auszuwählen.

    ![When I receive a notification from App](https://qalta.app/assets/push-notification-ios-27/en/04-from-app.png)
    *App auswählen*

5.  Suche nach deiner Bank und tippe auf die App, die Zahlungshinweise sendet (zum Beispiel **Kaspi.kz**, nicht eine zugehörige Pay- oder QR-App).

    ![App-Auswahl mit der Suche nach der Bank](https://qalta.app/assets/push-notification-ios-27/en/05-pick-bank.png)
    *Banking-App*

6.  Jetzt siehst du **When I receive a notification from \[Bank\]**. Gib unten im Suchfeld **Qalta** ein.

    ![Auslöser Mitteilung für die gewählte Banking-App](https://qalta.app/assets/push-notification-ios-27/en/06-bank-selected.png)
    *Bankauslöser ist eingerichtet*

7.  Tippe auf **Bankausgabe speichern** (nicht „Wallet-Ausgabe erstellen“ und nicht „Transaktion erstellen“).

    ![Suche nach Bankausgabe speichern](https://qalta.app/assets/push-notification-ios-27/en/07-search-qalta.png)
    *Qalta-Aktion*

8.  Du siehst zwei Blöcke: den Mitteilungsauslöser und **Bankausgabe aus Mitteilungstext (Body) in Qalta speichern**. Tippe auf das graue Feld **Mitteilungstext (Body)**.

    ![Bankausgabe speichern mit dem Feld Mitteilungstext (Body)](https://qalta.app/assets/push-notification-ios-27/en/08-tap-body.png)
    *Mitteilungstext (Body) antippen*

9.  Eine Tastatur erscheint. Tippe darüber auf **Variable auswählen** und dann auf den blauen Chip **Mitteilung** unter dem Auslöser.

    ![Variable auswählen mit dem Chip Mitteilung](https://qalta.app/assets/push-notification-ios-27/en/09-select-variable.png)
    *Variable auswählen → Mitteilung*

10.  Tippe auf den blauen Chip **Mitteilung**, der jetzt in der Qalta-Aktion steht. Lass das Häkchen im Fenster nicht auf „Mitteilung“ – tippe auf **Body**. Qalta liest den Betrag aus dem Text der Mitteilung, nicht aus dem ganzen Mitteilungsobjekt.

     ![Eigenschaften der Mitteilung: auf Body tippen](https://qalta.app/assets/push-notification-ios-27/en/10-pick-body.png)
     *Abrufen → Body*

11.  In der Qalta-Aktion steht jetzt **Bankausgabe aus Body in Qalta speichern**.

     ![Body in Bankausgabe speichern zugeordnet](https://qalta.app/assets/push-notification-ios-27/en/11-body-mapped.png)
     *Body ist zugeordnet*

12.  Die übrigen Felder sind optional. Tippe auf den Pfeil, um sie einzublenden. Optionen für **Kategorie** und **Konto**:

     -   **Auswählen** – wähle eine bestimmte Kategorie oder ein bestimmtes Konto aus Qalta. Hast du nur ein Konto, mach es so: einmal auswählen. Jedes Mal fragen brauchst du dann nicht.
     -   **Jedes Mal fragen** – nach jeder Mitteilung fragt Qalta, wo die Ausgabe gespeichert werden soll. Praktisch bei mehreren Kategorien oder Konten.
     -   Du kannst **Auswählen** leer lassen – dann nutzt Qalta die Standardwerte und versucht, die Kategorie zu erkennen.

     **Notiz** und **Datum** können leer bleiben. Aktiviere **Beim Ausführen anzeigen**, damit eine Bestätigung erscheint. Tippe auf den Zurück-Pfeil.

     ![Kategorie, Konto und Beim Ausführen anzeigen](https://qalta.app/assets/push-notification-ios-27/en/12-category-account.png)
     *Kategorie, Konto und Bestätigung*

13.  Der Kurzbefehl erscheint unter **Alle Kurzbefehle** als **Bankausgabe speichern**. Nach der nächsten Zahlungsmitteilung dieser Banking-App bietet Qalta an, die Ausgabe zu speichern.

     ![Bankausgabe speichern in Alle Kurzbefehle](https://qalta.app/assets/push-notification-ios-27/en/13-all-shortcuts.png)
     *Fertig*

## Ganzes Video

Lieber anhand einer Bildschirmaufnahme mitmachen?

*Einrichtung unter iOS 27 Schritt für Schritt.*

[Alle Anleitungen](https://qalta.app/de/tutorials/)
