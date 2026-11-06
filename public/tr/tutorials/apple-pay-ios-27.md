---
title: "iOS 27’de Apple Pay otomasyonu — Qalta"
description: "Her Apple Pay alışverişi, tutarı ve işyeri Cüzdan’dan alınarak Qalta’ya gider olarak kaydedilsin diye bir kestirme kurun. iOS 27 için."
url: https://qalta.app/tr/tutorials/apple-pay-ios-27
---

# iOS 27’de Apple Pay otomasyonu

Apple Pay ile ödeme yaptıktan sonra Qalta alışverişi gider olarak kaydedebilir. Tutar ve işyeri Cüzdan işleminden gelir; kategoriyi ve hesabı her seferinde seçebilir ya da önceden belirleyebilirsiniz.

Gerekenler: iOS 27, **Qalta** ve **Kestirmeler** uygulamaları ve Cüzdan’da kartlar. iOS 27’de Cüzdan tetikleyicisi yeni bir kestirmenin içinde yer alır — ayrı bir Otomasyon sekmesi yoktur.

1.  **Kestirmeler**’i açın ve yeni bir kestirme oluşturmak için alttaki **+** düğmesine dokunun.

    ![Artı düğmesiyle Tüm Kestirmeler](https://qalta.app/assets/apple-pay-ios-27/en/01-shortcuts.png)
    *Yeni kestirme*

2.  Boş bir düzenleyici açılır. Eylem aramasında **Otomasyon** etiketine dokunun — ya da “Otomasyon” yazın.

    ![Otomasyon etiketiyle boş kestirme düzenleyicisi](https://qalta.app/assets/apple-pay-ios-27/en/02-new-shortcut.png)
    *Otomasyon etiketi*

3.  **Uygulamalar** altında **Cüzdan**’a dokunun — “When I tap a Wallet Card or Pass” (terminalde ödeme).

    ![Otomasyon listesinde Cüzdan tetikleyicisi](https://qalta.app/assets/apple-pay-ios-27/en/03-wallet-trigger.png)
    *Cüzdan tetikleyicisi*

4.  İlk blokta **When Any Card is tapped** yazar. Qalta’nın yalnızca bazı kartlarda çalışmasını istiyorsanız mavi **Any Card** etiketine dokunun.

    ![When Any Card is tapped tetikleyicisi](https://qalta.app/assets/apple-pay-ios-27/en/04-any-card.png)
    *Any Card*

5.  Ödeme yaptığınız kartı seçin (örneğin **Kaspi Gold**). Onay işaretine dokunun.

    ![Ödeme kartı seçimi](https://qalta.app/assets/apple-pay-ios-27/en/05-select-card.png)
    *Hangi kart takip edilsin*

6.  Artık tek bir blok görmelisiniz: **When \[kartınız\] is tapped**. Alttaki arama alanına **Qalta** yazın.

    ![Seçilen kart için Cüzdan tetikleyicisi](https://qalta.app/assets/apple-pay-ios-27/en/06-card-tapped.png)
    *Kart tetikleyicisi hazır*

7.  **Create Wallet Expense**’e dokunun (“Create Transaction”a değil).

    ![Create Wallet Expense araması](https://qalta.app/assets/apple-pay-ios-27/en/07-search-qalta.png)
    *Qalta eylemi*

8.  İki blok görmelisiniz: Cüzdan tetikleyicisi ve Qalta eylemi. Gri **Amount** (tutar) alanına dokunun — tuş takımı açılır. Hemen üstünde **Değişken Seç**’e dokunun.

    ![Amount alanı ve Değişken Seç](https://qalta.app/assets/apple-pay-ios-27/en/08-tap-amount.png)
    *Amount’a, sonra Değişken Seç’e dokunun*

9.  Değişken Seç ekranında, Cüzdan tetikleyicisinin altındaki mavi **Transaction** etiketine dokunun. Bu, Apple Pay ödemesidir; Kestirme Girdisi değil.

    ![Cüzdan tetikleyicisinden Transaction seçimi](https://qalta.app/assets/apple-pay-ios-27/en/09-select-transaction.png)
    *Transaction*

10.  Artık Qalta eyleminin içinde duran mavi **Transaction** etiketine dokunun. Açılan pencerede onay işaretini “Transaction” üzerinde bırakmayın — **Amount**’a dokunun.

     ![Transaction özellikleri: Amount’a dokunun](https://qalta.app/assets/apple-pay-ios-27/en/10-pick-amount.png)
     *Al → Amount*

11.  Mağaza adı için de aynısını yapın. Alanları genişletmek için Qalta eylemindeki oka dokunun. **Merchant** (işyeri) → **Değişken Seç** → **Transaction**’a dokunun. Etikete tekrar dokunun ve listeden **Merchant**’ı seçin — “Transaction”ı değil.

     ![Transaction’dan Merchant seçimi](https://qalta.app/assets/apple-pay-ios-27/en/11-merchant.png)
     *Al → Merchant*

12.  Kalan alanlar isteğe bağlıdır. **Category** (kategori) ve **Account** (hesap) için seçenekler:

     -   **Seç** — Qalta’dan belirli bir kategori veya hesap seçin. Tek hesabınız varsa bunu yapın: bir kez seçin. Her Seferinde Sor’a gerek yok.
     -   **Her Seferinde Sor** — her ödemeden sonra Qalta gideri nereye kaydedeceğini sorar. Birden fazla kategori veya hesabınız varsa kullanışlıdır.
     -   **Seç**’i boş bırakabilirsiniz — Qalta varsayılanları kullanır ve kategoriyi algılamaya çalışır.

     **Currency**, **Note** ve **Date** boş kalabilir. Ödemeden sonra onay görünsün diye **Çalıştırıldığında Göster**’i açın. Geri okuna dokunun.

     ![Category, Account ve Çalıştırıldığında Göster](https://qalta.app/assets/apple-pay-ios-27/en/12-category-account.png)
     *Kategori, hesap ve onay*

13.  Kestirme **Tüm Kestirmeler** altında **Create Wallet Expense** adıyla görünür. Seçilen kartla bir sonraki Apple Pay alışverişinizden sonra Qalta gideri kaydetmeyi önerecek.

     ![Tüm Kestirmeler’de Create Wallet Expense](https://qalta.app/assets/apple-pay-ios-27/en/13-all-shortcuts.png)
     *Hazır*

## Videonun tamamı

Ekran kaydını izleyerek ilerlemeyi mi tercih edersiniz?

*iOS 27’de kurulumun adım adım gösterimi.*

[Tüm rehberler](https://qalta.app/tr/tutorials/)
