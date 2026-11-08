---
title: "Automazione Apple Pay su iOS 26 — Qalta"
description: "Configura un’automazione di Comandi Rapidi per salvare in Qalta ogni acquisto con Apple Pay come spesa, con importo ed esercente già compilati. Per iOS 26."
url: https://qalta.app/it/tutorials/apple-pay-ios-26
---

# Automazione Apple Pay su iOS 26

Dopo un pagamento con Apple Pay, Qalta può salvare l’acquisto come spesa. Importo ed esercente arrivano dalla transazione; puoi scegliere categoria e conto ogni volta o impostarli in anticipo.

Ti servono iOS 26, **Qalta** e **Comandi Rapidi**, e delle carte in Wallet.

1.  Apri **Impostazioni → Wallet e Apple Pay**. Attiva **Attività in tempo reale** e **Dati cellulare**.

    ![Permessi di Wallet e Apple Pay](https://qalta.app/assets/apple-pay-ios-26/en/01-wallet-settings.png)
    *Permessi di Wallet*

2.  Apri **Comandi Rapidi**, vai al pannello **Automazione** e tocca **Nuova automazione**.

    ![Pannello Automazione di Comandi Rapidi](https://qalta.app/assets/apple-pay-ios-26/en/02-automation-tab.png)
    *Nuova automazione*

3.  Scegli **Wallet** — “When I tap a Wallet Card or Pass” (pagamento al terminale).

    ![Attivatore Wallet nell’elenco delle automazioni](https://qalta.app/assets/apple-pay-ios-26/en/03-wallet-trigger.png)
    *Attivatore Wallet*

4.  Seleziona le carte che vuoi far monitorare a Qalta. Tocca **Avanti**.

    ![Selezione delle carte di pagamento](https://qalta.app/assets/apple-pay-ios-26/en/04-select-cards.png)
    *Quali carte monitorare*

5.  Mantieni le categorie di Wallet che ti interessano (vanno bene tutte). Seleziona **Esegui immediatamente** (non Esegui dopo la conferma). Tocca **Avanti**.

    ![Categorie di Wallet](https://qalta.app/assets/apple-pay-ios-26/en/05-categories.png)
    *Categorie*

6.  Nella schermata con i riquadri, tocca la scheda grigia **Create New Shortcut** in alto a sinistra. Non scegliere un comando rapido esistente dall’elenco sotto.

    ![Riquadro Create New Shortcut](https://qalta.app/assets/apple-pay-ios-26/en/06-create-shortcut.png)
    *Nuovo comando rapido*

7.  Si apre un editor vuoto. Nella ricerca delle azioni in basso, digita **Qalta** e tocca **Crea spesa Wallet** (non «Crea transazione»).

    ![Ricerca di Crea spesa Wallet](https://qalta.app/assets/apple-pay-ios-26/en/07-search-qalta.png)
    *Azione di Qalta*

8.  Dovresti vedere due blocchi: “Receive transaction as input” e l’azione di Qalta. Tocca il campo grigio **Importo** nell’azione di Qalta: compare un tastierino. Sopra, tocca **Seleziona variabile**.

    ![Campo Importo e Seleziona variabile](https://qalta.app/assets/apple-pay-ios-26/en/08-tap-amount.png)
    *Tocca Importo, poi Seleziona variabile*

9.  Nella schermata Seleziona variabile, tocca il chip blu **Input comando rapido** sotto “Receive transaction as input”.

    ![Selezione di Input comando rapido come variabile](https://qalta.app/assets/apple-pay-ios-26/en/09-select-variable.png)
    *Input comando rapido*

10.  Tocca il chip blu **Input comando rapido** che ora si trova dentro l’azione di Qalta. Nel pannello, Tipo deve essere **Transazione**. Non lasciare la spunta su «Transazione»: scorri l’elenco e tocca **Importo**.

     ![Proprietà della transazione: tocca Importo](https://qalta.app/assets/apple-pay-ios-26/en/10-pick-amount.png)
     *Tipo Transazione → Importo*

11.  Ripeti per il nome del negozio. Tocca la freccia sull’azione di Qalta per espandere i campi. Tocca **Esercente** → **Seleziona variabile** → **Input comando rapido**. Tocca di nuovo il chip, Tipo **Transazione**, poi scegli **Esercente** dall’elenco.

     ![Scelta di Esercente dalla transazione](https://qalta.app/assets/apple-pay-ios-26/en/11-merchant.png)
     *Tipo Transazione → Esercente*

12.  Gli altri campi sono facoltativi. Opzioni per **Categoria** e **Conto**:

     -   **Scegli**: seleziona una categoria o un conto specifico di Qalta. Se hai un solo conto, fai così: selezionalo una volta. Non ti serve Chiedi ogni volta.
     -   **Chiedi ogni volta**: dopo ogni pagamento Qalta ti chiederà dove salvare la spesa. Utile se hai più categorie o conti.
     -   Puoi lasciare vuoto **Scegli**: Qalta userà i valori predefiniti e cercherà di rilevare la categoria.

     **Valuta**, **Nota** e **Data** possono restare vuoti. Attiva **Mostra durante l’esecuzione** per vedere una conferma dopo il pagamento. Tocca la spunta blu in alto.

     ![Categoria, Conto e Mostra durante l’esecuzione](https://qalta.app/assets/apple-pay-ios-26/en/12-category-account.png)
     *Categoria, conto e conferma*

13.  L’automazione compare in **Automazione**. Dopo il prossimo acquisto con Apple Pay con la carta selezionata, Qalta ti proporrà di salvare la spesa.

     ![Automazione completata nell’elenco](https://qalta.app/assets/apple-pay-ios-26/en/13-automation-list.png)
     *Tutto pronto*

## Video completo

Preferisci seguire una registrazione dello schermo?

*Configurazione passo passo su iOS 26.*

[Tutte le guide](https://qalta.app/it/tutorials/)
