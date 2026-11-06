---
title: "Automatización de Apple Pay en iOS 27 — Qalta"
description: "Configura un atajo para que cada compra con Apple Pay se guarde en Qalta como gasto, con el importe y el comercio de Wallet. Para iOS 27."
url: https://qalta.app/es/tutorials/apple-pay-ios-27
---

# Automatización de Apple Pay en iOS 27

Tras un pago con Apple Pay, Qalta puede guardar la compra como gasto. El importe y el comercio vienen de la transacción de Wallet; puedes elegir la categoría y la cuenta cada vez o fijarlas de antemano.

Necesitas iOS 27, **Qalta** y **Atajos**, y tarjetas en Wallet. En iOS 27 el activador de Wallet está dentro de un atajo nuevo: ya no hay una pestaña Automatización aparte.

1.  Abre **Atajos** y toca el botón **+** de la parte inferior para crear un atajo nuevo.

    ![Todos los atajos con el botón más](https://qalta.app/assets/apple-pay-ios-27/en/01-shortcuts.png)
    *Atajo nuevo*

2.  Se abre un editor vacío. En la búsqueda de acciones, toca la etiqueta **Automatización** o escribe «Automatización».

    ![Editor de atajos vacío con la etiqueta Automatización](https://qalta.app/assets/apple-pay-ios-27/en/02-new-shortcut.png)
    *Etiqueta Automatización*

3.  En **Apps**, toca **Wallet**: “When I tap a Wallet Card or Pass” (pago en un terminal).

    ![Activador de Wallet en la lista de Automatización](https://qalta.app/assets/apple-pay-ios-27/en/03-wallet-trigger.png)
    *Activador de Wallet*

4.  El primer bloque dice **When Any Card is tapped**. Si solo quieres que Qalta se ejecute con algunas tarjetas, toca la etiqueta azul **Cualquier tarjeta**.

    ![Activador When Any Card is tapped](https://qalta.app/assets/apple-pay-ios-27/en/04-any-card.png)
    *Cualquier tarjeta*

5.  Selecciona la tarjeta con la que pagas (por ejemplo, **Kaspi Gold**). Toca la marca de verificación.

    ![Selección de una tarjeta de pago](https://qalta.app/assets/apple-pay-ios-27/en/05-select-card.png)
    *Qué tarjeta seguir*

6.  Ahora deberías ver un solo bloque: **When \[tu tarjeta\] is tapped**. En el campo de búsqueda de abajo, escribe **Qalta**.

    ![Activador de Wallet para la tarjeta seleccionada](https://qalta.app/assets/apple-pay-ios-27/en/06-card-tapped.png)
    *Activador de tarjeta listo*

7.  Toca **Crear gasto desde Wallet** (no «Crear transacción»).

    ![Búsqueda de Crear gasto desde Wallet](https://qalta.app/assets/apple-pay-ios-27/en/07-search-qalta.png)
    *Acción de Qalta*

8.  Deberías ver dos bloques: el activador de Wallet y la acción de Qalta. Toca el campo gris **Importe** y aparecerá un teclado numérico. Encima, toca **Seleccionar variable**.

    ![Campo Importe y Seleccionar variable](https://qalta.app/assets/apple-pay-ios-27/en/08-tap-amount.png)
    *Toca Importe y luego Seleccionar variable*

9.  En la pantalla Seleccionar variable, toca la etiqueta azul **Transacción** bajo el activador de Wallet. Es el pago con Apple Pay, no Entrada del atajo.

    ![Selección de Transacción desde el activador de Wallet](https://qalta.app/assets/apple-pay-ios-27/en/09-select-transaction.png)
    *Transacción*

10.  Toca la etiqueta azul **Transacción** que ahora está dentro de la acción de Qalta. En la hoja, no dejes la marca en «Transacción»: toca **Importe**.

     ![Propiedades de la transacción: toca Importe](https://qalta.app/assets/apple-pay-ios-27/en/10-pick-amount.png)
     *Obtener → Importe*

11.  Repite lo mismo con el nombre de la tienda. Toca la flecha de la acción de Qalta para desplegar los campos. Toca **Comercio** → **Seleccionar variable** → **Transacción**. Vuelve a tocar la etiqueta y elige **Comercio** en la lista, no «Transacción».

     ![Elección de Comercio desde la transacción](https://qalta.app/assets/apple-pay-ios-27/en/11-merchant.png)
     *Obtener → Comercio*

12.  El resto de los campos son opcionales. Opciones para **Categoría** y **Cuenta**:

     -   **Elegir**: selecciona una categoría o cuenta concreta de Qalta. Si solo tienes una cuenta, haz esto: selecciónala una vez. No necesitas Preguntar cada vez.
     -   **Preguntar cada vez**: tras cada pago, Qalta te preguntará dónde guardar el gasto. Útil si tienes varias categorías o cuentas.
     -   Puedes dejar **Elegir** vacío: Qalta usará los valores predeterminados e intentará detectar la categoría.

     **Divisa**, **Nota** y **Fecha** pueden quedarse vacíos. Activa **Mostrar al ejecutar** para que aparezca una confirmación después del pago. Toca la flecha para volver.

     ![Categoría, Cuenta y Mostrar al ejecutar](https://qalta.app/assets/apple-pay-ios-27/en/12-category-account.png)
     *Categoría, cuenta y confirmación*

13.  El atajo aparece en **Todos los atajos** como **Crear gasto desde Wallet**. Tras tu próxima compra con Apple Pay con la tarjeta seleccionada, Qalta te ofrecerá guardar el gasto.

     ![Crear gasto desde Wallet en Todos los atajos](https://qalta.app/assets/apple-pay-ios-27/en/13-all-shortcuts.png)
     *Todo listo*

## Vídeo completo

¿Prefieres seguir los pasos con una grabación de pantalla?

*Configuración paso a paso en iOS 27.*

[Todos los tutoriales](https://qalta.app/es/tutorials/)
