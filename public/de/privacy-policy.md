---
title: "Datenschutzerklärung — Qalta"
description: "Wie Qalta mit deinen Daten umgeht. Private Bereiche bleiben auf deinem iPhone, mit optionalem iCloud-Backup; geteilte Bereiche werden nur mit den Personen synchronisiert, die du einlädst; Sprache und Scans werden nur zum Auslesen an unseren Server und an OpenAI gesendet."
url: https://qalta.app/de/privacy-policy
---

# Datenschutzerklärung

Gültig ab: 16. Oktober 2026

Diese Übersetzung dient nur der Orientierung. Weicht sie von der [englischen Fassung](https://qalta.app/privacy-policy) ab, gilt die englische Fassung.

Diese Erklärung gilt für die mobile App Qalta („die App“), bereitgestellt von Daniel Tokkozhin („wir“). Sie erklärt, was auf deinem Gerät bleibt, was das Gerät verlässt und welche Unternehmen diese Daten verarbeiten.

## Private Bereiche bleiben auf deinem Gerät

Deine Einträge werden in Bereichen geführt. Ein privater Bereich mit seinen Konten, Buchungen, Kategorien, Budgets, Zielen, Schulden, wiederkehrenden Einträgen und ähnlichen Daten wird nur auf deinem Gerät gespeichert (SQLite). Wir laden private Bereiche nicht auf unsere Server hoch.

Wenn du die optionale Backup-Funktion nutzt, können Kopien in deinem iCloud-Account gespeichert werden. Dieser Speicher wird von Apple bereitgestellt und unterliegt der Datenschutzrichtlinie von Apple.

## Geteilte Bereiche

Das Teilen ist optional. Wenn du einen Bereich teilst, wird dieser Bereich mit allem, was er enthält (sein Name, Konten, Buchungen, Umbuchungen, Kategorien, Budgets, Ziele, Schulden, wiederkehrende Einträge und die Notizen, die du hinzufügst), zu unserem Backend-Anbieter Supabase hochgeladen und mit deinen anderen Geräten und mit den Personen, die du einlädst, synchronisiert. Nur Mitglieder des Bereichs haben Zugriff darauf. Bei jedem Eintrag wird angezeigt, welches Mitglied ihn erstellt und wer ihn zuletzt bearbeitet hat.

Mitglieder eines geteilten Bereichs sehen gegenseitig den Namen, die E-Mail-Adresse und das Profilbild aus dem Anmelde-Account sowie den Zeitpunkt, zu dem jedes Mitglied beigetreten ist. Einladungen sind einmalig nutzbare Links, die nach 7 Tagen ablaufen. Wir speichern den Einladungscode nur in gehashter Form, und abgelaufene Einladungen werden automatisch gelöscht.

Wenn der Eigentümer das Teilen beendet oder einen geteilten Bereich löscht, werden dessen Daten von unseren Servern gelöscht und alle Mitglieder verlieren den Zugriff; eine Kopie bleibt auf dem Gerät jedes Mitglieds, bis es sie entfernt. Wenn ein Mitglied den Bereich verlässt oder entfernt wird, verliert es den Zugriff auf die Daten auf unseren Servern. Wenn dein Abonnement endet, wird die Synchronisierung pausiert, und die bereits hochgeladenen Daten bleiben auf unseren Servern, bis der Bereich gelöscht wird.

## Account

Du meldest dich mit „Mit Apple anmelden“ oder „Mit Google anmelden“ an. Wir erhalten ein Identitätstoken von Apple oder Google und legen bei unserem Backend-Anbieter Supabase einen Account an. Dieser Account kann eine Nutzer-ID, eine E-Mail-Adresse (auch die Weiterleitungsadresse von Apples „E-Mail-Adresse verbergen“), deinen Namen und, bei Google, dein Profilbild enthalten. Du kannst den Namen, der anderen Mitgliedern angezeigt wird, in der App ändern.

Du kannst deinen Account in der App löschen. Dadurch werden der Account und die Abo-Daten entfernt, die wir speichern. Wenn du Eigentümer geteilter Bereiche mit anderen Mitgliedern bist, musst du diese Bereiche zuerst löschen oder deren Mitglieder entfernen. Die Daten in privaten Bereichen auf dem Gerät sind davon getrennt; du kannst lokale Finanzdaten außerdem in den Einstellungen löschen.

## Abonnements und Käufe

Käufe werden von Apple abgewickelt. Wir nutzen RevenueCat, um den Abo-Status abzufragen. Wir speichern in Supabase, verknüpft mit deiner Nutzer-ID, eine Premium-Kennzeichnung und KI-Nutzungszähler (wie viele Sprach-, Bild- und Dokumentanfragen du genutzt hast). Wir erhalten und speichern keine Zahlungskartennummern.

## Sprache, Scan, Dokumente und andere KI-Funktionen

Wenn du die Spracheingabe, den Beleg- oder Dokumentscan oder eine andere KI-Erkennung nutzt, sendet die App die von dir übermittelten Inhalte an unser Backend (Supabase Edge Functions). Das Backend leitet diese Inhalte an OpenAI weiter, damit die App Buchungen vorschlagen kann.

Je nach Funktion können diese Inhalte Folgendes umfassen:

-   Sprachaufnahmen;
-   Fotos von Belegen, Rechnungen, Kontoauszügen oder ähnlichen Dokumenten;
-   aus Dokumenten extrahierten Text;
-   von dir eingegebenen Text;
-   Namen von Konten und Kategorien auf dem Gerät sowie zugehörige Beträge und Währungen, damit das Modell sie zuordnen kann.

Diese Inhalte werden nur gesendet, um die von dir angeforderte Funktion bereitzustellen. Wir speichern die übermittelten Inhalte nicht in unserer Datenbank. Das Backend nutzt die Anfrage, um strukturierte Einträge zurückzugeben und die Nutzung auf deine Limits anzurechnen.

OpenAI verarbeitet die Anfrage gemäß seinen API-Bedingungen. Laut OpenAI werden API-Eingaben standardmäßig nicht zum Training seiner Modelle verwendet. OpenAI kann Daten für einen begrenzten Zeitraum aufbewahren, um die API zu betreiben und Missbrauch zu überwachen. Siehe die unten verlinkten Richtlinien von OpenAI.

KI-Funktionen sind optional. Du kannst Buchungen manuell hinzufügen, ohne diese Inhalte zu senden.

## Analyse, Abstürze und andere Netzwerkdaten

-   **Wechselkurse.** Die App lädt öffentliche Wechselkurs-Snapshots von unseren Servern. Das ist nicht deine Buchführung.
-   **Produktanalyse (PostHog).** Wir erfassen Ereignisse, etwa welche Funktionen du nutzt, ungefähre Nutzungszahlen (zum Beispiel die Anzahl der Buchungen, nicht die Beträge) und die App-Sprache. Die Ereignisse sind mit deiner Nutzer-ID verknüpft. Wir senden keine Buchungsbeträge, Notizen, Fotos oder Audioaufnahmen an PostHog.
-   **Absturzberichte (Sentry).** Wir senden Absturzdiagnosen, um Fehler zu beheben. Wir fügen diesen Berichten keine Bildschirmfotos und keine zusätzlichen personenbezogenen Daten bei.
-   **Technische Daten.** Wenn die App mit einem Server oder SDK kommuniziert, erhält diese Stelle in der Regel technische Informationen wie IP-Adresse, Gerätetyp und Betriebssystemversion.

## Was wir nicht tun

-   Wir verkaufen deine Daten nicht.
-   Wir nutzen deine Daten nicht für Werbenetzwerke und nicht, um dich über Apps und Websites anderer Unternehmen hinweg zu verfolgen.
-   Wir erfassen keinen genauen GPS-Standort. Die App nutzt die Sprach- und Regionseinstellungen des Geräts, nicht GPS.

## Drittanbieter als Auftragsverarbeiter

Diese Unternehmen verarbeiten Daten wie oben beschrieben. Jedes hat eine eigene Datenschutzrichtlinie:

-   [Apple](https://www.apple.com/legal/privacy/) – Mit Apple anmelden, App Store, In-App-Käufe, optionales iCloud-Backup
-   [Google](https://policies.google.com/privacy) – Mit Google anmelden
-   [Supabase](https://supabase.com/privacy) – Account, Abo- und Nutzungsdaten, geteilte Bereiche, Backend-Funktionen
-   [OpenAI](https://openai.com/policies/privacy-policy/) – KI-Verarbeitung der von dir übermittelten Inhalte ([Datenschutz für API / Enterprise](https://openai.com/enterprise-privacy/))
-   [RevenueCat](https://www.revenuecat.com/privacy) – Abo-Status
-   [PostHog](https://posthog.com/privacy) – Produktanalyse
-   [Sentry](https://sentry.io/privacy/) – Absturzberichte
-   [Expo](https://expo.dev/privacy) – App-Laufzeitumgebung

Wir können Informationen auch offenlegen, wenn dies gesetzlich vorgeschrieben ist oder wenn wir in gutem Glauben annehmen, dass die Offenlegung zum Schutz von Rechten oder der Sicherheit oder zur Aufklärung von Betrug erforderlich ist.

## Aufbewahrung und Löschung

-   Die Daten in privaten Bereichen bleiben auf deinem Gerät, bis du sie löschst oder die App deinstallierst (es sei denn, du behältst zusätzlich ein iCloud-Backup).
-   Die Daten in geteilten Bereichen werden auf unseren Servern aufbewahrt, solange der Bereich geteilt ist, und gelöscht, wenn der Eigentümer das Teilen beendet oder den Bereich löscht.
-   Account- und Nutzungsdaten werden aufbewahrt, solange du einen Account hast, und gelöscht, wenn du den Account löschst, zuzüglich eines kurzen Zeitraums, der zum Abschluss der Löschung nötig ist.
-   Die Inhalte von KI-Anfragen werden verarbeitet, um die Anfrage zu erfüllen. Wir speichern sie nicht als deine Einträge. Auftragsverarbeiter können sie gemäß ihren eigenen Richtlinien aufbewahren.
-   Analyse- und Absturzdaten werden so lange aufbewahrt, wie es für den Betrieb und die Verbesserung der App nötig ist.

Um Account-Daten zu löschen, nutze „Account löschen“ in der App oder schreibe an [help.qalta.app@outlook.com](mailto:help.qalta.app@outlook.com).

## Änderungen

Wir können diese Erklärung aktualisieren. Das oben genannte Datum des Inkrafttretens ändert sich dann. Wenn du die App nach einer Aktualisierung weiter nutzt, akzeptierst du die überarbeitete Erklärung.

## Kontakt

Daniel Tokkozhin
[help.qalta.app@outlook.com](mailto:help.qalta.app@outlook.com)
