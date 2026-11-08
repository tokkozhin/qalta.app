---
title: "iOS 27で銀行の通知をオートメーション — Qalta"
description: "銀行アプリからの支払い通知が、本文から読み取った金額付きでQaltaに支出として保存されるショートカットを設定します。iOS 27向け。"
url: https://qalta.app/ja/tutorials/push-notification-ios-27
---

# iOS 27で銀行の通知をオートメーション

銀行アプリから支払いの通知が届くと、Qaltaがそれを支出として保存できます。金額と店舗は通知のテキストから読み取ります。

必要なのは、iOS 27、**Qalta**と**ショートカット**、ロック画面に通知を送る銀行アプリです。このトリガーはiOS 26では使えません。

1.  **ショートカット**を開き、下部の**+**ボタンをタップして新しいショートカットを作成します。

    ![プラスボタンのある「すべてのショートカット」](https://qalta.app/assets/push-notification-ios-27/en/01-shortcuts.png)
    *新しいショートカット*

2.  空のエディタが開きます。アクション検索で**オートメーション**のチップをタップするか、「オートメーション」と入力します。

    ![オートメーションのチップがある空のショートカットエディタ](https://qalta.app/assets/push-notification-ios-27/en/02-new-shortcut.png)
    *オートメーションのチップ*

3.  **App**の下にある**通知**をタップします。「When I receive a notification from …」です。

    ![オートメーション一覧の通知のトリガー](https://qalta.app/assets/push-notification-ios-27/en/03-notification-trigger.png)
    *通知のトリガー*

4.  最初のブロックに**When I receive a notification from App**と表示されます。青い**App**のチップをタップして銀行を選びます。

    ![When I receive a notification from App](https://qalta.app/assets/push-notification-ios-27/en/04-from-app.png)
    *アプリを選ぶ*

5.  銀行を検索し、支払いの通知を送るアプリ（例：**Kaspi.kz**。関連するPayやQRのアプリではありません）をタップします。

    ![銀行を検索しているアプリ選択画面](https://qalta.app/assets/push-notification-ios-27/en/05-pick-bank.png)
    *銀行アプリ*

6.  **When I receive a notification from \[銀行\]**と表示されます。下部の検索フィールドに**Qalta**と入力します。

    ![選択した銀行アプリの通知のトリガー](https://qalta.app/assets/push-notification-ios-27/en/06-bank-selected.png)
    *銀行のトリガーを設定済み*

7.  **銀行の支出を記録**をタップします（「ウォレット支出を作成」でも「取引を作成」でもありません）。

    ![「銀行の支出を記録」を検索](https://qalta.app/assets/push-notification-ios-27/en/07-search-qalta.png)
    *Qaltaのアクション*

8.  通知のトリガーと**Qalta で 通知の本文 から銀行の支出を記録**の2つのブロックが表示されます。灰色の**通知の本文**フィールドをタップします。

    ![通知の本文フィールドのある「銀行の支出を記録」](https://qalta.app/assets/push-notification-ios-27/en/08-tap-body.png)
    *通知の本文をタップ*

9.  キーボードが表示されます。その上の**変数を選択**をタップし、トリガーの下にある青い**Notification**のチップをタップします。

    ![Notificationのチップがある「変数を選択」](https://qalta.app/assets/push-notification-ios-27/en/09-select-variable.png)
    *変数を選択 → Notification*

10.  Qaltaのアクション内に入った青い**Notification**のチップをタップします。表示されたシートで「Notification」にチェックを残さず、**Body**をタップします。Qaltaは通知オブジェクト全体ではなく、通知のテキストから金額を読み取ります。

     ![Notificationのプロパティ：Bodyをタップ](https://qalta.app/assets/push-notification-ios-27/en/10-pick-body.png)
     *取得 → Body*

11.  Qaltaのアクションが**Qalta で Body から銀行の支出を記録**になっていれば完了です。

     ![「銀行の支出を記録」に設定されたBody](https://qalta.app/assets/push-notification-ios-27/en/11-body-mapped.png)
     *Bodyを設定済み*

12.  残りのフィールドは任意です。山形マークをタップして展開します。**カテゴリ**と**口座**の設定方法：

     -   **選択** — Qaltaの特定のカテゴリや口座を選びます。口座が1つだけなら、一度選んでおけば十分です。「毎回確認」は必要ありません。
     -   **毎回確認** — 通知のたびに、Qaltaが支出の保存先を尋ねます。カテゴリや口座が複数ある場合に便利です。
     -   **選択**を空欄のままにすることもできます。その場合、Qaltaは既定の設定を使い、カテゴリの自動検出を試みます。

     **メモ**と**日付**は空欄のままでかまいません。確認が表示されるよう、**実行時に表示**をオンにします。戻る矢印をタップします。

     ![カテゴリ、口座、実行時に表示](https://qalta.app/assets/push-notification-ios-27/en/12-category-account.png)
     *カテゴリ、口座、確認*

13.  ショートカットが**すべてのショートカット**に**銀行の支出を記録**として表示されます。次にその銀行アプリから支払いの通知が届くと、Qaltaが支出の保存を提案します。

     ![「すべてのショートカット」内の「銀行の支出を記録」](https://qalta.app/assets/push-notification-ios-27/en/13-all-shortcuts.png)
     *設定完了*

## 動画で見る

画面収録を見ながら進めたい方はこちら。

*iOS 27での設定手順。*

[すべてのガイド](https://qalta.app/ja/tutorials/)
