---
title: "ระบบอัตโนมัติ Apple Pay บน iOS 27 — Qalta"
description: "ตั้งค่าคำสั่งลัดให้ทุกการซื้อด้วย Apple Pay ถูกบันทึกใน Qalta เป็นรายจ่าย พร้อมจำนวนเงินและร้านค้าจาก Wallet สำหรับ iOS 27"
url: https://qalta.app/th/tutorials/apple-pay-ios-27
---

# ระบบอัตโนมัติ Apple Pay บน iOS 27

หลังจ่ายด้วย Apple Pay แล้ว Qalta บันทึกการซื้อเป็นรายจ่ายได้ จำนวนเงินและร้านค้ามาจากธุรกรรมใน Wallet ส่วนหมวดหมู่และบัญชีจะเลือกทุกครั้งหรือตั้งไว้ล่วงหน้าก็ได้

สิ่งที่ต้องมี: iOS 27 แอป **Qalta** และ **คำสั่งลัด** และบัตรใน Wallet บน iOS 27 ตัวกระตุ้น Wallet อยู่ภายในคำสั่งลัดใหม่ — ไม่มีแท็บระบบอัตโนมัติแยกต่างหาก

1.  เปิด **คำสั่งลัด** แล้วแตะปุ่ม **+** ที่ด้านล่างเพื่อสร้างคำสั่งลัดใหม่

    ![คำสั่งลัดทั้งหมดพร้อมปุ่มบวก](https://qalta.app/assets/apple-pay-ios-27/en/01-shortcuts.png)
    *คำสั่งลัดใหม่*

2.  ตัวแก้ไขว่างจะเปิดขึ้น ในช่องค้นหาการกระทำ ให้แตะชิป **ระบบอัตโนมัติ** — หรือพิมพ์ “ระบบอัตโนมัติ”

    ![ตัวแก้ไขคำสั่งลัดว่างพร้อมชิประบบอัตโนมัติ](https://qalta.app/assets/apple-pay-ios-27/en/02-new-shortcut.png)
    *ชิประบบอัตโนมัติ*

3.  ใต้หัวข้อ **แอป** ให้แตะ **Wallet** — “เมื่อฉันแตะบัตรหรือบัตรผ่านใน Wallet” (จ่ายที่เครื่องชำระเงิน)

    ![ตัวกระตุ้น Wallet ในรายการระบบอัตโนมัติ](https://qalta.app/assets/apple-pay-ios-27/en/03-wallet-trigger.png)
    *ตัวกระตุ้น Wallet*

4.  บล็อกแรกจะแสดงว่า **When Any Card is tapped** หากต้องการให้ Qalta ทำงานเฉพาะบางบัตร ให้แตะชิปสีน้ำเงิน **Any Card**

    ![ตัวกระตุ้น When Any Card is tapped](https://qalta.app/assets/apple-pay-ios-27/en/04-any-card.png)
    *Any Card*

5.  เลือกบัตรที่คุณใช้จ่าย (เช่น **Kaspi Gold**) แล้วแตะเครื่องหมายถูก

    ![การเลือกบัตรชำระเงิน](https://qalta.app/assets/apple-pay-ios-27/en/05-select-card.png)
    *เลือกบัตรที่จะติดตาม*

6.  ตอนนี้ควรเห็นบล็อกเดียว: **When \[บัตรของคุณ\] is tapped** ในช่องค้นหาที่ด้านล่าง พิมพ์ **Qalta**

    ![ตัวกระตุ้น Wallet สำหรับบัตรที่เลือก](https://qalta.app/assets/apple-pay-ios-27/en/06-card-tapped.png)
    *ตั้งตัวกระตุ้นบัตรแล้ว*

7.  แตะ **Create Wallet Expense** (ไม่ใช่ “Create Transaction”)

    ![การค้นหา Create Wallet Expense](https://qalta.app/assets/apple-pay-ios-27/en/07-search-qalta.png)
    *การกระทำของ Qalta*

8.  ควรเห็นสองบล็อก: ตัวกระตุ้น Wallet และการกระทำของ Qalta แตะช่องสีเทา **Amount** (จำนวนเงิน) — แป้นตัวเลขจะปรากฏ ด้านบนแป้น ให้แตะ **เลือกตัวแปร**

    ![ช่อง Amount และเลือกตัวแปร](https://qalta.app/assets/apple-pay-ios-27/en/08-tap-amount.png)
    *แตะ Amount แล้วเลือกตัวแปร*

9.  ในหน้าเลือกตัวแปร ให้แตะชิปสีน้ำเงิน **Transaction** ใต้ตัวกระตุ้น Wallet นั่นคือการชำระเงินด้วย Apple Pay ไม่ใช่อินพุตคำสั่งลัด

    ![การเลือก Transaction จากตัวกระตุ้น Wallet](https://qalta.app/assets/apple-pay-ios-27/en/09-select-transaction.png)
    *Transaction*

10.  แตะชิปสีน้ำเงิน **Transaction** ที่ตอนนี้อยู่ในการกระทำของ Qalta ในแผ่นที่เปิดขึ้น อย่าปล่อยเครื่องหมายถูกไว้ที่ “Transaction” — ให้แตะ **Amount**

     ![คุณสมบัติของ Transaction: แตะ Amount](https://qalta.app/assets/apple-pay-ios-27/en/10-pick-amount.png)
     *รับค่า → Amount*

11.  ทำซ้ำสำหรับชื่อร้าน แตะลูกศรบนการกระทำของ Qalta เพื่อขยายช่องต่าง ๆ แตะ **Merchant** (ร้านค้า) → **เลือกตัวแปร** → **Transaction** แตะชิปอีกครั้งแล้วเลือก **Merchant** จากรายการ — ไม่ใช่ “Transaction”

     ![การเลือก Merchant จากธุรกรรม](https://qalta.app/assets/apple-pay-ios-27/en/11-merchant.png)
     *รับค่า → Merchant*

12.  ช่องที่เหลือไม่บังคับ ตัวเลือกสำหรับ **Category** (หมวดหมู่) และ **Account** (บัญชี):

     -   **เลือก** — เลือกหมวดหมู่หรือบัญชีที่ต้องการจาก Qalta หากมีบัญชีเดียว ให้ทำแบบนี้: เลือกครั้งเดียวพอ ไม่ต้องใช้ถามทุกครั้ง
     -   **ถามทุกครั้ง** — หลังการชำระเงินแต่ละครั้ง Qalta จะถามว่าจะบันทึกรายจ่ายไว้ที่ไหน เหมาะถ้ามีหลายหมวดหมู่หรือหลายบัญชี
     -   ปล่อย **เลือก** ว่างไว้ก็ได้ — Qalta จะใช้ค่าเริ่มต้นและพยายามตรวจหาหมวดหมู่ให้

     **Currency**, **Note** และ **Date** (สกุลเงิน โน้ต และวันที่) ปล่อยว่างได้ เปิด **แสดงเมื่อเรียกใช้** เพื่อให้มีหน้ายืนยันหลังการชำระเงิน แล้วแตะลูกศรย้อนกลับ

     ![Category, Account และแสดงเมื่อเรียกใช้](https://qalta.app/assets/apple-pay-ios-27/en/12-category-account.png)
     *หมวดหมู่ บัญชี และการยืนยัน*

13.  คำสั่งลัดจะปรากฏใน **คำสั่งลัดทั้งหมด** ในชื่อ **Create Wallet Expense** หลังจากซื้อด้วย Apple Pay ครั้งถัดไปด้วยบัตรที่เลือก Qalta จะเสนอให้บันทึกรายจ่าย

     ![Create Wallet Expense ในคำสั่งลัดทั้งหมด](https://qalta.app/assets/apple-pay-ios-27/en/13-all-shortcuts.png)
     *เรียบร้อย*

## วิดีโอฉบับเต็ม

อยากทำตามจากวิดีโอบันทึกหน้าจอใช่ไหม

*ขั้นตอนการตั้งค่าบน iOS 27*

[คู่มือทั้งหมด](https://qalta.app/th/tutorials/)
