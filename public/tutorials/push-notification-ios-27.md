---
title: "Bank notification automation on iOS 27 — Qalta"
description: "Set up a shortcut so a payment notification from your bank app is saved in Qalta as an expense, with the amount read from the text. For iOS 27."
url: https://qalta.app/tutorials/push-notification-ios-27
---

# Bank notification automation on iOS 27

When your bank app sends a payment notification, Qalta can save it as an expense. The amount and merchant are parsed from the notification text.

You need iOS 27, **Qalta** and **Shortcuts**, and a bank app that posts lock-screen notifications. This trigger is not available on iOS 26.

1.  Open **Shortcuts** and tap the **+** button at the bottom to create a new shortcut.

    ![All Shortcuts with the plus button](https://qalta.app/assets/push-notification-ios-27/en/01-shortcuts.png)
    *New shortcut*

2.  An empty editor opens. In the action search, tap the **Automation** chip — or type “Automation”.

    ![Empty shortcut editor with the Automation chip](https://qalta.app/assets/push-notification-ios-27/en/02-new-shortcut.png)
    *Automation chip*

3.  Under **Apps**, tap **Notification** — “When I receive a notification from …”.

    ![Notification trigger in the Automation list](https://qalta.app/assets/push-notification-ios-27/en/03-notification-trigger.png)
    *Notification trigger*

4.  The first block says **When I receive a notification from App**. Tap the blue **App** chip to choose your bank.

    ![When I receive a notification from App](https://qalta.app/assets/push-notification-ios-27/en/04-from-app.png)
    *Choose the app*

5.  Search for your bank and tap the app that sends payment alerts (for example **Kaspi.kz**, not a related Pay or QR app).

    ![App picker searching for the bank](https://qalta.app/assets/push-notification-ios-27/en/05-pick-bank.png)
    *Bank app*

6.  You should now see **When I receive a notification from \[bank\]**. In the search field at the bottom, type **Qalta**.

    ![Notification trigger for the selected bank app](https://qalta.app/assets/push-notification-ios-27/en/06-bank-selected.png)
    *Bank trigger is set*

7.  Tap **Log Bank Expense** (not “Create Wallet Expense” and not “Create Transaction”).

    ![Searching for Log Bank Expense](https://qalta.app/assets/push-notification-ios-27/en/07-search-qalta.png)
    *Qalta action*

8.  You should see two blocks: the notification trigger and **Log bank expense from Notification body**. Tap the gray **Notification body** field.

    ![Log bank expense with Notification body field](https://qalta.app/assets/push-notification-ios-27/en/08-tap-body.png)
    *Tap Notification body*

9.  A keyboard appears. Above it, tap **Select Variable**, then tap the blue **Notification** chip under the trigger.

    ![Select Variable with the Notification chip](https://qalta.app/assets/push-notification-ios-27/en/09-select-variable.png)
    *Select Variable → Notification*

10.  Tap the blue **Notification** chip that now sits inside the Qalta action. In the sheet, do not leave the checkmark on “Notification” — tap **Body**. Qalta reads the amount from the notification text, not from the whole notification object.

     ![Notification properties: tap Body](https://qalta.app/assets/push-notification-ios-27/en/10-pick-body.png)
     *Get → Body*

11.  The Qalta action should now say **Log bank expense from Body**.

     ![Body mapped into Log bank expense](https://qalta.app/assets/push-notification-ios-27/en/11-body-mapped.png)
     *Body is mapped*

12.  The remaining fields are optional. Tap the chevron to expand them. Options for **Category** and **Account**:

     -   **Choose** — pick a specific category or account from Qalta. If you only have one account, do that: select it once. You do not need Ask Each Time.
     -   **Ask Each Time** — after each notification Qalta will ask where to save the expense. Useful if you have several categories or accounts.
     -   You can leave **Choose** empty — Qalta will use defaults and try to detect the category.

     **Note** and **Date** can stay empty. Turn on **Show When Run** so a confirmation appears. Tap the back arrow.

     ![Category, Account, and Show When Run](https://qalta.app/assets/push-notification-ios-27/en/12-category-account.png)
     *Category, account, and confirmation*

13.  The shortcut appears under **All Shortcuts** as **Log Bank Expense**. After the next payment notification from that bank app, Qalta will offer to save the expense.

     ![Log Bank Expense in All Shortcuts](https://qalta.app/assets/push-notification-ios-27/en/13-all-shortcuts.png)
     *All set*

## Full video

Prefer to follow along on a screen recording?

*Setup walkthrough on iOS 27.*

[All tutorials](https://qalta.app/tutorials/)
