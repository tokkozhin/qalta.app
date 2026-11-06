---
title: "Apple Pay automation on iOS 27 — Qalta"
description: "Set up a shortcut so every Apple Pay purchase is saved in Qalta as an expense, with the amount and merchant from Wallet. For iOS 27."
url: https://qalta.app/tutorials/apple-pay-ios-27
---

# Apple Pay automation on iOS 27

After an Apple Pay payment, Qalta can save the purchase as an expense. Amount and merchant come from the Wallet transaction; you can pick category and account each time, or set them in advance.

You need iOS 27, **Qalta** and **Shortcuts**, and cards in Wallet. On iOS 27 the Wallet trigger lives inside a new shortcut — there is no separate Automation tab.

1.  Open **Shortcuts** and tap the **+** button at the bottom to create a new shortcut.

    ![All Shortcuts with the plus button](https://qalta.app/assets/apple-pay-ios-27/en/01-shortcuts.png)
    *New shortcut*

2.  An empty editor opens. In the action search, tap the **Automation** chip — or type “Automation”.

    ![Empty shortcut editor with the Automation chip](https://qalta.app/assets/apple-pay-ios-27/en/02-new-shortcut.png)
    *Automation chip*

3.  Under **Apps**, tap **Wallet** — “When I tap a Wallet Card or Pass” (payment at a terminal).

    ![Wallet trigger in the Automation list](https://qalta.app/assets/apple-pay-ios-27/en/03-wallet-trigger.png)
    *Wallet trigger*

4.  The first block says **When Any Card is tapped**. If you only want Qalta to run for some cards, tap the blue **Any Card** chip.

    ![When Any Card is tapped trigger](https://qalta.app/assets/apple-pay-ios-27/en/04-any-card.png)
    *Any Card*

5.  Select the card you pay with (for example **Kaspi Gold**). Tap the checkmark.

    ![Selecting a payment card](https://qalta.app/assets/apple-pay-ios-27/en/05-select-card.png)
    *Which card to track*

6.  You should now see one block: **When \[your card\] is tapped**. In the search field at the bottom, type **Qalta**.

    ![Wallet trigger for the selected card](https://qalta.app/assets/apple-pay-ios-27/en/06-card-tapped.png)
    *Card trigger is set*

7.  Tap **Create Wallet Expense** (not “Create Transaction”).

    ![Searching for Create Wallet Expense](https://qalta.app/assets/apple-pay-ios-27/en/07-search-qalta.png)
    *Qalta action*

8.  You should see two blocks: the Wallet trigger and the Qalta action. Tap the gray **Amount** field — a keypad appears. Above it, tap **Select Variable**.

    ![Amount field and Select Variable](https://qalta.app/assets/apple-pay-ios-27/en/08-tap-amount.png)
    *Tap Amount, then Select Variable*

9.  On the Select Variable screen, tap the blue **Transaction** chip under the Wallet trigger. That is the Apple Pay payment, not Shortcut Input.

    ![Selecting Transaction from the Wallet trigger](https://qalta.app/assets/apple-pay-ios-27/en/09-select-transaction.png)
    *Transaction*

10.  Tap the blue **Transaction** chip that now sits inside the Qalta action. In the sheet, do not leave the checkmark on “Transaction” — tap **Amount**.

     ![Transaction properties: tap Amount](https://qalta.app/assets/apple-pay-ios-27/en/10-pick-amount.png)
     *Get → Amount*

11.  Repeat for the store name. Tap the chevron on the Qalta action to expand the fields. Tap **Merchant** → **Select Variable** → **Transaction**. Tap the chip again and pick **Merchant** from the list — not “Transaction”.

     ![Picking Merchant from the transaction](https://qalta.app/assets/apple-pay-ios-27/en/11-merchant.png)
     *Get → Merchant*

12.  The remaining fields are optional. Options for **Category** and **Account**:

     -   **Choose** — pick a specific category or account from Qalta. If you only have one account, do that: select it once. You do not need Ask Each Time.
     -   **Ask Each Time** — after each payment Qalta will ask where to save the expense. Useful if you have several categories or accounts.
     -   You can leave **Choose** empty — Qalta will use defaults and try to detect the category.

     **Currency**, **Note**, and **Date** can stay empty. Turn on **Show When Run** so a confirmation appears after payment. Tap the back arrow.

     ![Category, Account, and Show When Run](https://qalta.app/assets/apple-pay-ios-27/en/12-category-account.png)
     *Category, account, and confirmation*

13.  The shortcut appears under **All Shortcuts** as **Create Wallet Expense**. After your next Apple Pay purchase with the selected card, Qalta will offer to save the expense.

     ![Create Wallet Expense in All Shortcuts](https://qalta.app/assets/apple-pay-ios-27/en/13-all-shortcuts.png)
     *All set*

## Full video

Prefer to follow along on a screen recording?

*Setup walkthrough on iOS 27.*

[All tutorials](https://qalta.app/tutorials/)
