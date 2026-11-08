---
title: "iOS 27でApple Payのオートメーション — Qalta"
description: "Apple Payで支払うたびに、ウォレットの金額と店舗付きでQaltaに支出として保存されるショートカットを設定します。iOS 27向け。"
url: https://qalta.app/ja/tutorials/apple-pay-ios-27
---

# iOS 27でApple Payのオートメーション

Apple Payで支払った後、Qaltaがその購入を支出として保存できます。金額と店舗はウォレットの取引から取得されます。カテゴリと口座は毎回選ぶことも、あらかじめ設定しておくこともできます。

必要なのは、iOS 27、**Qalta**と**ショートカット**、ウォレットに追加したカードです。iOS 27では、ウォレットのトリガーは新しいショートカットの中にあり、独立した「オートメーション」タブはありません。

1.  **ショートカット**を開き、下部の**+**ボタンをタップして新しいショートカットを作成します。

    ![プラスボタンのある「すべてのショートカット」](https://qalta.app/assets/apple-pay-ios-27/en/01-shortcuts.png)
    *新しいショートカット*

2.  空のエディタが開きます。アクション検索で**オートメーション**のチップをタップするか、「オートメーション」と入力します。

    ![オートメーションのチップがある空のショートカットエディタ](https://qalta.app/assets/apple-pay-ios-27/en/02-new-shortcut.png)
    *オートメーションのチップ*

3.  **App**の下にある**ウォレット**をタップします。「When I tap a Wallet Card or Pass」（端末での支払い）です。

    ![オートメーション一覧のウォレットのトリガー](https://qalta.app/assets/apple-pay-ios-27/en/03-wallet-trigger.png)
    *ウォレットのトリガー*

4.  最初のブロックに**When Any Card is tapped**と表示されます。一部のカードだけでQaltaを実行したい場合は、青い**Any Card**のチップをタップします。

    ![When Any Card is tapped のトリガー](https://qalta.app/assets/apple-pay-ios-27/en/04-any-card.png)
    *Any Card*

5.  支払いに使うカード（例：**Kaspi Gold**）を選び、チェックマークをタップします。

    ![支払いカードを選択](https://qalta.app/assets/apple-pay-ios-27/en/05-select-card.png)
    *記録するカード*

6.  ブロックが1つ表示されます：**When \[あなたのカード\] is tapped**。下部の検索フィールドに**Qalta**と入力します。

    ![選択したカードのウォレットのトリガー](https://qalta.app/assets/apple-pay-ios-27/en/06-card-tapped.png)
    *カードのトリガーを設定済み*

7.  **ウォレット支出を作成**をタップします（「取引を作成」ではありません）。

    ![「ウォレット支出を作成」を検索](https://qalta.app/assets/apple-pay-ios-27/en/07-search-qalta.png)
    *Qaltaのアクション*

8.  ウォレットのトリガーとQaltaのアクションの2つのブロックが表示されます。灰色の**金額**フィールドをタップするとテンキーが表示されます。その上の**変数を選択**をタップします。

    ![金額フィールドと「変数を選択」](https://qalta.app/assets/apple-pay-ios-27/en/08-tap-amount.png)
    *金額をタップして、変数を選択*

9.  「変数を選択」画面で、ウォレットのトリガーの下にある青い**Transaction**のチップをタップします。これがApple Payの支払いで、「ショートカットの入力」ではありません。

    ![ウォレットのトリガーからTransactionを選択](https://qalta.app/assets/apple-pay-ios-27/en/09-select-transaction.png)
    *Transaction*

10.  Qaltaのアクション内に入った青い**Transaction**のチップをタップします。表示されたシートで「Transaction」にチェックを残さず、**Amount**をタップします。

     ![Transactionのプロパティ：Amountをタップ](https://qalta.app/assets/apple-pay-ios-27/en/10-pick-amount.png)
     *取得 → Amount*

11.  店名も同じように設定します。Qaltaのアクションの山形マークをタップしてフィールドを展開します。**店舗** → **変数を選択** → **Transaction**の順にタップします。もう一度チップをタップし、一覧から「Transaction」ではなく**Merchant**を選びます。

     ![取引からMerchantを選択](https://qalta.app/assets/apple-pay-ios-27/en/11-merchant.png)
     *取得 → Merchant*

12.  残りのフィールドは任意です。**カテゴリ**と**口座**の設定方法：

     -   **選択** — Qaltaの特定のカテゴリや口座を選びます。口座が1つだけなら、一度選んでおけば十分です。「毎回確認」は必要ありません。
     -   **毎回確認** — 支払いのたびに、Qaltaが支出の保存先を尋ねます。カテゴリや口座が複数ある場合に便利です。
     -   **選択**を空欄のままにすることもできます。その場合、Qaltaは既定の設定を使い、カテゴリの自動検出を試みます。

     **通貨**、**メモ**、**日付**は空欄のままでかまいません。支払い後に確認が表示されるよう、**実行時に表示**をオンにします。戻る矢印をタップします。

     ![カテゴリ、口座、実行時に表示](https://qalta.app/assets/apple-pay-ios-27/en/12-category-account.png)
     *カテゴリ、口座、確認*

13.  ショートカットが**すべてのショートカット**に**ウォレット支出を作成**として表示されます。次に選択したカードでApple Payを使うと、Qaltaが支出の保存を提案します。

     ![「すべてのショートカット」内の「ウォレット支出を作成」](https://qalta.app/assets/apple-pay-ios-27/en/13-all-shortcuts.png)
     *設定完了*

## 動画で見る

画面収録を見ながら進めたい方はこちら。

*iOS 27での設定手順。*

[すべてのガイド](https://qalta.app/ja/tutorials/)
