---
title: "iOS 26’da Apple Pay otomasyonu — Qalta"
description: "Her Apple Pay alışverişi, tutarı ve işyeri doldurularak Qalta’ya gider olarak kaydedilsin diye bir Kestirmeler otomasyonu kurun. iOS 26 için."
url: https://qalta.app/tr/tutorials/apple-pay-ios-26
---

# iOS 26’da Apple Pay otomasyonu

Apple Pay ile ödeme yaptıktan sonra Qalta alışverişi gider olarak kaydedebilir. Tutar ve işyeri işlemden gelir; kategoriyi ve hesabı her seferinde seçebilir ya da önceden belirleyebilirsiniz.

Gerekenler: iOS 26, **Qalta** ve **Kestirmeler** uygulamaları ve Cüzdan’da kartlar.

1.  **Ayarlar → Cüzdan ve Apple Pay**’i açın. **Canlı Etkinlikler**’i ve **Hücresel Veri**’yi açın.

    ![Cüzdan ve Apple Pay izinleri](https://qalta.app/assets/apple-pay-ios-26/en/01-wallet-settings.png)
    *Cüzdan izinleri*

2.  **Kestirmeler**’i açın, **Otomasyon** sekmesine gidin ve **Yeni Otomasyon**’a dokunun.

    ![Kestirmeler’de Otomasyon sekmesi](https://qalta.app/assets/apple-pay-ios-26/en/02-automation-tab.png)
    *Yeni otomasyon*

3.  **Cüzdan**’ı seçin — “When I tap a Wallet Card or Pass” (terminalde ödeme).

    ![Otomasyon listesinde Cüzdan tetikleyicisi](https://qalta.app/assets/apple-pay-ios-26/en/03-wallet-trigger.png)
    *Cüzdan tetikleyicisi*

4.  Qalta’nın takip etmesini istediğiniz kartları seçin. **Sonraki**’ye dokunun.

    ![Ödeme kartlarının seçimi](https://qalta.app/assets/apple-pay-ios-26/en/04-select-cards.png)
    *Hangi kartlar takip edilsin*

5.  İlgilendiğiniz Cüzdan kategorilerini bırakın (hepsi olabilir). **Hemen Çalıştır**’ı seçin (Run After Confirmation’ı değil). **Sonraki**’ye dokunun.

    ![Cüzdan kategorileri](https://qalta.app/assets/apple-pay-ios-26/en/05-categories.png)
    *Kategoriler*

6.  Kutucuk ekranında, sol üstteki gri **Yeni Kestirme Oluştur** kartına dokunun. Aşağıdaki listeden mevcut bir kestirme seçmeyin.

    ![Yeni Kestirme Oluştur kutucuğu](https://qalta.app/assets/apple-pay-ios-26/en/06-create-shortcut.png)
    *Yeni kestirme*

7.  Boş bir düzenleyici açılır. Alttaki eylem aramasına **Qalta** yazın ve **Create Wallet Expense**’e dokunun (“Create Transaction”a değil).

    ![Create Wallet Expense araması](https://qalta.app/assets/apple-pay-ios-26/en/07-search-qalta.png)
    *Qalta eylemi*

8.  İki blok görmelisiniz: “Receive transaction as input” ve Qalta eylemi. Qalta eylemindeki gri **Amount** (tutar) alanına dokunun — tuş takımı açılır. Hemen üstünde **Değişken Seç**’e dokunun.

    ![Amount alanı ve Değişken Seç](https://qalta.app/assets/apple-pay-ios-26/en/08-tap-amount.png)
    *Amount’a, sonra Değişken Seç’e dokunun*

9.  Değişken Seç ekranında, “Receive transaction as input” altındaki mavi **Kestirme Girdisi** etiketine dokunun.

    ![Değişken olarak Kestirme Girdisi seçimi](https://qalta.app/assets/apple-pay-ios-26/en/09-select-variable.png)
    *Kestirme Girdisi*

10.  Artık Qalta eyleminin içinde duran mavi **Kestirme Girdisi** etiketine dokunun. Açılan pencerede tür **Transaction** olmalı. Onay işaretini “Transaction” üzerinde bırakmayın — listeyi kaydırın ve **Amount**’a dokunun.

     ![Transaction özellikleri: Amount’a dokunun](https://qalta.app/assets/apple-pay-ios-26/en/10-pick-amount.png)
     *Tür Transaction → Amount*

11.  Mağaza adı için de aynısını yapın. Alanları genişletmek için Qalta eylemindeki oka dokunun. **Merchant** (işyeri) → **Değişken Seç** → **Kestirme Girdisi**’ne dokunun. Etikete tekrar dokunun, türü **Transaction** yapın, ardından listeden **Merchant**’ı seçin.

     ![Transaction’dan Merchant seçimi](https://qalta.app/assets/apple-pay-ios-26/en/11-merchant.png)
     *Tür Transaction → Merchant*

12.  Kalan alanlar isteğe bağlıdır. **Category** (kategori) ve **Account** (hesap) için seçenekler:

     -   **Seç** — Qalta’dan belirli bir kategori veya hesap seçin. Tek hesabınız varsa bunu yapın: bir kez seçin. Her Seferinde Sor’a gerek yok.
     -   **Her Seferinde Sor** — her ödemeden sonra Qalta gideri nereye kaydedeceğini sorar. Birden fazla kategori veya hesabınız varsa kullanışlıdır.
     -   **Seç**’i boş bırakabilirsiniz — Qalta varsayılanları kullanır ve kategoriyi algılamaya çalışır.

     **Currency**, **Note** ve **Date** boş kalabilir. Ödemeden sonra onay görünsün diye **Çalıştırıldığında Göster**’i açın. Üstteki mavi onay işaretine dokunun.

     ![Category, Account ve Çalıştırıldığında Göster](https://qalta.app/assets/apple-pay-ios-26/en/12-category-account.png)
     *Kategori, hesap ve onay*

13.  Otomasyon **Otomasyon** altında görünür. Seçilen kartla bir sonraki Apple Pay alışverişinizden sonra Qalta gideri kaydetmeyi önerecek.

     ![Listede tamamlanmış otomasyon](https://qalta.app/assets/apple-pay-ios-26/en/13-automation-list.png)
     *Hazır*

## Videonun tamamı

Ekran kaydını izleyerek ilerlemeyi mi tercih edersiniz?

*iOS 26’da kurulumun adım adım gösterimi.*

[Tüm rehberler](https://qalta.app/tr/tutorials/)
