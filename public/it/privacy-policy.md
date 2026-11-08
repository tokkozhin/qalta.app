---
title: "Informativa sulla privacy — Qalta"
description: "Come Qalta tratta i tuoi dati. Gli spazi privati restano sul tuo iPhone con backup iCloud facoltativo; gli spazi condivisi si sincronizzano solo con le persone che inviti; voce e scansioni vengono inviate al nostro server e a OpenAI solo per leggerle."
url: https://qalta.app/it/privacy-policy
---

# Informativa sulla privacy

Data di entrata in vigore: 16 ottobre 2026

Questa traduzione è fornita per comodità. In caso di differenze rispetto alla [versione inglese](https://qalta.app/privacy-policy), prevale la versione inglese.

La presente informativa si applica all’app mobile Qalta (“l’app”) fornita da Daniel Tokkozhin (“noi”). Spiega quali dati restano sul tuo dispositivo, quali lasciano il dispositivo e quali aziende trattano tali dati.

## Gli spazi privati restano sul tuo dispositivo

I tuoi dati sono conservati in spazi. Uno spazio privato, con i relativi conti, operazioni, categorie, budget, obiettivi, debiti, voci ricorrenti e dati analoghi, è memorizzato solo sul tuo dispositivo (SQLite). Non carichiamo gli spazi privati sui nostri server.

Se utilizzi la funzione di backup facoltativa, le copie possono essere archiviate nel tuo account iCloud. Tale archiviazione è fornita da Apple ed è disciplinata dall’informativa sulla privacy di Apple.

## Spazi condivisi

La condivisione è facoltativa. Se condividi uno spazio, tale spazio e tutto ciò che contiene (il nome, i conti, le operazioni, i trasferimenti, le categorie, i budget, gli obiettivi, i debiti, le voci ricorrenti e le note che aggiungi) vengono caricati presso il nostro fornitore di backend, Supabase, e mantenuti sincronizzati con gli altri tuoi dispositivi e con le persone che inviti. Solo i membri dello spazio possono accedervi. Ogni dato indica quale membro lo ha creato e chi lo ha modificato per ultimo.

I membri di uno spazio condiviso possono vedere il nome, l’indirizzo email e l’immagine del profilo reciproci provenienti dall’account di accesso, nonché quando ciascun membro si è unito. Gli inviti sono link monouso che scadono dopo 7 giorni. Conserviamo solo una forma hash del codice di invito e gli inviti scaduti vengono eliminati automaticamente.

Quando il proprietario interrompe la condivisione o elimina uno spazio condiviso, i relativi dati vengono eliminati dai nostri server e ogni membro perde l’accesso; una copia resta sul dispositivo di ciascun membro finché non la rimuove. Quando un membro esce o viene rimosso, perde l’accesso ai dati sui nostri server. Se il tuo abbonamento termina, la sincronizzazione viene sospesa e i dati già caricati restano sui nostri server finché lo spazio non viene eliminato.

## Account

Accedi con Accedi con Apple o Accedi con Google. Riceviamo un token di identità da Apple o Google e creiamo un account presso il nostro fornitore di backend, Supabase. Tale account può includere un ID utente, un indirizzo email (compreso l’inoltro Nascondi la mia email di Apple), il tuo nome e, con Google, la tua immagine del profilo. Puoi modificare nell’app il nome mostrato agli altri membri.

Puoi eliminare il tuo account nell’app. In questo modo vengono rimossi l’account e i dati di abbonamento che conserviamo. Se sei proprietario di spazi condivisi con altri membri, devi prima eliminare tali spazi o rimuoverne i membri. I dati degli spazi privati sul dispositivo sono separati; puoi anche cancellare i dati finanziari locali nelle Impostazioni.

## Abbonamenti e acquisti

Gli acquisti sono elaborati da Apple. Utilizziamo RevenueCat per leggere lo stato dell’abbonamento. Conserviamo in Supabase un indicatore premium e i contatori di utilizzo dell’IA (quante richieste vocali, di immagini e di documenti hai utilizzato), collegati al tuo ID utente. Non riceviamo né conserviamo i numeri delle carte di pagamento.

## Voce, scansione, documenti e altre funzioni di IA

Quando utilizzi l’input vocale, la scansione di scontrini o documenti o altre funzioni di estrazione tramite IA, l’app invia i contenuti che hai inviato al nostro backend (Supabase Edge Functions). Il backend inoltra tali contenuti a OpenAI affinché l’app possa proporre operazioni.

A seconda della funzione, tali contenuti possono includere:

-   audio vocale;
-   foto di scontrini, bollette, estratti conto o documenti simili;
-   testo estratto dai documenti;
-   testo che hai digitato;
-   nomi dei conti e delle categorie presenti sul dispositivo, con i relativi importi e valute, affinché il modello possa abbinarli.

Questi contenuti vengono inviati solo per fornire la funzione che hai richiesto. Non conserviamo i contenuti inviati nel nostro database. Il backend utilizza la richiesta per restituire voci strutturate e per conteggiare l’utilizzo rispetto ai tuoi limiti.

OpenAI tratta la richiesta in base ai propri termini per le API. OpenAI dichiara che, per impostazione predefinita, gli input inviati tramite API non vengono utilizzati per addestrare i suoi modelli. OpenAI può conservare i dati per un periodo limitato per gestire l’API e per il monitoraggio degli abusi. Consulta le policy di OpenAI indicate di seguito.

Le funzioni di IA sono facoltative. Puoi aggiungere operazioni manualmente senza inviare questi contenuti.

## Analisi, arresti anomali e altri dati di rete

-   **Tassi di cambio.** L’app scarica dai nostri server istantanee pubbliche dei tassi di cambio. Non si tratta del tuo registro.
-   **Analisi del prodotto (PostHog).** Registriamo eventi come le funzioni che utilizzi, conteggi approssimativi di utilizzo (ad esempio il numero di operazioni, non gli importi) e la lingua dell’app. Gli eventi sono associati al tuo ID utente. Non inviamo a PostHog importi delle operazioni, note, foto o audio.
-   **Segnalazioni di arresto anomalo (Sentry).** Inviamo dati diagnostici sugli arresti anomali per aiutarci a correggere i bug. Non alleghiamo a tali segnalazioni screenshot né ulteriori informazioni personali.
-   **Dati tecnici.** Quando l’app comunica con un server o un SDK, tale soggetto riceve di norma informazioni tecniche come indirizzo IP, tipo di dispositivo e versione del sistema operativo.

## Cosa non facciamo

-   Non vendiamo i tuoi dati.
-   Non utilizziamo i tuoi dati per reti pubblicitarie né per tracciarti nelle app e nei siti web di altre aziende.
-   Non raccogliamo la posizione GPS precisa. L’app utilizza le impostazioni di lingua e area geografica del dispositivo, non il GPS.

## Responsabili del trattamento di terze parti

Queste aziende trattano i dati come descritto sopra. Ciascuna ha la propria informativa sulla privacy:

-   [Apple](https://www.apple.com/legal/privacy/) — Accedi con Apple, App Store, acquisti in-app, backup iCloud facoltativo
-   [Google](https://policies.google.com/privacy) — Accedi con Google
-   [Supabase](https://supabase.com/privacy) — account, dati di abbonamento e utilizzo, spazi condivisi, funzioni di backend
-   [OpenAI](https://openai.com/policies/privacy-policy/) — elaborazione tramite IA dei contenuti che invii ([privacy API / enterprise](https://openai.com/enterprise-privacy/))
-   [RevenueCat](https://www.revenuecat.com/privacy) — stato dell’abbonamento
-   [PostHog](https://posthog.com/privacy) — analisi del prodotto
-   [Sentry](https://sentry.io/privacy/) — segnalazioni di arresto anomalo
-   [Expo](https://expo.dev/privacy) — runtime dell’app

Possiamo inoltre divulgare informazioni se richiesto dalla legge o se riteniamo in buona fede che la divulgazione sia necessaria per tutelare diritti o la sicurezza, o per indagare su frodi.

## Conservazione ed eliminazione

-   I dati degli spazi privati restano sul tuo dispositivo finché non li elimini o non disinstalli l’app (a meno che tu non conservi anche un backup iCloud).
-   I dati degli spazi condivisi vengono conservati sui nostri server finché lo spazio è condiviso e vengono eliminati quando il proprietario interrompe la condivisione o lo elimina.
-   I dati dell’account e di utilizzo vengono conservati finché hai un account e vengono eliminati quando elimini l’account, oltre a un breve periodo necessario per completare l’eliminazione.
-   I contenuti delle richieste di IA vengono elaborati per soddisfare la richiesta. Non li conserviamo come tuoi dati. I responsabili del trattamento possono conservarli secondo le proprie policy.
-   I dati di analisi e sugli arresti anomali vengono conservati per il tempo necessario a gestire e migliorare l’app.

Per eliminare i dati dell’account, usa Elimina account nell’app oppure scrivi a [help.qalta.app@outlook.com](mailto:help.qalta.app@outlook.com).

## Modifiche

Possiamo aggiornare la presente informativa. La data di entrata in vigore indicata sopra cambierà di conseguenza. L’uso continuato dopo un aggiornamento implica l’accettazione dell’informativa modificata.

## Contatti

Daniel Tokkozhin
[help.qalta.app@outlook.com](mailto:help.qalta.app@outlook.com)
