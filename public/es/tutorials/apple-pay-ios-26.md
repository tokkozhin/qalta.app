---
title: "Automatización de Apple Pay en iOS 26 — Qalta"
description: "Configura una automatización de Atajos para que cada compra con Apple Pay se guarde en Qalta como gasto, con el importe y el comercio ya rellenados. Para iOS 26."
url: https://qalta.app/es/tutorials/apple-pay-ios-26
---

# Automatización de Apple Pay en iOS 26

Tras un pago con Apple Pay, Qalta puede guardar la compra como gasto. El importe y el comercio vienen de la transacción; puedes elegir la categoría y la cuenta cada vez o fijarlas de antemano.

Necesitas iOS 26, **Qalta** y **Atajos**, y tarjetas en Wallet.

1.  Abre **Ajustes → Wallet y Apple Pay**. Activa **Actividades en vivo** y **Datos móviles**.

    ![Permisos de Wallet y Apple Pay](https://qalta.app/assets/apple-pay-ios-26/en/01-wallet-settings.png)
    *Permisos de Wallet*

2.  Abre **Atajos**, ve a la pestaña **Automatización** y toca **Nueva automatización**.

    ![Pestaña Automatización de Atajos](https://qalta.app/assets/apple-pay-ios-26/en/02-automation-tab.png)
    *Nueva automatización*

3.  Elige **Wallet**: “When I tap a Wallet Card or Pass” (pago en un terminal).

    ![Activador de Wallet en la lista de automatizaciones](https://qalta.app/assets/apple-pay-ios-26/en/03-wallet-trigger.png)
    *Activador de Wallet*

4.  Selecciona las tarjetas que quieres que Qalta siga. Toca **Siguiente**.

    ![Selección de tarjetas de pago](https://qalta.app/assets/apple-pay-ios-26/en/04-select-cards.png)
    *Qué tarjetas seguir*

5.  Deja las categorías de Wallet que te interesen (todas está bien). Selecciona **Ejecutar inmediatamente** (no Run After Confirmation). Toca **Siguiente**.

    ![Categorías de Wallet](https://qalta.app/assets/apple-pay-ios-26/en/05-categories.png)
    *Categorías*

6.  En la pantalla de mosaicos, toca la tarjeta gris **Create New Shortcut** arriba a la izquierda. No elijas un atajo existente de la lista de abajo.

    ![Mosaico Create New Shortcut](https://qalta.app/assets/apple-pay-ios-26/en/06-create-shortcut.png)
    *Atajo nuevo*

7.  Se abre un editor vacío. En la búsqueda de acciones de abajo, escribe **Qalta** y toca **Crear gasto desde Wallet** (no «Crear transacción»).

    ![Búsqueda de Crear gasto desde Wallet](https://qalta.app/assets/apple-pay-ios-26/en/07-search-qalta.png)
    *Acción de Qalta*

8.  Deberías ver dos bloques: “Receive transaction as input” y la acción de Qalta. Toca el campo gris **Importe** de la acción de Qalta y aparecerá un teclado numérico. Encima, toca **Seleccionar variable**.

    ![Campo Importe y Seleccionar variable](https://qalta.app/assets/apple-pay-ios-26/en/08-tap-amount.png)
    *Toca Importe y luego Seleccionar variable*

9.  En la pantalla Seleccionar variable, toca la etiqueta azul **Entrada del atajo** bajo “Receive transaction as input”.

    ![Selección de Entrada del atajo como variable](https://qalta.app/assets/apple-pay-ios-26/en/09-select-variable.png)
    *Entrada del atajo*

10.  Toca la etiqueta azul **Entrada del atajo** que ahora está dentro de la acción de Qalta. En la hoja, Tipo debe ser **Transacción**. No dejes la marca en «Transacción»: desplázate por la lista y toca **Importe**.

     ![Propiedades de la transacción: toca Importe](https://qalta.app/assets/apple-pay-ios-26/en/10-pick-amount.png)
     *Tipo Transacción → Importe*

11.  Repite lo mismo con el nombre de la tienda. Toca la flecha de la acción de Qalta para desplegar los campos. Toca **Comercio** → **Seleccionar variable** → **Entrada del atajo**. Vuelve a tocar la etiqueta, Tipo **Transacción**, y elige **Comercio** en la lista.

     ![Elección de Comercio desde la transacción](https://qalta.app/assets/apple-pay-ios-26/en/11-merchant.png)
     *Tipo Transacción → Comercio*

12.  El resto de los campos son opcionales. Opciones para **Categoría** y **Cuenta**:

     -   **Elegir**: selecciona una categoría o cuenta concreta de Qalta. Si solo tienes una cuenta, haz esto: selecciónala una vez. No necesitas Preguntar cada vez.
     -   **Preguntar cada vez**: tras cada pago, Qalta te preguntará dónde guardar el gasto. Útil si tienes varias categorías o cuentas.
     -   Puedes dejar **Elegir** vacío: Qalta usará los valores predeterminados e intentará detectar la categoría.

     **Divisa**, **Nota** y **Fecha** pueden quedarse vacíos. Activa **Mostrar al ejecutar** para que aparezca una confirmación después del pago. Toca la marca de verificación azul de arriba.

     ![Categoría, Cuenta y Mostrar al ejecutar](https://qalta.app/assets/apple-pay-ios-26/en/12-category-account.png)
     *Categoría, cuenta y confirmación*

13.  La automatización aparece en **Automatización**. Tras tu próxima compra con Apple Pay con la tarjeta seleccionada, Qalta te ofrecerá guardar el gasto.

     ![Automatización terminada en la lista](https://qalta.app/assets/apple-pay-ios-26/en/13-automation-list.png)
     *Todo listo*

## Vídeo completo

¿Prefieres seguir los pasos con una grabación de pantalla?

*Configuración paso a paso en iOS 26.*

[Todos los tutoriales](https://qalta.app/es/tutorials/)
