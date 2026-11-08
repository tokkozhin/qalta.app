---
title: "Automazione delle notifiche bancarie su iOS 27 — Qalta"
description: "Configura un comando rapido per salvare in Qalta come spesa una notifica di pagamento dell’app della banca, con l’importo letto dal testo. Per iOS 27."
url: https://qalta.app/it/tutorials/push-notification-ios-27
---

# Automazione delle notifiche bancarie su iOS 27

Quando l’app della banca invia una notifica di pagamento, Qalta può salvarla come spesa. Importo ed esercente vengono estratti dal testo della notifica.

Ti servono iOS 27, **Qalta** e **Comandi Rapidi**, e un’app bancaria che mostri notifiche sulla schermata di blocco. Questo attivatore non è disponibile su iOS 26.

1.  Apri **Comandi Rapidi** e tocca il pulsante **+** in basso per creare un nuovo comando rapido.

    ![Tutti i comandi rapidi con il pulsante più](https://qalta.app/assets/push-notification-ios-27/en/01-shortcuts.png)
    *Nuovo comando rapido*

2.  Si apre un editor vuoto. Nella ricerca delle azioni, tocca il chip **Automazione**, oppure digita «Automazione».

    ![Editor del comando rapido vuoto con il chip Automazione](https://qalta.app/assets/push-notification-ios-27/en/02-new-shortcut.png)
    *Chip Automazione*

3.  In **App**, tocca **Notifica** — “When I receive a notification from …”.

    ![Attivatore Notifica nell’elenco Automazione](https://qalta.app/assets/push-notification-ios-27/en/03-notification-trigger.png)
    *Attivatore Notifica*

4.  Il primo blocco dice **When I receive a notification from App**. Tocca il chip blu **App** per scegliere la tua banca.

    ![When I receive a notification from App](https://qalta.app/assets/push-notification-ios-27/en/04-from-app.png)
    *Scegli l’app*

5.  Cerca la tua banca e tocca l’app che invia gli avvisi di pagamento (ad esempio **Kaspi.kz**, non un’app collegata per Pay o QR).

    ![Selettore app con la ricerca della banca](https://qalta.app/assets/push-notification-ios-27/en/05-pick-bank.png)
    *App della banca*

6.  Ora dovresti vedere **When I receive a notification from \[banca\]**. Nel campo di ricerca in basso, digita **Qalta**.

    ![Attivatore Notifica per l’app della banca selezionata](https://qalta.app/assets/push-notification-ios-27/en/06-bank-selected.png)
    *Attivatore della banca impostato*

7.  Tocca **Registra spesa bancaria** (non «Crea spesa Wallet» e non «Crea transazione»).

    ![Ricerca di Registra spesa bancaria](https://qalta.app/assets/push-notification-ios-27/en/07-search-qalta.png)
    *Azione di Qalta*

8.  Dovresti vedere due blocchi: l’attivatore della notifica e **Registra spesa bancaria da Corpo della notifica**. Tocca il campo grigio **Corpo della notifica**.

    ![Registra spesa bancaria con il campo Corpo della notifica](https://qalta.app/assets/push-notification-ios-27/en/08-tap-body.png)
    *Tocca Corpo della notifica*

9.  Compare una tastiera. Sopra, tocca **Seleziona variabile**, poi tocca il chip blu **Notifica** sotto l’attivatore.

    ![Seleziona variabile con il chip Notifica](https://qalta.app/assets/push-notification-ios-27/en/09-select-variable.png)
    *Seleziona variabile → Notifica*

10.  Tocca il chip blu **Notifica** che ora si trova dentro l’azione di Qalta. Nel pannello, non lasciare la spunta su «Notifica»: tocca **Body**. Qalta legge l’importo dal testo della notifica, non dall’intero oggetto notifica.

     ![Proprietà della notifica: tocca Body](https://qalta.app/assets/push-notification-ios-27/en/10-pick-body.png)
     *Ottieni → Body*

11.  Ora l’azione di Qalta dovrebbe dire **Registra spesa bancaria da Body**.

     ![Body collegato in Registra spesa bancaria](https://qalta.app/assets/push-notification-ios-27/en/11-body-mapped.png)
     *Body collegato*

12.  Gli altri campi sono facoltativi. Tocca la freccia per espanderli. Opzioni per **Categoria** e **Conto**:

     -   **Scegli**: seleziona una categoria o un conto specifico di Qalta. Se hai un solo conto, fai così: selezionalo una volta. Non ti serve Chiedi ogni volta.
     -   **Chiedi ogni volta**: dopo ogni notifica Qalta ti chiederà dove salvare la spesa. Utile se hai più categorie o conti.
     -   Puoi lasciare vuoto **Scegli**: Qalta userà i valori predefiniti e cercherà di rilevare la categoria.

     **Nota** e **Data** possono restare vuoti. Attiva **Mostra durante l’esecuzione** per vedere una conferma. Tocca la freccia indietro.

     ![Categoria, Conto e Mostra durante l’esecuzione](https://qalta.app/assets/push-notification-ios-27/en/12-category-account.png)
     *Categoria, conto e conferma*

13.  Il comando rapido compare in **Tutti i comandi rapidi** come **Registra spesa bancaria**. Dopo la prossima notifica di pagamento di quell’app bancaria, Qalta ti proporrà di salvare la spesa.

     ![Registra spesa bancaria in Tutti i comandi rapidi](https://qalta.app/assets/push-notification-ios-27/en/13-all-shortcuts.png)
     *Tutto pronto*

## Video completo

Preferisci seguire una registrazione dello schermo?

*Configurazione passo passo su iOS 27.*

[Tutte le guide](https://qalta.app/it/tutorials/)
