---
title: "iOS 26でApple Payのオートメーション — Qalta"
description: "Apple Payで支払うたびに、金額と店舗が入力された状態でQaltaに支出として保存されるショートカットのオートメーションを設定します。iOS 26向け。"
url: https://qalta.app/ja/tutorials/apple-pay-ios-26
---

# iOS 26でApple Payのオートメーション

Apple Payで支払った後、Qaltaがその購入を支出として保存できます。金額と店舗は取引から取得されます。カテゴリと口座は毎回選ぶことも、あらかじめ設定しておくこともできます。

必要なのは、iOS 26、**Qalta**と**ショートカット**、ウォレットに追加したカードです。

1.  **設定 → ウォレットと Apple Pay**を開きます。**ライブアクティビティ**と**モバイルデータ通信**をオンにします。

    ![ウォレットと Apple Pay の許可](https://qalta.app/assets/apple-pay-ios-26/en/01-wallet-settings.png)
    *ウォレットの許可*

2.  **ショートカット**を開き、**オートメーション**タブで**新規オートメーション**をタップします。

    ![ショートカットの「オートメーション」タブ](https://qalta.app/assets/apple-pay-ios-26/en/02-automation-tab.png)
    *新規オートメーション*

3.  **ウォレット**を選びます。「When I tap a Wallet Card or Pass」（端末での支払い）です。

    ![オートメーション一覧のウォレットのトリガー](https://qalta.app/assets/apple-pay-ios-26/en/03-wallet-trigger.png)
    *ウォレットのトリガー*

4.  Qaltaで記録したいカードを選び、**次へ**をタップします。

    ![支払いカードを選択](https://qalta.app/assets/apple-pay-ios-26/en/04-select-cards.png)
    *記録するカード*

5.  必要なウォレットのカテゴリを残します（すべてのままでもかまいません）。**すぐに実行**を選びます（Run After Confirmationではありません）。**次へ**をタップします。

    ![ウォレットのカテゴリ](https://qalta.app/assets/apple-pay-ios-26/en/05-categories.png)
    *カテゴリ*

6.  タイル画面で、左上の灰色の**Create New Shortcut**カードをタップします。下の一覧から既存のショートカットを選ばないでください。

    ![Create New Shortcut のタイル](https://qalta.app/assets/apple-pay-ios-26/en/06-create-shortcut.png)
    *新しいショートカット*

7.  空のエディタが開きます。下部のアクション検索に**Qalta**と入力し、**ウォレット支出を作成**をタップします（「取引を作成」ではありません）。

    ![「ウォレット支出を作成」を検索](https://qalta.app/assets/apple-pay-ios-26/en/07-search-qalta.png)
    *Qaltaのアクション*

8.  「Receive transaction as input」とQaltaのアクションの2つのブロックが表示されます。Qaltaのアクションにある灰色の**金額**フィールドをタップするとテンキーが表示されます。その上の**変数を選択**をタップします。

    ![金額フィールドと「変数を選択」](https://qalta.app/assets/apple-pay-ios-26/en/08-tap-amount.png)
    *金額をタップして、変数を選択*

9.  「変数を選択」画面で、「Receive transaction as input」の下にある青い**ショートカットの入力**のチップをタップします。

    ![変数として「ショートカットの入力」を選択](https://qalta.app/assets/apple-pay-ios-26/en/09-select-variable.png)
    *ショートカットの入力*

10.  Qaltaのアクション内に入った青い**ショートカットの入力**のチップをタップします。シートでは、種類が**Transaction**になっているはずです。「Transaction」にチェックを残さず、一覧をスクロールして**Amount**をタップします。

     ![Transactionのプロパティ：Amountをタップ](https://qalta.app/assets/apple-pay-ios-26/en/10-pick-amount.png)
     *種類 Transaction → Amount*

11.  店名も同じように設定します。Qaltaのアクションの山形マークをタップしてフィールドを展開します。**店舗** → **変数を選択** → **ショートカットの入力**の順にタップします。もう一度チップをタップし、種類を**Transaction**にして、一覧から**Merchant**を選びます。

     ![取引からMerchantを選択](https://qalta.app/assets/apple-pay-ios-26/en/11-merchant.png)
     *種類 Transaction → Merchant*

12.  残りのフィールドは任意です。**カテゴリ**と**口座**の設定方法：

     -   **選択** — Qaltaの特定のカテゴリや口座を選びます。口座が1つだけなら、一度選んでおけば十分です。「毎回確認」は必要ありません。
     -   **毎回確認** — 支払いのたびに、Qaltaが支出の保存先を尋ねます。カテゴリや口座が複数ある場合に便利です。
     -   **選択**を空欄のままにすることもできます。その場合、Qaltaは既定の設定を使い、カテゴリの自動検出を試みます。

     **通貨**、**メモ**、**日付**は空欄のままでかまいません。支払い後に確認が表示されるよう、**実行時に表示**をオンにします。上部の青いチェックマークをタップします。

     ![カテゴリ、口座、実行時に表示](https://qalta.app/assets/apple-pay-ios-26/en/12-category-account.png)
     *カテゴリ、口座、確認*

13.  オートメーションが**オートメーション**に表示されます。次に選択したカードでApple Payを使うと、Qaltaが支出の保存を提案します。

     ![一覧に表示された完成したオートメーション](https://qalta.app/assets/apple-pay-ios-26/en/13-automation-list.png)
     *設定完了*

## 動画で見る

画面収録を見ながら進めたい方はこちら。

*iOS 26での設定手順。*

[すべてのガイド](https://qalta.app/ja/tutorials/)
