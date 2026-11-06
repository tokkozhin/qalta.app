---
title: "Automazione Apple Pay su iOS 27 — Qalta"
description: "Configura un comando rapido per salvare in Qalta ogni acquisto con Apple Pay come spesa, con importo ed esercente presi da Wallet. Per iOS 27."
url: https://qalta.app/it/tutorials/apple-pay-ios-27
---

# Automazione Apple Pay su iOS 27

Dopo un pagamento con Apple Pay, Qalta può salvare l’acquisto come spesa. Importo ed esercente arrivano dalla transazione di Wallet; puoi scegliere categoria e conto ogni volta o impostarli in anticipo.

Ti servono iOS 27, **Qalta** e **Comandi Rapidi**, e delle carte in Wallet. Su iOS 27 l’attivatore di Wallet si trova all’interno di un nuovo comando rapido: non c’è un pannello Automazione separato.

1.  Apri **Comandi Rapidi** e tocca il pulsante **+** in basso per creare un nuovo comando rapido.

    ![Tutti i comandi rapidi con il pulsante più](https://qalta.app/assets/apple-pay-ios-27/en/01-shortcuts.png)
    *Nuovo comando rapido*

2.  Si apre un editor vuoto. Nella ricerca delle azioni, tocca il chip **Automazione**, oppure digita «Automazione».

    ![Editor del comando rapido vuoto con il chip Automazione](https://qalta.app/assets/apple-pay-ios-27/en/02-new-shortcut.png)
    *Chip Automazione*

3.  In **App**, tocca **Wallet** — “When I tap a Wallet Card or Pass” (pagamento al terminale).

    ![Attivatore Wallet nell’elenco Automazione](https://qalta.app/assets/apple-pay-ios-27/en/03-wallet-trigger.png)
    *Attivatore Wallet*

4.  Il primo blocco dice **When Any Card is tapped**. Se vuoi che Qalta si attivi solo per alcune carte, tocca il chip blu **Any Card**.

    ![Attivatore When Any Card is tapped](https://qalta.app/assets/apple-pay-ios-27/en/04-any-card.png)
    *Any Card*

5.  Seleziona la carta con cui paghi (ad esempio **Kaspi Gold**). Tocca il segno di spunta.

    ![Selezione di una carta di pagamento](https://qalta.app/assets/apple-pay-ios-27/en/05-select-card.png)
    *Quale carta monitorare*

6.  Ora dovresti vedere un solo blocco: **When \[la tua carta\] is tapped**. Nel campo di ricerca in basso, digita **Qalta**.

    ![Attivatore Wallet per la carta selezionata](https://qalta.app/assets/apple-pay-ios-27/en/06-card-tapped.png)
    *Attivatore della carta impostato*

7.  Tocca **Crea spesa Wallet** (non «Crea transazione»).

    ![Ricerca di Crea spesa Wallet](https://qalta.app/assets/apple-pay-ios-27/en/07-search-qalta.png)
    *Azione di Qalta*

8.  Dovresti vedere due blocchi: l’attivatore Wallet e l’azione di Qalta. Tocca il campo grigio **Importo**: compare un tastierino. Sopra, tocca **Seleziona variabile**.

    ![Campo Importo e Seleziona variabile](https://qalta.app/assets/apple-pay-ios-27/en/08-tap-amount.png)
    *Tocca Importo, poi Seleziona variabile*

9.  Nella schermata Seleziona variabile, tocca il chip blu **Transazione** sotto l’attivatore Wallet. È il pagamento Apple Pay, non Input comando rapido.

    ![Selezione di Transazione dall’attivatore Wallet](https://qalta.app/assets/apple-pay-ios-27/en/09-select-transaction.png)
    *Transazione*

10.  Tocca il chip blu **Transazione** che ora si trova dentro l’azione di Qalta. Nel pannello, non lasciare la spunta su «Transazione»: tocca **Importo**.

     ![Proprietà della transazione: tocca Importo](https://qalta.app/assets/apple-pay-ios-27/en/10-pick-amount.png)
     *Ottieni → Importo*

11.  Ripeti per il nome del negozio. Tocca la freccia sull’azione di Qalta per espandere i campi. Tocca **Esercente** → **Seleziona variabile** → **Transazione**. Tocca di nuovo il chip e scegli **Esercente** dall’elenco, non «Transazione».

     ![Scelta di Esercente dalla transazione](https://qalta.app/assets/apple-pay-ios-27/en/11-merchant.png)
     *Ottieni → Esercente*

12.  Gli altri campi sono facoltativi. Opzioni per **Categoria** e **Conto**:

     -   **Scegli**: seleziona una categoria o un conto specifico di Qalta. Se hai un solo conto, fai così: selezionalo una volta. Non ti serve Chiedi ogni volta.
     -   **Chiedi ogni volta**: dopo ogni pagamento Qalta ti chiederà dove salvare la spesa. Utile se hai più categorie o conti.
     -   Puoi lasciare vuoto **Scegli**: Qalta userà i valori predefiniti e cercherà di rilevare la categoria.

     **Valuta**, **Nota** e **Data** possono restare vuoti. Attiva **Mostra durante l’esecuzione** per vedere una conferma dopo il pagamento. Tocca la freccia indietro.

     ![Categoria, Conto e Mostra durante l’esecuzione](https://qalta.app/assets/apple-pay-ios-27/en/12-category-account.png)
     *Categoria, conto e conferma*

13.  Il comando rapido compare in **Tutti i comandi rapidi** come **Crea spesa Wallet**. Dopo il prossimo acquisto con Apple Pay con la carta selezionata, Qalta ti proporrà di salvare la spesa.

     ![Crea spesa Wallet in Tutti i comandi rapidi](https://qalta.app/assets/apple-pay-ios-27/en/13-all-shortcuts.png)
     *Tutto pronto*

## Video completo

Preferisci seguire una registrazione dello schermo?

*Configurazione passo passo su iOS 27.*

[Tutte le guide](https://qalta.app/it/tutorials/)
