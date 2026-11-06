---
title: "iOS 27에서 은행 알림 자동화 — Qalta"
description: "은행 앱의 결제 알림이 Qalta에 지출로 저장되도록 단축어를 설정하세요. 금액은 알림 텍스트에서 읽어옵니다. iOS 27용."
url: https://qalta.app/ko/tutorials/push-notification-ios-27
---

# iOS 27에서 은행 알림 자동화

은행 앱이 결제 알림을 보내면 Qalta가 이를 지출로 저장할 수 있습니다. 금액과 판매자는 알림 텍스트에서 추출합니다.

iOS 27, **Qalta**와 **단축어** 앱, 그리고 잠금 화면에 알림을 보내는 은행 앱이 필요합니다. 이 트리거는 iOS 26에서는 사용할 수 없습니다.

1.  **단축어**를 열고 하단의 **+** 버튼을 탭해 새 단축어를 만드세요.

    ![더하기 버튼이 있는 모든 단축어 화면](https://qalta.app/assets/push-notification-ios-27/en/01-shortcuts.png)
    *새 단축어*

2.  빈 편집기가 열립니다. 동작 검색에서 **자동화** 칩을 탭하거나 “자동화”를 입력하세요.

    ![자동화 칩이 있는 빈 단축어 편집기](https://qalta.app/assets/push-notification-ios-27/en/02-new-shortcut.png)
    *자동화 칩*

3.  **앱** 아래에서 **알림**을 탭하세요 — “When I receive a notification from …”.

    ![자동화 목록의 알림 트리거](https://qalta.app/assets/push-notification-ios-27/en/03-notification-trigger.png)
    *알림 트리거*

4.  첫 번째 블록에 **When I receive a notification from App**이라고 표시됩니다. 파란색 **App** 칩을 탭해 은행을 선택하세요.

    ![When I receive a notification from App](https://qalta.app/assets/push-notification-ios-27/en/04-from-app.png)
    *앱 선택*

5.  은행을 검색해 결제 알림을 보내는 앱을 탭하세요(예: **Kaspi.kz**. 관련된 Pay 앱이나 QR 앱이 아닙니다).

    ![은행을 검색하는 앱 선택 화면](https://qalta.app/assets/push-notification-ios-27/en/05-pick-bank.png)
    *은행 앱*

6.  이제 **When I receive a notification from \[은행\]**이 보입니다. 하단 검색 필드에 **Qalta**를 입력하세요.

    ![선택한 은행 앱의 알림 트리거](https://qalta.app/assets/push-notification-ios-27/en/06-bank-selected.png)
    *은행 트리거 설정 완료*

7.  **은행 지출 기록**을 탭하세요(“지갑 지출 생성”도, “거래 생성”도 아닙니다).

    ![은행 지출 기록 검색](https://qalta.app/assets/push-notification-ios-27/en/07-search-qalta.png)
    *Qalta 동작*

8.  알림 트리거와 **Qalta에서 알림 본문의 은행 지출 기록**, 두 블록이 보입니다. 회색 **알림 본문** 필드를 탭하세요.

    ![알림 본문 필드가 있는 은행 지출 기록](https://qalta.app/assets/push-notification-ios-27/en/08-tap-body.png)
    *알림 본문 탭*

9.  키보드가 나타납니다. 그 위에서 **변수 선택**을 탭한 다음, 트리거 아래의 파란색 **Notification** 칩을 탭하세요.

    ![Notification 칩이 있는 변수 선택](https://qalta.app/assets/push-notification-ios-27/en/09-select-variable.png)
    *변수 선택 → Notification*

10.  이제 Qalta 동작 안에 들어간 파란색 **Notification** 칩을 탭하세요. 시트에서 체크 표시를 “Notification”에 그대로 두지 말고 **Body**를 탭하세요. Qalta는 알림 객체 전체가 아니라 알림 텍스트에서 금액을 읽습니다.

     ![Notification 속성: Body 탭](https://qalta.app/assets/push-notification-ios-27/en/10-pick-body.png)
     *가져오기 → Body*

11.  이제 Qalta 동작에 **Qalta에서 Body의 은행 지출 기록**이라고 표시되어야 합니다.

     ![은행 지출 기록에 연결된 Body](https://qalta.app/assets/push-notification-ios-27/en/11-body-mapped.png)
     *Body 연결 완료*

12.  나머지 필드는 선택 사항입니다. 화살표를 탭해 펼치세요. **카테고리**와 **계좌** 설정 방법:

     -   **선택** — Qalta의 특정 카테고리나 계좌를 고릅니다. 계좌가 하나뿐이라면 이렇게 한 번만 선택하세요. 매번 묻기는 필요 없습니다.
     -   **매번 묻기** — 알림이 올 때마다 Qalta가 지출을 어디에 저장할지 묻습니다. 카테고리나 계좌가 여러 개일 때 유용합니다.
     -   **선택**을 비워 둘 수도 있습니다 — Qalta가 기본값을 사용하고 카테고리를 자동으로 감지하려고 시도합니다.

     **메모**와 **날짜**는 비워 두어도 됩니다. 확인 창이 뜨도록 **Show When Run**을 켜세요. 뒤로 화살표를 탭하세요.

     ![카테고리, 계좌, Show When Run](https://qalta.app/assets/push-notification-ios-27/en/12-category-account.png)
     *카테고리, 계좌, 확인*

13.  단축어가 **모든 단축어**에 **은행 지출 기록**으로 표시됩니다. 다음에 그 은행 앱에서 결제 알림이 오면 Qalta가 지출 저장을 제안합니다.

     ![모든 단축어의 은행 지출 기록](https://qalta.app/assets/push-notification-ios-27/en/13-all-shortcuts.png)
     *설정 완료*

## 전체 영상

화면 녹화 영상을 보며 따라 하고 싶으신가요?

*iOS 27 설정 과정 영상.*

[모든 가이드](https://qalta.app/ko/tutorials/)
