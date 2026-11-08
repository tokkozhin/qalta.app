---
title: "ระบบอัตโนมัติการแจ้งเตือนจากธนาคารบน iOS 27 — Qalta"
description: "ตั้งค่าคำสั่งลัดให้การแจ้งเตือนการชำระเงินจากแอปธนาคารถูกบันทึกใน Qalta เป็นรายจ่าย โดยอ่านจำนวนเงินจากข้อความ สำหรับ iOS 27"
url: https://qalta.app/th/tutorials/push-notification-ios-27
---

# ระบบอัตโนมัติการแจ้งเตือนจากธนาคารบน iOS 27

เมื่อแอปธนาคารส่งการแจ้งเตือนการชำระเงิน Qalta บันทึกเป็นรายจ่ายได้ จำนวนเงินและร้านค้าจะถูกอ่านจากข้อความในการแจ้งเตือน

สิ่งที่ต้องมี: iOS 27 แอป **Qalta** และ **คำสั่งลัด** และแอปธนาคารที่แสดงการแจ้งเตือนบนหน้าจอล็อก ตัวกระตุ้นนี้ไม่มีบน iOS 26

1.  เปิด **คำสั่งลัด** แล้วแตะปุ่ม **+** ที่ด้านล่างเพื่อสร้างคำสั่งลัดใหม่

    ![คำสั่งลัดทั้งหมดพร้อมปุ่มบวก](https://qalta.app/assets/push-notification-ios-27/en/01-shortcuts.png)
    *คำสั่งลัดใหม่*

2.  ตัวแก้ไขว่างจะเปิดขึ้น ในช่องค้นหาการกระทำ ให้แตะชิป **ระบบอัตโนมัติ** — หรือพิมพ์ “ระบบอัตโนมัติ”

    ![ตัวแก้ไขคำสั่งลัดว่างพร้อมชิประบบอัตโนมัติ](https://qalta.app/assets/push-notification-ios-27/en/02-new-shortcut.png)
    *ชิประบบอัตโนมัติ*

3.  ใต้หัวข้อ **แอป** ให้แตะ **การแจ้งเตือน** — “เมื่อฉันได้รับการแจ้งเตือนจาก …”

    ![ตัวกระตุ้นการแจ้งเตือนในรายการระบบอัตโนมัติ](https://qalta.app/assets/push-notification-ios-27/en/03-notification-trigger.png)
    *ตัวกระตุ้นการแจ้งเตือน*

4.  บล็อกแรกจะแสดงว่า **When I receive a notification from App** แตะชิปสีน้ำเงิน **App** เพื่อเลือกธนาคารของคุณ

    ![When I receive a notification from App](https://qalta.app/assets/push-notification-ios-27/en/04-from-app.png)
    *เลือกแอป*

5.  ค้นหาธนาคารของคุณแล้วแตะแอปที่ส่งการแจ้งเตือนการชำระเงิน (เช่น **Kaspi.kz** ไม่ใช่แอป Pay หรือ QR ที่เกี่ยวข้อง)

    ![ตัวเลือกแอปขณะค้นหาธนาคาร](https://qalta.app/assets/push-notification-ios-27/en/05-pick-bank.png)
    *แอปธนาคาร*

6.  ตอนนี้ควรเห็น **When I receive a notification from \[ธนาคาร\]** ในช่องค้นหาที่ด้านล่าง พิมพ์ **Qalta**

    ![ตัวกระตุ้นการแจ้งเตือนสำหรับแอปธนาคารที่เลือก](https://qalta.app/assets/push-notification-ios-27/en/06-bank-selected.png)
    *ตั้งตัวกระตุ้นธนาคารแล้ว*

7.  แตะ **Log Bank Expense** (ไม่ใช่ “Create Wallet Expense” และไม่ใช่ “Create Transaction”)

    ![การค้นหา Log Bank Expense](https://qalta.app/assets/push-notification-ios-27/en/07-search-qalta.png)
    *การกระทำของ Qalta*

8.  ควรเห็นสองบล็อก: ตัวกระตุ้นการแจ้งเตือน และ **Log bank expense from Notification body** แตะช่องสีเทา **Notification body**

    ![Log bank expense พร้อมช่อง Notification body](https://qalta.app/assets/push-notification-ios-27/en/08-tap-body.png)
    *แตะ Notification body*

9.  แป้นพิมพ์จะปรากฏ ด้านบนแป้น ให้แตะ **เลือกตัวแปร** แล้วแตะชิปสีน้ำเงิน **Notification** ใต้ตัวกระตุ้น

    ![เลือกตัวแปรพร้อมชิป Notification](https://qalta.app/assets/push-notification-ios-27/en/09-select-variable.png)
    *เลือกตัวแปร → Notification*

10.  แตะชิปสีน้ำเงิน **Notification** ที่ตอนนี้อยู่ในการกระทำของ Qalta ในแผ่นที่เปิดขึ้น อย่าปล่อยเครื่องหมายถูกไว้ที่ “Notification” — ให้แตะ **Body** (เนื้อหา) Qalta อ่านจำนวนเงินจากข้อความของการแจ้งเตือน ไม่ใช่จากออบเจ็กต์การแจ้งเตือนทั้งหมด

     ![คุณสมบัติของ Notification: แตะ Body](https://qalta.app/assets/push-notification-ios-27/en/10-pick-body.png)
     *รับค่า → Body*

11.  การกระทำของ Qalta ควรแสดงว่า **Log bank expense from Body**

     ![Body ถูกจับคู่ใน Log bank expense](https://qalta.app/assets/push-notification-ios-27/en/11-body-mapped.png)
     *จับคู่ Body แล้ว*

12.  ช่องที่เหลือไม่บังคับ แตะลูกศรเพื่อขยาย ตัวเลือกสำหรับ **Category** (หมวดหมู่) และ **Account** (บัญชี):

     -   **เลือก** — เลือกหมวดหมู่หรือบัญชีที่ต้องการจาก Qalta หากมีบัญชีเดียว ให้ทำแบบนี้: เลือกครั้งเดียวพอ ไม่ต้องใช้ถามทุกครั้ง
     -   **ถามทุกครั้ง** — หลังการแจ้งเตือนแต่ละครั้ง Qalta จะถามว่าจะบันทึกรายจ่ายไว้ที่ไหน เหมาะถ้ามีหลายหมวดหมู่หรือหลายบัญชี
     -   ปล่อย **เลือก** ว่างไว้ก็ได้ — Qalta จะใช้ค่าเริ่มต้นและพยายามตรวจหาหมวดหมู่ให้

     **Note** และ **Date** (โน้ตและวันที่) ปล่อยว่างได้ เปิด **แสดงเมื่อเรียกใช้** เพื่อให้มีหน้ายืนยัน แล้วแตะลูกศรย้อนกลับ

     ![Category, Account และแสดงเมื่อเรียกใช้](https://qalta.app/assets/push-notification-ios-27/en/12-category-account.png)
     *หมวดหมู่ บัญชี และการยืนยัน*

13.  คำสั่งลัดจะปรากฏใน **คำสั่งลัดทั้งหมด** ในชื่อ **Log Bank Expense** หลังการแจ้งเตือนการชำระเงินครั้งถัดไปจากแอปธนาคารนั้น Qalta จะเสนอให้บันทึกรายจ่าย

     ![Log Bank Expense ในคำสั่งลัดทั้งหมด](https://qalta.app/assets/push-notification-ios-27/en/13-all-shortcuts.png)
     *เรียบร้อย*

## วิดีโอฉบับเต็ม

อยากทำตามจากวิดีโอบันทึกหน้าจอใช่ไหม

*ขั้นตอนการตั้งค่าบน iOS 27*

[คู่มือทั้งหมด](https://qalta.app/th/tutorials/)
