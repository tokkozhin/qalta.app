---
title: "Apple Pay-Automation unter iOS 26 — Qalta"
description: "Richte eine Automation in Kurzbefehle ein, damit jeder Apple Pay-Kauf in Qalta als Ausgabe gespeichert wird, mit Betrag und Händler. Für iOS 26."
url: https://qalta.app/de/tutorials/apple-pay-ios-26
---

# Apple Pay-Automation unter iOS 26

Nach einer Apple Pay-Zahlung kann Qalta den Kauf als Ausgabe speichern. Betrag und Händler kommen aus der Transaktion; Kategorie und Konto wählst du jedes Mal oder legst sie vorab fest.

Du brauchst iOS 26, **Qalta** und **Kurzbefehle** sowie Karten in Wallet.

1.  Öffne **Einstellungen → Wallet & Apple Pay**. Aktiviere **Live-Aktivitäten** und **Mobile Daten**.

    ![Berechtigungen für Wallet & Apple Pay](https://qalta.app/assets/apple-pay-ios-26/en/01-wallet-settings.png)
    *Wallet-Berechtigungen*

2.  Öffne **Kurzbefehle**, wechsle zum Tab **Automation** und tippe auf **Neue Automation**.

    ![Tab Automation in Kurzbefehle](https://qalta.app/assets/apple-pay-ios-26/en/02-automation-tab.png)
    *Neue Automation*

3.  Wähle **Wallet** – „When I tap a Wallet Card or Pass“ (Zahlung am Terminal).

    ![Wallet-Auslöser in der Liste der Automationen](https://qalta.app/assets/apple-pay-ios-26/en/03-wallet-trigger.png)
    *Wallet-Auslöser*

4.  Wähle die Karten, die Qalta erfassen soll. Tippe auf **Weiter**.

    ![Zahlungskarten auswählen](https://qalta.app/assets/apple-pay-ios-26/en/04-select-cards.png)
    *Welche Karten erfasst werden*

5.  Behalte die Wallet-Kategorien, die dir wichtig sind (alle ist auch in Ordnung). Wähle **Sofort ausführen** (nicht Nach Bestätigung ausführen). Tippe auf **Weiter**.

    ![Wallet-Kategorien](https://qalta.app/assets/apple-pay-ios-26/en/05-categories.png)
    *Kategorien*

6.  Tippe im Kachelbildschirm oben links auf die graue Karte **Neuen Kurzbefehl erstellen**. Wähle keinen vorhandenen Kurzbefehl aus der Liste darunter.

    ![Kachel Neuen Kurzbefehl erstellen](https://qalta.app/assets/apple-pay-ios-26/en/06-create-shortcut.png)
    *Neuer Kurzbefehl*

7.  Ein leerer Editor öffnet sich. Gib unten in der Aktionssuche **Qalta** ein und tippe auf **Wallet-Ausgabe erstellen** (nicht „Transaktion erstellen“).

    ![Suche nach Wallet-Ausgabe erstellen](https://qalta.app/assets/apple-pay-ios-26/en/07-search-qalta.png)
    *Qalta-Aktion*

8.  Du siehst zwei Blöcke: „Receive transaction as input“ und die Qalta-Aktion. Tippe in der Qalta-Aktion auf das graue Feld **Betrag** – ein Ziffernblock erscheint. Tippe darüber auf **Variable auswählen**.

    ![Feld Betrag und Variable auswählen](https://qalta.app/assets/apple-pay-ios-26/en/08-tap-amount.png)
    *Betrag, dann Variable auswählen*

9.  Tippe im Bildschirm Variable auswählen auf den blauen Chip **Kurzbefehleingabe** unter „Receive transaction as input“.

    ![Kurzbefehleingabe als Variable auswählen](https://qalta.app/assets/apple-pay-ios-26/en/09-select-variable.png)
    *Kurzbefehleingabe*

10.  Tippe auf den blauen Chip **Kurzbefehleingabe**, der jetzt in der Qalta-Aktion steht. Im Fenster sollte als Typ **Transaktion** eingestellt sein. Lass das Häkchen nicht auf „Transaktion“ – scrolle durch die Liste und tippe auf **Betrag**.

     ![Eigenschaften der Transaktion: auf Betrag tippen](https://qalta.app/assets/apple-pay-ios-26/en/10-pick-amount.png)
     *Typ Transaktion → Betrag*

11.  Wiederhole das für den Namen des Geschäfts. Tippe auf den Pfeil der Qalta-Aktion, um die Felder einzublenden. Tippe auf **Händler** → **Variable auswählen** → **Kurzbefehleingabe**. Tippe erneut auf den Chip, Typ **Transaktion**, und wähle dann **Händler** aus der Liste.

     ![Händler aus der Transaktion auswählen](https://qalta.app/assets/apple-pay-ios-26/en/11-merchant.png)
     *Typ Transaktion → Händler*

12.  Die übrigen Felder sind optional. Optionen für **Kategorie** und **Konto**:

     -   **Auswählen** – wähle eine bestimmte Kategorie oder ein bestimmtes Konto aus Qalta. Hast du nur ein Konto, mach es so: einmal auswählen. Jedes Mal fragen brauchst du dann nicht.
     -   **Jedes Mal fragen** – nach jeder Zahlung fragt Qalta, wo die Ausgabe gespeichert werden soll. Praktisch bei mehreren Kategorien oder Konten.
     -   Du kannst **Auswählen** leer lassen – dann nutzt Qalta die Standardwerte und versucht, die Kategorie zu erkennen.

     **Währung**, **Notiz** und **Datum** können leer bleiben. Aktiviere **Beim Ausführen anzeigen**, damit nach der Zahlung eine Bestätigung erscheint. Tippe oben auf das blaue Häkchen.

     ![Kategorie, Konto und Beim Ausführen anzeigen](https://qalta.app/assets/apple-pay-ios-26/en/12-category-account.png)
     *Kategorie, Konto und Bestätigung*

13.  Die Automation erscheint unter **Automation**. Nach deinem nächsten Apple Pay-Kauf mit der gewählten Karte bietet Qalta an, die Ausgabe zu speichern.

     ![Fertige Automation in der Liste](https://qalta.app/assets/apple-pay-ios-26/en/13-automation-list.png)
     *Fertig*

## Ganzes Video

Lieber anhand einer Bildschirmaufnahme mitmachen?

*Einrichtung unter iOS 26 Schritt für Schritt.*

[Alle Anleitungen](https://qalta.app/de/tutorials/)
