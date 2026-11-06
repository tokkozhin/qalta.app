---
title: "Apple Pay automation on iOS 26 — Qalta"
description: "Set up a Shortcuts automation so every Apple Pay purchase is saved in Qalta as an expense, with the amount and merchant filled in. For iOS 26."
url: https://qalta.app/tutorials/apple-pay-ios-26
---

# Apple Pay automation on iOS 26

After an Apple Pay payment, Qalta can save the purchase as an expense. Amount and merchant come from the transaction; you can pick category and account each time, or set them in advance.

You need iOS 26, **Qalta** and **Shortcuts**, and cards in Wallet.

1.  Open **Settings → Wallet & Apple Pay**. Turn on **Live Activities** and **Cellular Data**.

    ![Wallet and Apple Pay permissions](https://qalta.app/assets/apple-pay-ios-26/en/01-wallet-settings.png)
    *Wallet permissions*

2.  Open **Shortcuts**, go to the **Automation** tab, and tap **New Automation**.

    ![Shortcuts Automation tab](https://qalta.app/assets/apple-pay-ios-26/en/02-automation-tab.png)
    *New automation*

3.  Choose **Wallet** — “When I tap a Wallet Card or Pass” (payment at a terminal).

    ![Wallet trigger in the automation list](https://qalta.app/assets/apple-pay-ios-26/en/03-wallet-trigger.png)
    *Wallet trigger*

4.  Select the cards you want Qalta to track. Tap **Next**.

    ![Selecting payment cards](https://qalta.app/assets/apple-pay-ios-26/en/04-select-cards.png)
    *Which cards to track*

5.  Keep the Wallet categories you care about (all is fine). Select **Run Immediately** (not Run After Confirmation). Tap **Next**.

    ![Wallet categories](https://qalta.app/assets/apple-pay-ios-26/en/05-categories.png)
    *Categories*

6.  On the tile screen, tap the gray **Create New Shortcut** card at the top left. Do not pick an existing shortcut from the list below.

    ![Create New Shortcut tile](https://qalta.app/assets/apple-pay-ios-26/en/06-create-shortcut.png)
    *New shortcut*

7.  An empty editor opens. In the action search at the bottom, type **Qalta** and tap **Create Wallet Expense** (not “Create Transaction”).

    ![Searching for Create Wallet Expense](https://qalta.app/assets/apple-pay-ios-26/en/07-search-qalta.png)
    *Qalta action*

8.  You should see two blocks: “Receive transaction as input” and the Qalta action. Tap the gray **Amount** field in the Qalta action — a keypad appears. Above it, tap **Select Variable**.

    ![Amount field and Select Variable](https://qalta.app/assets/apple-pay-ios-26/en/08-tap-amount.png)
    *Tap Amount, then Select Variable*

9.  On the Select Variable screen, tap the blue **Shortcut Input** chip under “Receive transaction as input”.

    ![Selecting Shortcut Input as the variable](https://qalta.app/assets/apple-pay-ios-26/en/09-select-variable.png)
    *Shortcut Input*

10.  Tap the blue **Shortcut Input** chip that now sits inside the Qalta action. In the sheet, Type should be **Transaction**. Do not leave the checkmark on “Transaction” — scroll the list and tap **Amount**.

     ![Transaction properties: tap Amount](https://qalta.app/assets/apple-pay-ios-26/en/10-pick-amount.png)
     *Type Transaction → Amount*

11.  Repeat for the store name. Tap the chevron on the Qalta action to expand the fields. Tap **Merchant** → **Select Variable** → **Shortcut Input**. Tap the chip again, Type **Transaction**, then pick **Merchant** from the list.

     ![Picking Merchant from the transaction](https://qalta.app/assets/apple-pay-ios-26/en/11-merchant.png)
     *Type Transaction → Merchant*

12.  The remaining fields are optional. Options for **Category** and **Account**:

     -   **Choose** — pick a specific category or account from Qalta. If you only have one account, do that: select it once. You do not need Ask Each Time.
     -   **Ask Each Time** — after each payment Qalta will ask where to save the expense. Useful if you have several categories or accounts.
     -   You can leave **Choose** empty — Qalta will use defaults and try to detect the category.

     **Currency**, **Note**, and **Date** can stay empty. Turn on **Show When Run** so a confirmation appears after payment. Tap the blue checkmark at the top.

     ![Category, Account, and Show When Run](https://qalta.app/assets/apple-pay-ios-26/en/12-category-account.png)
     *Category, account, and confirmation*

13.  The automation appears under **Automation**. After your next Apple Pay purchase with the selected card, Qalta will offer to save the expense.

     ![Finished automation in the list](https://qalta.app/assets/apple-pay-ios-26/en/13-automation-list.png)
     *All set*

## Full video

Prefer to follow along on a screen recording?

*Setup walkthrough on iOS 26.*

[All tutorials](https://qalta.app/tutorials/)
