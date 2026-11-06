---
title: "iOS 27’de banka bildirimi otomasyonu — Qalta"
description: "Banka uygulamanızdan gelen ödeme bildirimi, tutarı metinden okunarak Qalta’ya gider olarak kaydedilsin diye bir kestirme kurun. iOS 27 için."
url: https://qalta.app/tr/tutorials/push-notification-ios-27
---

# iOS 27’de banka bildirimi otomasyonu

Banka uygulamanız bir ödeme bildirimi gönderdiğinde Qalta bunu gider olarak kaydedebilir. Tutar ve işyeri bildirim metninden okunur.

Gerekenler: iOS 27, **Qalta** ve **Kestirmeler** uygulamaları ve kilit ekranına bildirim gönderen bir banka uygulaması. Bu tetikleyici iOS 26’da yoktur.

1.  **Kestirmeler**’i açın ve yeni bir kestirme oluşturmak için alttaki **+** düğmesine dokunun.

    ![Artı düğmesiyle Tüm Kestirmeler](https://qalta.app/assets/push-notification-ios-27/en/01-shortcuts.png)
    *Yeni kestirme*

2.  Boş bir düzenleyici açılır. Eylem aramasında **Otomasyon** etiketine dokunun — ya da “Otomasyon” yazın.

    ![Otomasyon etiketiyle boş kestirme düzenleyicisi](https://qalta.app/assets/push-notification-ios-27/en/02-new-shortcut.png)
    *Otomasyon etiketi*

3.  **Uygulamalar** altında **Bildirim**’e dokunun — “When I receive a notification from …”.

    ![Otomasyon listesinde Bildirim tetikleyicisi](https://qalta.app/assets/push-notification-ios-27/en/03-notification-trigger.png)
    *Bildirim tetikleyicisi*

4.  İlk blokta **When I receive a notification from App** yazar. Bankanızı seçmek için mavi **App** etiketine dokunun.

    ![When I receive a notification from App](https://qalta.app/assets/push-notification-ios-27/en/04-from-app.png)
    *Uygulamayı seçin*

5.  Bankanızı arayın ve ödeme uyarılarını gönderen uygulamaya dokunun (örneğin **Kaspi.kz**; ilgili Pay veya QR uygulamasına değil).

    ![Banka aranan uygulama seçici](https://qalta.app/assets/push-notification-ios-27/en/05-pick-bank.png)
    *Banka uygulaması*

6.  Artık **When I receive a notification from \[banka\]** görmelisiniz. Alttaki arama alanına **Qalta** yazın.

    ![Seçilen banka uygulaması için Bildirim tetikleyicisi](https://qalta.app/assets/push-notification-ios-27/en/06-bank-selected.png)
    *Banka tetikleyicisi hazır*

7.  **Log Bank Expense**’e dokunun (“Create Wallet Expense”e veya “Create Transaction”a değil).

    ![Log Bank Expense araması](https://qalta.app/assets/push-notification-ios-27/en/07-search-qalta.png)
    *Qalta eylemi*

8.  İki blok görmelisiniz: bildirim tetikleyicisi ve **Log bank expense from Notification body**. Gri **Notification body** (bildirim metni) alanına dokunun.

    ![Notification body alanıyla Log bank expense](https://qalta.app/assets/push-notification-ios-27/en/08-tap-body.png)
    *Notification body’ye dokunun*

9.  Klavye açılır. Hemen üstünde **Değişken Seç**’e, ardından tetikleyicinin altındaki mavi **Notification** etiketine dokunun.

    ![Notification etiketiyle Değişken Seç](https://qalta.app/assets/push-notification-ios-27/en/09-select-variable.png)
    *Değişken Seç → Notification*

10.  Artık Qalta eyleminin içinde duran mavi **Notification** etiketine dokunun. Açılan pencerede onay işaretini “Notification” üzerinde bırakmayın — **Body**’ye dokunun. Qalta tutarı bildirim nesnesinin tamamından değil, bildirim metninden okur.

     ![Notification özellikleri: Body’ye dokunun](https://qalta.app/assets/push-notification-ios-27/en/10-pick-body.png)
     *Al → Body*

11.  Qalta eyleminde artık **Log bank expense from Body** yazmalı.

     ![Log bank expense’e eşlenen Body](https://qalta.app/assets/push-notification-ios-27/en/11-body-mapped.png)
     *Body eşlendi*

12.  Kalan alanlar isteğe bağlıdır. Genişletmek için oka dokunun. **Category** (kategori) ve **Account** (hesap) için seçenekler:

     -   **Seç** — Qalta’dan belirli bir kategori veya hesap seçin. Tek hesabınız varsa bunu yapın: bir kez seçin. Her Seferinde Sor’a gerek yok.
     -   **Her Seferinde Sor** — her bildirimden sonra Qalta gideri nereye kaydedeceğini sorar. Birden fazla kategori veya hesabınız varsa kullanışlıdır.
     -   **Seç**’i boş bırakabilirsiniz — Qalta varsayılanları kullanır ve kategoriyi algılamaya çalışır.

     **Note** ve **Date** boş kalabilir. Onay görünsün diye **Çalıştırıldığında Göster**’i açın. Geri okuna dokunun.

     ![Category, Account ve Çalıştırıldığında Göster](https://qalta.app/assets/push-notification-ios-27/en/12-category-account.png)
     *Kategori, hesap ve onay*

13.  Kestirme **Tüm Kestirmeler** altında **Log Bank Expense** adıyla görünür. O banka uygulamasından gelecek bir sonraki ödeme bildiriminden sonra Qalta gideri kaydetmeyi önerecek.

     ![Tüm Kestirmeler’de Log Bank Expense](https://qalta.app/assets/push-notification-ios-27/en/13-all-shortcuts.png)
     *Hazır*

## Videonun tamamı

Ekran kaydını izleyerek ilerlemeyi mi tercih edersiniz?

*iOS 27’de kurulumun adım adım gösterimi.*

[Tüm rehberler](https://qalta.app/tr/tutorials/)
