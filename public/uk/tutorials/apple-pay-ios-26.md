---
title: "Автоматизація Apple Pay в iOS 26 — Qalta"
description: "Налаштуйте автоматизацію у «Швидких командах», щоб кожна покупка Apple Pay зберігалася в Qalta як витрата з уже заповненими сумою та магазином. Для iOS 26."
url: https://qalta.app/uk/tutorials/apple-pay-ios-26
---

# Автоматизація Apple Pay в iOS 26

Після оплати Apple Pay Qalta може зберегти покупку як витрату. Сума й магазин беруться з транзакції; категорію та рахунок можна вибирати щоразу або задати заздалегідь.

Знадобляться iOS 26, **Qalta** і **Швидкі команди**, а також картки у Wallet.

1.  Відкрийте **Параметри → Wallet і Apple Pay**. Увімкніть **Live Activities** і **Cellular Data**.

    ![Дозволи Wallet і Apple Pay](https://qalta.app/assets/apple-pay-ios-26/en/01-wallet-settings.png)
    *Дозволи Wallet*

2.  Відкрийте **Швидкі команди**, перейдіть на вкладку **Автоматизація** і натисніть **Нова автоматизація**.

    ![Вкладка «Автоматизація» у «Швидких командах»](https://qalta.app/assets/apple-pay-ios-26/en/02-automation-tab.png)
    *Нова автоматизація*

3.  Виберіть **Wallet** — «When I tap a Wallet Card or Pass» (оплата на терміналі).

    ![Тригер Wallet у списку автоматизацій](https://qalta.app/assets/apple-pay-ios-26/en/03-wallet-trigger.png)
    *Тригер Wallet*

4.  Виберіть картки, які має відстежувати Qalta. Натисніть **Далі**.

    ![Вибір платіжних карток](https://qalta.app/assets/apple-pay-ios-26/en/04-select-cards.png)
    *Які картки відстежувати*

5.  Залиште потрібні категорії Wallet (можна всі). Виберіть **Run Immediately** (не Run After Confirmation). Натисніть **Далі**.

    ![Категорії Wallet](https://qalta.app/assets/apple-pay-ios-26/en/05-categories.png)
    *Категорії*

6.  На екрані з плитками натисніть сіру картку **Create New Shortcut** угорі ліворуч. Не вибирайте наявну швидку команду зі списку нижче.

    ![Плитка Create New Shortcut](https://qalta.app/assets/apple-pay-ios-26/en/06-create-shortcut.png)
    *Нова швидка команда*

7.  Відкриється порожній редактор. У пошуку дій унизу введіть **Qalta** і натисніть **Створити витрату з Wallet** (не «Створити транзакцію»).

    ![Пошук дії «Створити витрату з Wallet»](https://qalta.app/assets/apple-pay-ios-26/en/07-search-qalta.png)
    *Дія Qalta*

8.  Мають бути два блоки: «Receive transaction as input» і дія Qalta. Натисніть сіре поле **Сума** в дії Qalta — з’явиться цифрова клавіатура. Над нею натисніть **Select Variable**.

    ![Поле «Сума» і Select Variable](https://qalta.app/assets/apple-pay-ios-26/en/08-tap-amount.png)
    *«Сума», потім Select Variable*

9.  На екрані Select Variable натисніть синій чип **Shortcut Input** під «Receive transaction as input».

    ![Вибір Shortcut Input як змінної](https://qalta.app/assets/apple-pay-ios-26/en/09-select-variable.png)
    *Shortcut Input*

10.  Натисніть синій чип **Shortcut Input**, що тепер стоїть у дії Qalta. У панелі тип має бути **Transaction**. Не залишайте галочку на «Transaction» — прокрутіть список і натисніть **Сума**.

     ![Властивості транзакції: натисніть «Сума»](https://qalta.app/assets/apple-pay-ios-26/en/10-pick-amount.png)
     *Тип Transaction → Сума*

11.  Повторіть для назви магазину. Натисніть шеврон на дії Qalta, щоб розгорнути поля. Натисніть **Магазин** → **Select Variable** → **Shortcut Input**. Знову натисніть чип, виберіть тип **Transaction**, а потім у списку — **Merchant**.

     ![Вибір Merchant із транзакції](https://qalta.app/assets/apple-pay-ios-26/en/11-merchant.png)
     *Тип Transaction → Merchant*

12.  Інші поля необов’язкові. Варіанти для **Категорія** і **Рахунок**:

     -   **Вибрати** — вкажіть конкретну категорію чи рахунок із Qalta. Якщо рахунок у вас один, так і зробіть: виберіть його один раз. «Запитувати щоразу» не потрібно.
     -   **Запитувати щоразу** — після кожного платежу Qalta запитає, куди зберегти витрату. Зручно, якщо у вас кілька категорій чи рахунків.
     -   Поле **Вибрати** можна залишити порожнім — Qalta використає типові значення й спробує визначити категорію.

     **Валюта**, **Нотатка** і **Дата** можуть лишатися порожніми. Увімкніть **Show When Run**, щоб після оплати з’являлося підтвердження. Натисніть синю галочку вгорі.

     ![«Категорія», «Рахунок» і Show When Run](https://qalta.app/assets/apple-pay-ios-26/en/12-category-account.png)
     *Категорія, рахунок і підтвердження*

13.  Автоматизація з’явиться на вкладці **Автоматизація**. Після наступної покупки Apple Pay вибраною карткою Qalta запропонує зберегти витрату.

     ![Готова автоматизація у списку](https://qalta.app/assets/apple-pay-ios-26/en/13-automation-list.png)
     *Готово*

## Повне відео

Зручніше повторювати за записом екрана?

*Покрокове налаштування в iOS 26.*

[Усі інструкції](https://qalta.app/uk/tutorials/)
