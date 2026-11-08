---
title: "iOS 27-де Apple Pay автоматтандыруы — Qalta"
description: "Әр Apple Pay сатып алуы Qalta-ға шығыс ретінде, Wallet-тегі сомасы мен сауда орнымен бірге сақталуы үшін жылдам пәрмен баптаңыз. iOS 27 үшін."
url: https://qalta.app/kk/tutorials/apple-pay-ios-27
---

# iOS 27-де Apple Pay автоматтандыруы

Apple Pay арқылы төлегеннен кейін Qalta сатып алуды шығыс ретінде сақтай алады. Сома мен сауда орны Wallet операциясынан алынады; санат пен шотты әр жолы таңдауға немесе алдын ала белгілеп қоюға болады.

Сізге iOS 27, **Qalta** және **Жылдам пәрмендер** қолданбалары, сондай-ақ Wallet-тегі карталар қажет. iOS 27-де Wallet триггері жаңа жылдам пәрменнің ішінде орналасқан — бөлек Автоматтандыру қойындысы жоқ.

1.  **Жылдам пәрмендер** қолданбасын ашып, жаңа жылдам пәрмен жасау үшін төмендегі **+** түймесін басыңыз.

    ![Плюс түймесі бар All Shortcuts экраны](https://qalta.app/assets/apple-pay-ios-27/en/01-shortcuts.png)
    *Жаңа жылдам пәрмен*

2.  Бос редактор ашылады. Әрекеттерді іздеу өрісінде **Автоматтандыру** белгісін басыңыз — немесе «Автоматтандыру» деп теріңіз.

    ![Автоматтандыру белгісі бар бос редактор](https://qalta.app/assets/apple-pay-ios-27/en/02-new-shortcut.png)
    *Автоматтандыру белгісі*

3.  **Қолданбалар** бөлімінде **Wallet** тармағын басыңыз — «When I tap a Wallet Card or Pass» (терминалда төлеу).

    ![Автоматтандыру тізіміндегі Wallet триггері](https://qalta.app/assets/apple-pay-ios-27/en/03-wallet-trigger.png)
    *Wallet триггері*

4.  Бірінші блокта **When Any Card is tapped** деп жазылған. Qalta тек кейбір карталар үшін іске қосылсын десеңіз, көк **Any Card** белгісін басыңыз.

    ![When Any Card is tapped триггері](https://qalta.app/assets/apple-pay-ios-27/en/04-any-card.png)
    *Any Card*

5.  Төлейтін картаңызды таңдаңыз (мысалы, **Kaspi Gold**). Құсбелгіні басыңыз.

    ![Төлем картасын таңдау](https://qalta.app/assets/apple-pay-ios-27/en/05-select-card.png)
    *Қай картаны бақылау керек*

6.  Енді бір блок көрінуі керек: **When \[сіздің картаңыз\] is tapped**. Төмендегі іздеу өрісіне **Qalta** деп теріңіз.

    ![Таңдалған картаға арналған Wallet триггері](https://qalta.app/assets/apple-pay-ios-27/en/06-card-tapped.png)
    *Карта триггері орнатылды*

7.  **Wallet шығысын жасау** әрекетін басыңыз («Операция жасау» емес).

    ![«Wallet шығысын жасау» әрекетін іздеу](https://qalta.app/assets/apple-pay-ios-27/en/07-search-qalta.png)
    *Qalta әрекеті*

8.  Екі блок көрінуі керек: Wallet триггері және Qalta әрекеті. Сұр **Сома** өрісін басыңыз — сандық пернетақта шығады. Оның үстінде **Select Variable** түймесін басыңыз.

    ![Сома өрісі және Select Variable](https://qalta.app/assets/apple-pay-ios-27/en/08-tap-amount.png)
    *Сома, содан кейін Select Variable*

9.  Select Variable экранында Wallet триггерінің астындағы көк **Transaction** белгісін басыңыз. Бұл — Shortcut Input емес, дәл Apple Pay төлемі.

    ![Wallet триггерінен Transaction таңдау](https://qalta.app/assets/apple-pay-ios-27/en/09-select-transaction.png)
    *Transaction*

10.  Енді Qalta әрекетінің ішінде тұрған көк **Transaction** белгісін басыңыз. Ашылған парақта құсбелгіні «Transaction» жанында қалдырмаңыз — **Amount** тармағын басыңыз.

     ![Transaction қасиеттері: Amount басыңыз](https://qalta.app/assets/apple-pay-ios-27/en/10-pick-amount.png)
     *Amount таңдау*

11.  Дүкен атауы үшін де солай қайталаңыз. Өрістерді ашу үшін Qalta әрекетіндегі көрсеткіні басыңыз. **Сауда орны** → **Select Variable** → **Transaction** басыңыз. Белгіні тағы басып, тізімнен «Transaction» емес, **Merchant** тармағын таңдаңыз.

     ![Операциядан Merchant таңдау](https://qalta.app/assets/apple-pay-ios-27/en/11-merchant.png)
     *Merchant таңдау*

12.  Қалған өрістер міндетті емес. **Санат** пен **Шот** үшін нұсқалар:

     -   **Choose** — Qalta-дағы нақты санат не шотты таңдаңыз. Шотыңыз біреу ғана болса, осылай жасаңыз: оны бір рет таңдасаңыз болды. Ask Each Time қажет емес.
     -   **Ask Each Time** — әр төлемнен кейін Qalta шығысты қайда сақтау керегін сұрайды. Санаттар не шоттар бірнешеу болса, ыңғайлы.
     -   **Choose** өрісін бос қалдыруға болады — Qalta әдепкі мәндерді қолданып, санатты өзі анықтауға тырысады.

     **Валюта**, **Ескертпе** және **Күні** өрістері бос қала берсін. Төлемнен кейін растау шығуы үшін **Show When Run** қосыңыз. Артқа көрсеткісін басыңыз.

     ![Санат, Шот және Show When Run](https://qalta.app/assets/apple-pay-ios-27/en/12-category-account.png)
     *Санат, шот және растау*

13.  Жылдам пәрмен **All Shortcuts** бөлімінде **Wallet шығысын жасау** деген атпен пайда болады. Таңдалған картамен келесі Apple Pay сатып алуынан кейін Qalta шығысты сақтауды ұсынады.

     ![All Shortcuts ішіндегі «Wallet шығысын жасау»](https://qalta.app/assets/apple-pay-ios-27/en/13-all-shortcuts.png)
     *Дайын*

## Толық бейне

Экран жазбасы бойынша қайталаған ыңғайлы ма?

*iOS 27-де баптау барысы.*

[Барлық нұсқаулық](https://qalta.app/kk/tutorials/)
