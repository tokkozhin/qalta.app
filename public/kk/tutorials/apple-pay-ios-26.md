---
title: "iOS 26-да Apple Pay автоматтандыруы — Qalta"
description: "Әр Apple Pay сатып алуы Qalta-ға шығыс ретінде, сомасы мен сауда орны толтырылып, сақталуы үшін «Жылдам пәрмендер» автоматтандыруын баптаңыз. iOS 26 үшін."
url: https://qalta.app/kk/tutorials/apple-pay-ios-26
---

# iOS 26-да Apple Pay автоматтандыруы

Apple Pay арқылы төлегеннен кейін Qalta сатып алуды шығыс ретінде сақтай алады. Сома мен сауда орны операциядан алынады; санат пен шотты әр жолы таңдауға немесе алдын ала белгілеп қоюға болады.

Сізге iOS 26, **Qalta** және **Жылдам пәрмендер** қолданбалары, сондай-ақ Wallet-тегі карталар қажет.

1.  **Параметрлер → Wallet және Apple Pay** бөлімін ашыңыз. **Live Activities** және **Cellular Data** қосыңыз.

    ![Wallet және Apple Pay рұқсаттары](https://qalta.app/assets/apple-pay-ios-26/en/01-wallet-settings.png)
    *Wallet рұқсаттары*

2.  **Жылдам пәрмендер** қолданбасын ашып, **Автоматтандыру** қойындысына өтіңіз де, **Жаңа автоматтандыру** түймесін басыңыз.

    ![«Жылдам пәрмендер» ішіндегі Автоматтандыру қойындысы](https://qalta.app/assets/apple-pay-ios-26/en/02-automation-tab.png)
    *Жаңа автоматтандыру*

3.  **Wallet** тармағын таңдаңыз — «When I tap a Wallet Card or Pass» (терминалда төлеу).

    ![Автоматтандыру тізіміндегі Wallet триггері](https://qalta.app/assets/apple-pay-ios-26/en/03-wallet-trigger.png)
    *Wallet триггері*

4.  Qalta бақылайтын карталарды таңдаңыз. **Келесі** түймесін басыңыз.

    ![Төлем карталарын таңдау](https://qalta.app/assets/apple-pay-ios-26/en/04-select-cards.png)
    *Қай карталарды бақылау керек*

5.  Өзіңізге керек Wallet санаттарын қалдырыңыз (бәрін қалдыруға да болады). **Run Immediately** таңдаңыз (Run After Confirmation емес). **Келесі** түймесін басыңыз.

    ![Wallet санаттары](https://qalta.app/assets/apple-pay-ios-26/en/05-categories.png)
    *Санаттар*

6.  Тақтайшалар экранында сол жақ жоғарғы бұрыштағы сұр **Create New Shortcut** карточкасын басыңыз. Төмендегі тізімнен бар жылдам пәрменді таңдамаңыз.

    ![Create New Shortcut тақтайшасы](https://qalta.app/assets/apple-pay-ios-26/en/06-create-shortcut.png)
    *Жаңа жылдам пәрмен*

7.  Бос редактор ашылады. Төмендегі әрекеттерді іздеу өрісіне **Qalta** деп теріп, **Wallet шығысын жасау** әрекетін басыңыз («Операция жасау» емес).

    ![«Wallet шығысын жасау» әрекетін іздеу](https://qalta.app/assets/apple-pay-ios-26/en/07-search-qalta.png)
    *Qalta әрекеті*

8.  Екі блок көрінуі керек: «Receive transaction as input» және Qalta әрекеті. Qalta әрекетіндегі сұр **Сома** өрісін басыңыз — сандық пернетақта шығады. Оның үстінде **Select Variable** түймесін басыңыз.

    ![Сома өрісі және Select Variable](https://qalta.app/assets/apple-pay-ios-26/en/08-tap-amount.png)
    *Сома, содан кейін Select Variable*

9.  Select Variable экранында «Receive transaction as input» астындағы көк **Shortcut Input** белгісін басыңыз.

    ![Айнымалы ретінде Shortcut Input таңдау](https://qalta.app/assets/apple-pay-ios-26/en/09-select-variable.png)
    *Shortcut Input*

10.  Енді Qalta әрекетінің ішінде тұрған көк **Shortcut Input** белгісін басыңыз. Ашылған парақта Type мәні **Transaction** болуы керек. Құсбелгіні «Transaction» жанында қалдырмаңыз — тізімді айналдырып, **Amount** тармағын басыңыз.

     ![Transaction қасиеттері: Amount басыңыз](https://qalta.app/assets/apple-pay-ios-26/en/10-pick-amount.png)
     *Type Transaction → Amount*

11.  Дүкен атауы үшін де солай қайталаңыз. Өрістерді ашу үшін Qalta әрекетіндегі көрсеткіні басыңыз. **Сауда орны** → **Select Variable** → **Shortcut Input** басыңыз. Белгіні тағы басып, Type: **Transaction**, содан кейін тізімнен **Merchant** тармағын таңдаңыз.

     ![Операциядан Merchant таңдау](https://qalta.app/assets/apple-pay-ios-26/en/11-merchant.png)
     *Type Transaction → Merchant*

12.  Қалған өрістер міндетті емес. **Санат** пен **Шот** үшін нұсқалар:

     -   **Choose** — Qalta-дағы нақты санат не шотты таңдаңыз. Шотыңыз біреу ғана болса, осылай жасаңыз: оны бір рет таңдасаңыз болды. Ask Each Time қажет емес.
     -   **Ask Each Time** — әр төлемнен кейін Qalta шығысты қайда сақтау керегін сұрайды. Санаттар не шоттар бірнешеу болса, ыңғайлы.
     -   **Choose** өрісін бос қалдыруға болады — Qalta әдепкі мәндерді қолданып, санатты өзі анықтауға тырысады.

     **Валюта**, **Ескертпе** және **Күні** өрістері бос қала берсін. Төлемнен кейін растау шығуы үшін **Show When Run** қосыңыз. Жоғарыдағы көк құсбелгіні басыңыз.

     ![Санат, Шот және Show When Run](https://qalta.app/assets/apple-pay-ios-26/en/12-category-account.png)
     *Санат, шот және растау*

13.  Автоматтандыру **Автоматтандыру** қойындысында пайда болады. Таңдалған картамен келесі Apple Pay сатып алуынан кейін Qalta шығысты сақтауды ұсынады.

     ![Тізімдегі дайын автоматтандыру](https://qalta.app/assets/apple-pay-ios-26/en/13-automation-list.png)
     *Дайын*

## Толық бейне

Экран жазбасы бойынша қайталаған ыңғайлы ма?

*iOS 26-да баптау барысы.*

[Барлық нұсқаулық](https://qalta.app/kk/tutorials/)
