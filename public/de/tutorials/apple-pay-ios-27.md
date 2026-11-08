---
title: "Apple Pay-Automation unter iOS 27 — Qalta"
description: "Richte einen Kurzbefehl ein, damit jeder Apple Pay-Kauf in Qalta als Ausgabe gespeichert wird, mit Betrag und Händler aus Wallet. Für iOS 27."
url: https://qalta.app/de/tutorials/apple-pay-ios-27
---

# Apple Pay-Automation unter iOS 27

Nach einer Apple Pay-Zahlung kann Qalta den Kauf als Ausgabe speichern. Betrag und Händler kommen aus der Wallet-Transaktion; Kategorie und Konto wählst du jedes Mal oder legst sie vorab fest.

Du brauchst iOS 27, **Qalta** und **Kurzbefehle** sowie Karten in Wallet. Unter iOS 27 steckt der Wallet-Auslöser in einem neuen Kurzbefehl – einen eigenen Tab Automation gibt es nicht.

1.  Öffne **Kurzbefehle** und tippe unten auf **+**, um einen neuen Kurzbefehl zu erstellen.

    ![Alle Kurzbefehle mit der Plus-Taste](https://qalta.app/assets/apple-pay-ios-27/en/01-shortcuts.png)
    *Neuer Kurzbefehl*

2.  Ein leerer Editor öffnet sich. Tippe in der Aktionssuche auf den Chip **Automation** – oder gib „Automation“ ein.

    ![Leerer Kurzbefehl-Editor mit dem Chip Automation](https://qalta.app/assets/apple-pay-ios-27/en/02-new-shortcut.png)
    *Chip Automation*

3.  Tippe unter **Apps** auf **Wallet** – „When I tap a Wallet Card or Pass“ (Zahlung am Terminal).

    ![Wallet-Auslöser in der Liste Automation](https://qalta.app/assets/apple-pay-ios-27/en/03-wallet-trigger.png)
    *Wallet-Auslöser*

4.  Im ersten Block steht **When Any Card is tapped**. Soll Qalta nur bei bestimmten Karten laufen, tippe auf den blauen Chip **Any Card**.

    ![Auslöser When Any Card is tapped](https://qalta.app/assets/apple-pay-ios-27/en/04-any-card.png)
    *Any Card*

5.  Wähle die Karte, mit der du bezahlst (zum Beispiel **Kaspi Gold**). Tippe auf das Häkchen.

    ![Zahlungskarte auswählen](https://qalta.app/assets/apple-pay-ios-27/en/05-select-card.png)
    *Welche Karte erfasst wird*

6.  Jetzt siehst du einen Block: **When \[deine Karte\] is tapped**. Gib unten im Suchfeld **Qalta** ein.

    ![Wallet-Auslöser für die gewählte Karte](https://qalta.app/assets/apple-pay-ios-27/en/06-card-tapped.png)
    *Kartenauslöser ist eingerichtet*

7.  Tippe auf **Wallet-Ausgabe erstellen** (nicht „Transaktion erstellen“).

    ![Suche nach Wallet-Ausgabe erstellen](https://qalta.app/assets/apple-pay-ios-27/en/07-search-qalta.png)
    *Qalta-Aktion*

8.  Du siehst zwei Blöcke: den Wallet-Auslöser und die Qalta-Aktion. Tippe auf das graue Feld **Betrag** – ein Ziffernblock erscheint. Tippe darüber auf **Variable auswählen**.

    ![Feld Betrag und Variable auswählen](https://qalta.app/assets/apple-pay-ios-27/en/08-tap-amount.png)
    *Betrag, dann Variable auswählen*

9.  Tippe im Bildschirm Variable auswählen auf den blauen Chip **Transaktion** unter dem Wallet-Auslöser. Das ist die Apple Pay-Zahlung, nicht die Kurzbefehleingabe.

    ![Transaktion aus dem Wallet-Auslöser auswählen](https://qalta.app/assets/apple-pay-ios-27/en/09-select-transaction.png)
    *Transaktion*

10.  Tippe auf den blauen Chip **Transaktion**, der jetzt in der Qalta-Aktion steht. Lass das Häkchen im Fenster nicht auf „Transaktion“ – tippe auf **Betrag**.

     ![Eigenschaften der Transaktion: auf Betrag tippen](https://qalta.app/assets/apple-pay-ios-27/en/10-pick-amount.png)
     *Abrufen → Betrag*

11.  Wiederhole das für den Namen des Geschäfts. Tippe auf den Pfeil der Qalta-Aktion, um die Felder einzublenden. Tippe auf **Händler** → **Variable auswählen** → **Transaktion**. Tippe erneut auf den Chip und wähle **Händler** aus der Liste – nicht „Transaktion“.

     ![Händler aus der Transaktion auswählen](https://qalta.app/assets/apple-pay-ios-27/en/11-merchant.png)
     *Abrufen → Händler*

12.  Die übrigen Felder sind optional. Optionen für **Kategorie** und **Konto**:

     -   **Auswählen** – wähle eine bestimmte Kategorie oder ein bestimmtes Konto aus Qalta. Hast du nur ein Konto, mach es so: einmal auswählen. Jedes Mal fragen brauchst du dann nicht.
     -   **Jedes Mal fragen** – nach jeder Zahlung fragt Qalta, wo die Ausgabe gespeichert werden soll. Praktisch bei mehreren Kategorien oder Konten.
     -   Du kannst **Auswählen** leer lassen – dann nutzt Qalta die Standardwerte und versucht, die Kategorie zu erkennen.

     **Währung**, **Notiz** und **Datum** können leer bleiben. Aktiviere **Beim Ausführen anzeigen**, damit nach der Zahlung eine Bestätigung erscheint. Tippe auf den Zurück-Pfeil.

     ![Kategorie, Konto und Beim Ausführen anzeigen](https://qalta.app/assets/apple-pay-ios-27/en/12-category-account.png)
     *Kategorie, Konto und Bestätigung*

13.  Der Kurzbefehl erscheint unter **Alle Kurzbefehle** als **Wallet-Ausgabe erstellen**. Nach deinem nächsten Apple Pay-Kauf mit der gewählten Karte bietet Qalta an, die Ausgabe zu speichern.

     ![Wallet-Ausgabe erstellen in Alle Kurzbefehle](https://qalta.app/assets/apple-pay-ios-27/en/13-all-shortcuts.png)
     *Fertig*

## Ganzes Video

Lieber anhand einer Bildschirmaufnahme mitmachen?

*Einrichtung unter iOS 27 Schritt für Schritt.*

[Alle Anleitungen](https://qalta.app/de/tutorials/)
