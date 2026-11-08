---
title: "iOS 26에서 Apple Pay 자동화 — Qalta"
description: "모든 Apple Pay 결제가 금액과 판매자가 채워진 채로 Qalta에 지출로 저장되도록 단축어 자동화를 설정하세요. iOS 26용."
url: https://qalta.app/ko/tutorials/apple-pay-ios-26
---

# iOS 26에서 Apple Pay 자동화

Apple Pay로 결제하면 Qalta가 결제 내역을 지출로 저장할 수 있습니다. 금액과 판매자는 거래에서 가져오며, 카테고리와 계좌는 매번 고르거나 미리 정해 둘 수 있습니다.

iOS 26, **Qalta**와 **단축어** 앱, 그리고 지갑에 등록된 카드가 필요합니다.

1.  **설정 → 지갑 및 Apple Pay**를 여세요. **실시간 현황**과 **셀룰러 데이터**를 켜세요.

    ![지갑 및 Apple Pay 권한](https://qalta.app/assets/apple-pay-ios-26/en/01-wallet-settings.png)
    *지갑 권한*

2.  **단축어**를 열고 **자동화** 탭으로 이동한 뒤 **새로운 자동화**를 탭하세요.

    ![단축어의 자동화 탭](https://qalta.app/assets/apple-pay-ios-26/en/02-automation-tab.png)
    *새로운 자동화*

3.  **지갑**을 선택하세요 — “When I tap a Wallet Card or Pass”(단말기에서 결제).

    ![자동화 목록의 지갑 트리거](https://qalta.app/assets/apple-pay-ios-26/en/03-wallet-trigger.png)
    *지갑 트리거*

4.  Qalta로 추적할 카드를 선택하고 **다음**을 탭하세요.

    ![결제 카드 선택](https://qalta.app/assets/apple-pay-ios-26/en/04-select-cards.png)
    *추적할 카드*

5.  필요한 지갑 카테고리를 남겨 두세요(전체 선택해도 됩니다). **즉시 실행**을 선택하고(확인 후 실행이 아닙니다) **다음**을 탭하세요.

    ![지갑 카테고리](https://qalta.app/assets/apple-pay-ios-26/en/05-categories.png)
    *카테고리*

6.  타일 화면에서 왼쪽 위의 회색 **Create New Shortcut** 카드를 탭하세요. 아래 목록에서 기존 단축어를 고르지 마세요.

    ![Create New Shortcut 타일](https://qalta.app/assets/apple-pay-ios-26/en/06-create-shortcut.png)
    *새 단축어*

7.  빈 편집기가 열립니다. 하단 동작 검색에 **Qalta**를 입력하고 **지갑 지출 생성**을 탭하세요(“거래 생성”이 아닙니다).

    ![지갑 지출 생성 검색](https://qalta.app/assets/apple-pay-ios-26/en/07-search-qalta.png)
    *Qalta 동작*

8.  “Receive transaction as input”과 Qalta 동작, 두 블록이 보입니다. Qalta 동작의 회색 **금액** 필드를 탭하면 키패드가 나타납니다. 그 위에서 **변수 선택**을 탭하세요.

    ![금액 필드와 변수 선택](https://qalta.app/assets/apple-pay-ios-26/en/08-tap-amount.png)
    *금액을 탭한 후 변수 선택*

9.  변수 선택 화면에서 “Receive transaction as input” 아래의 파란색 **단축어 입력** 칩을 탭하세요.

    ![변수로 단축어 입력 선택](https://qalta.app/assets/apple-pay-ios-26/en/09-select-variable.png)
    *단축어 입력*

10.  이제 Qalta 동작 안에 들어간 파란색 **단축어 입력** 칩을 탭하세요. 시트에서 유형은 **Transaction**이어야 합니다. 체크 표시를 “Transaction”에 그대로 두지 말고 목록을 스크롤해 **Amount**를 탭하세요.

     ![Transaction 속성: Amount 탭](https://qalta.app/assets/apple-pay-ios-26/en/10-pick-amount.png)
     *유형 Transaction → Amount*

11.  상점 이름도 같은 방법으로 설정합니다. Qalta 동작의 화살표를 탭해 필드를 펼치세요. **판매자** → **변수 선택** → **단축어 입력**을 탭합니다. 칩을 다시 탭하고 유형을 **Transaction**으로 한 뒤 목록에서 **Merchant**를 고르세요.

     ![거래에서 Merchant 선택](https://qalta.app/assets/apple-pay-ios-26/en/11-merchant.png)
     *유형 Transaction → Merchant*

12.  나머지 필드는 선택 사항입니다. **카테고리**와 **계좌** 설정 방법:

     -   **선택** — Qalta의 특정 카테고리나 계좌를 고릅니다. 계좌가 하나뿐이라면 이렇게 한 번만 선택하세요. 매번 묻기는 필요 없습니다.
     -   **매번 묻기** — 결제할 때마다 Qalta가 지출을 어디에 저장할지 묻습니다. 카테고리나 계좌가 여러 개일 때 유용합니다.
     -   **선택**을 비워 둘 수도 있습니다 — Qalta가 기본값을 사용하고 카테고리를 자동으로 감지하려고 시도합니다.

     **통화**, **메모**, **날짜**는 비워 두어도 됩니다. 결제 후 확인 창이 뜨도록 **Show When Run**을 켜세요. 상단의 파란색 체크 표시를 탭하세요.

     ![카테고리, 계좌, Show When Run](https://qalta.app/assets/apple-pay-ios-26/en/12-category-account.png)
     *카테고리, 계좌, 확인*

13.  자동화가 **자동화** 탭에 표시됩니다. 다음에 선택한 카드로 Apple Pay 결제를 하면 Qalta가 지출 저장을 제안합니다.

     ![목록에 추가된 완성된 자동화](https://qalta.app/assets/apple-pay-ios-26/en/13-automation-list.png)
     *설정 완료*

## 전체 영상

화면 녹화 영상을 보며 따라 하고 싶으신가요?

*iOS 26 설정 과정 영상.*

[모든 가이드](https://qalta.app/ko/tutorials/)
