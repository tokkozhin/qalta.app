---
title: "iOS 27에서 Apple Pay 자동화 — Qalta"
description: "모든 Apple Pay 결제가 지갑의 금액과 판매자 정보와 함께 Qalta에 지출로 저장되도록 단축어를 설정하세요. iOS 27용."
url: https://qalta.app/ko/tutorials/apple-pay-ios-27
---

# iOS 27에서 Apple Pay 자동화

Apple Pay로 결제하면 Qalta가 결제 내역을 지출로 저장할 수 있습니다. 금액과 판매자는 지갑 거래에서 가져오며, 카테고리와 계좌는 매번 고르거나 미리 정해 둘 수 있습니다.

iOS 27, **Qalta**와 **단축어** 앱, 그리고 지갑에 등록된 카드가 필요합니다. iOS 27에서는 지갑 트리거가 새 단축어 안에 있으며, 별도의 자동화 탭은 없습니다.

1.  **단축어**를 열고 하단의 **+** 버튼을 탭해 새 단축어를 만드세요.

    ![더하기 버튼이 있는 모든 단축어 화면](https://qalta.app/assets/apple-pay-ios-27/en/01-shortcuts.png)
    *새 단축어*

2.  빈 편집기가 열립니다. 동작 검색에서 **자동화** 칩을 탭하거나 “자동화”를 입력하세요.

    ![자동화 칩이 있는 빈 단축어 편집기](https://qalta.app/assets/apple-pay-ios-27/en/02-new-shortcut.png)
    *자동화 칩*

3.  **앱** 아래에서 **지갑**을 탭하세요 — “When I tap a Wallet Card or Pass”(단말기에서 결제).

    ![자동화 목록의 지갑 트리거](https://qalta.app/assets/apple-pay-ios-27/en/03-wallet-trigger.png)
    *지갑 트리거*

4.  첫 번째 블록에 **When Any Card is tapped**라고 표시됩니다. 일부 카드에서만 Qalta가 실행되게 하려면 파란색 **Any Card** 칩을 탭하세요.

    ![When Any Card is tapped 트리거](https://qalta.app/assets/apple-pay-ios-27/en/04-any-card.png)
    *Any Card*

5.  결제에 사용하는 카드(예: **Kaspi Gold**)를 선택하고 체크 표시를 탭하세요.

    ![결제 카드 선택](https://qalta.app/assets/apple-pay-ios-27/en/05-select-card.png)
    *추적할 카드*

6.  이제 **When \[내 카드\] is tapped** 블록 하나가 보입니다. 하단 검색 필드에 **Qalta**를 입력하세요.

    ![선택한 카드의 지갑 트리거](https://qalta.app/assets/apple-pay-ios-27/en/06-card-tapped.png)
    *카드 트리거 설정 완료*

7.  **지갑 지출 생성**을 탭하세요(“거래 생성”이 아닙니다).

    ![지갑 지출 생성 검색](https://qalta.app/assets/apple-pay-ios-27/en/07-search-qalta.png)
    *Qalta 동작*

8.  지갑 트리거와 Qalta 동작, 두 블록이 보입니다. 회색 **금액** 필드를 탭하면 키패드가 나타납니다. 그 위에서 **변수 선택**을 탭하세요.

    ![금액 필드와 변수 선택](https://qalta.app/assets/apple-pay-ios-27/en/08-tap-amount.png)
    *금액을 탭한 후 변수 선택*

9.  변수 선택 화면에서 지갑 트리거 아래의 파란색 **Transaction** 칩을 탭하세요. 이것이 Apple Pay 결제이며, 단축어 입력이 아닙니다.

    ![지갑 트리거에서 Transaction 선택](https://qalta.app/assets/apple-pay-ios-27/en/09-select-transaction.png)
    *Transaction*

10.  이제 Qalta 동작 안에 들어간 파란색 **Transaction** 칩을 탭하세요. 시트에서 체크 표시를 “Transaction”에 그대로 두지 말고 **Amount**를 탭하세요.

     ![Transaction 속성: Amount 탭](https://qalta.app/assets/apple-pay-ios-27/en/10-pick-amount.png)
     *가져오기 → Amount*

11.  상점 이름도 같은 방법으로 설정합니다. Qalta 동작의 화살표를 탭해 필드를 펼치세요. **판매자** → **변수 선택** → **Transaction**을 탭합니다. 칩을 다시 탭하고 목록에서 “Transaction”이 아닌 **Merchant**를 고르세요.

     ![거래에서 Merchant 선택](https://qalta.app/assets/apple-pay-ios-27/en/11-merchant.png)
     *가져오기 → Merchant*

12.  나머지 필드는 선택 사항입니다. **카테고리**와 **계좌** 설정 방법:

     -   **선택** — Qalta의 특정 카테고리나 계좌를 고릅니다. 계좌가 하나뿐이라면 이렇게 한 번만 선택하세요. 매번 묻기는 필요 없습니다.
     -   **매번 묻기** — 결제할 때마다 Qalta가 지출을 어디에 저장할지 묻습니다. 카테고리나 계좌가 여러 개일 때 유용합니다.
     -   **선택**을 비워 둘 수도 있습니다 — Qalta가 기본값을 사용하고 카테고리를 자동으로 감지하려고 시도합니다.

     **통화**, **메모**, **날짜**는 비워 두어도 됩니다. 결제 후 확인 창이 뜨도록 **Show When Run**을 켜세요. 뒤로 화살표를 탭하세요.

     ![카테고리, 계좌, Show When Run](https://qalta.app/assets/apple-pay-ios-27/en/12-category-account.png)
     *카테고리, 계좌, 확인*

13.  단축어가 **모든 단축어**에 **지갑 지출 생성**으로 표시됩니다. 다음에 선택한 카드로 Apple Pay 결제를 하면 Qalta가 지출 저장을 제안합니다.

     ![모든 단축어의 지갑 지출 생성](https://qalta.app/assets/apple-pay-ios-27/en/13-all-shortcuts.png)
     *설정 완료*

## 전체 영상

화면 녹화 영상을 보며 따라 하고 싶으신가요?

*iOS 27 설정 과정 영상.*

[모든 가이드](https://qalta.app/ko/tutorials/)
