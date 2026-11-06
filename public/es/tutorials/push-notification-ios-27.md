---
title: "Automatización de notificaciones del banco en iOS 27 — Qalta"
description: "Configura un atajo para que la notificación de pago de la app de tu banco se guarde en Qalta como gasto, con el importe leído del texto. Para iOS 27."
url: https://qalta.app/es/tutorials/push-notification-ios-27
---

# Automatización de notificaciones del banco en iOS 27

Cuando la app de tu banco envía una notificación de pago, Qalta puede guardarla como gasto. El importe y el comercio se extraen del texto de la notificación.

Necesitas iOS 27, **Qalta** y **Atajos**, y una app bancaria que muestre notificaciones en la pantalla de bloqueo. Este activador no está disponible en iOS 26.

1.  Abre **Atajos** y toca el botón **+** de la parte inferior para crear un atajo nuevo.

    ![Todos los atajos con el botón más](https://qalta.app/assets/push-notification-ios-27/en/01-shortcuts.png)
    *Atajo nuevo*

2.  Se abre un editor vacío. En la búsqueda de acciones, toca la etiqueta **Automatización** o escribe «Automatización».

    ![Editor de atajos vacío con la etiqueta Automatización](https://qalta.app/assets/push-notification-ios-27/en/02-new-shortcut.png)
    *Etiqueta Automatización*

3.  En **Apps**, toca **Notificación**: “When I receive a notification from …”.

    ![Activador de notificación en la lista de Automatización](https://qalta.app/assets/push-notification-ios-27/en/03-notification-trigger.png)
    *Activador de notificación*

4.  El primer bloque dice **When I receive a notification from App**. Toca la etiqueta azul **App** para elegir tu banco.

    ![When I receive a notification from App](https://qalta.app/assets/push-notification-ios-27/en/04-from-app.png)
    *Elige la app*

5.  Busca tu banco y toca la app que envía los avisos de pago (por ejemplo, **Kaspi.kz**, no una app relacionada de pagos o QR).

    ![Selector de apps buscando el banco](https://qalta.app/assets/push-notification-ios-27/en/05-pick-bank.png)
    *App del banco*

6.  Ahora deberías ver **When I receive a notification from \[banco\]**. En el campo de búsqueda de abajo, escribe **Qalta**.

    ![Activador de notificación para la app bancaria seleccionada](https://qalta.app/assets/push-notification-ios-27/en/06-bank-selected.png)
    *Activador del banco listo*

7.  Toca **Registrar gasto bancario** (no «Crear gasto desde Wallet» ni «Crear transacción»).

    ![Búsqueda de Registrar gasto bancario](https://qalta.app/assets/push-notification-ios-27/en/07-search-qalta.png)
    *Acción de Qalta*

8.  Deberías ver dos bloques: el activador de notificación y **Registrar gasto de Cuerpo de la notificación en Qalta**. Toca el campo gris **Cuerpo de la notificación**.

    ![Registrar gasto bancario con el campo Cuerpo de la notificación](https://qalta.app/assets/push-notification-ios-27/en/08-tap-body.png)
    *Toca Cuerpo de la notificación*

9.  Aparece un teclado. Encima, toca **Seleccionar variable** y luego la etiqueta azul **Notificación** bajo el activador.

    ![Seleccionar variable con la etiqueta Notificación](https://qalta.app/assets/push-notification-ios-27/en/09-select-variable.png)
    *Seleccionar variable → Notificación*

10.  Toca la etiqueta azul **Notificación** que ahora está dentro de la acción de Qalta. En la hoja, no dejes la marca en «Notificación»: toca **Body**. Qalta lee el importe del texto de la notificación, no de la notificación completa.

     ![Propiedades de la notificación: toca Body](https://qalta.app/assets/push-notification-ios-27/en/10-pick-body.png)
     *Obtener → Body*

11.  La acción de Qalta debería decir ahora **Registrar gasto de Body en Qalta**.

     ![Body asignado en Registrar gasto bancario](https://qalta.app/assets/push-notification-ios-27/en/11-body-mapped.png)
     *Body asignado*

12.  El resto de los campos son opcionales. Toca la flecha para desplegarlos. Opciones para **Categoría** y **Cuenta**:

     -   **Elegir**: selecciona una categoría o cuenta concreta de Qalta. Si solo tienes una cuenta, haz esto: selecciónala una vez. No necesitas Preguntar cada vez.
     -   **Preguntar cada vez**: tras cada notificación, Qalta te preguntará dónde guardar el gasto. Útil si tienes varias categorías o cuentas.
     -   Puedes dejar **Elegir** vacío: Qalta usará los valores predeterminados e intentará detectar la categoría.

     **Nota** y **Fecha** pueden quedarse vacíos. Activa **Mostrar al ejecutar** para que aparezca una confirmación. Toca la flecha para volver.

     ![Categoría, Cuenta y Mostrar al ejecutar](https://qalta.app/assets/push-notification-ios-27/en/12-category-account.png)
     *Categoría, cuenta y confirmación*

13.  El atajo aparece en **Todos los atajos** como **Registrar gasto bancario**. Tras la próxima notificación de pago de esa app bancaria, Qalta te ofrecerá guardar el gasto.

     ![Registrar gasto bancario en Todos los atajos](https://qalta.app/assets/push-notification-ios-27/en/13-all-shortcuts.png)
     *Todo listo*

## Vídeo completo

¿Prefieres seguir los pasos con una grabación de pantalla?

*Configuración paso a paso en iOS 27.*

[Todos los tutoriales](https://qalta.app/es/tutorials/)
