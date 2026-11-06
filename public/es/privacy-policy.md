---
title: "Política de privacidad — Qalta"
description: "Cómo trata Qalta tus datos. Los espacios privados se quedan en tu iPhone, con copia de seguridad opcional en iCloud; los espacios compartidos solo se sincronizan con las personas que invitas; la voz y los escaneos se envían a nuestro servidor y a OpenAI solo para leerlos."
url: https://qalta.app/es/privacy-policy
---

# Política de privacidad

Fecha de entrada en vigor: 16 de octubre de 2026

Esta traducción se ofrece por comodidad. Si difiere de la [versión en inglés](https://qalta.app/privacy-policy), prevalece la versión en inglés.

Esta política se aplica a la app móvil Qalta («la app»), ofrecida por Daniel Tokkozhin («nosotros»). Explica qué se queda en tu dispositivo, qué sale de él y qué empresas tratan esos datos.

## Los espacios privados se quedan en tu dispositivo

Tus registros se guardan en espacios. Un espacio privado, con sus cuentas, operaciones, categorías, presupuestos, metas, deudas, elementos recurrentes y otros datos similares, se almacena solo en tu dispositivo (SQLite). No subimos los espacios privados a nuestros servidores.

Si usas la función opcional de copia de seguridad, las copias pueden guardarse en tu cuenta de iCloud. Ese almacenamiento lo proporciona Apple y se rige por la política de privacidad de Apple.

## Espacios compartidos

Compartir es opcional. Si compartes un espacio, ese espacio y todo lo que contiene (su nombre, cuentas, operaciones, transferencias, categorías, presupuestos, metas, deudas, elementos recurrentes y las notas que añades) se sube a nuestro proveedor de backend, Supabase, y se mantiene sincronizado con tus otros dispositivos y con las personas que invitas. Solo los miembros del espacio pueden acceder a él. Cada registro muestra qué miembro lo creó y quién lo editó por última vez.

Los miembros de un espacio compartido pueden ver el nombre, la dirección de correo electrónico y la foto de perfil de la cuenta de inicio de sesión de los demás, así como cuándo se unió cada miembro. Las invitaciones son enlaces de un solo uso que caducan a los 7 días. Solo almacenamos una versión cifrada mediante hash del código de invitación, y las invitaciones caducadas se eliminan automáticamente.

Cuando el propietario deja de compartir o elimina un espacio compartido, sus datos se eliminan de nuestros servidores y todos los miembros pierden el acceso; queda una copia en el dispositivo de cada miembro hasta que la quite. Cuando un miembro sale o es quitado del espacio, pierde el acceso a los datos de nuestros servidores. Si tu suscripción termina, la sincronización se pausa, y los datos ya subidos permanecen en nuestros servidores hasta que se elimine el espacio.

## Cuenta

Inicias sesión con «Iniciar sesión con Apple» o «Iniciar sesión con Google». Recibimos un token de identidad de Apple o de Google y creamos una cuenta con nuestro proveedor de backend, Supabase. Esa cuenta puede incluir un ID de usuario, una dirección de correo electrónico (incluido el reenvío de «Ocultar mi correo» de Apple), tu nombre y, con Google, tu foto de perfil. Puedes cambiar en la app el nombre que ven los demás miembros.

Puedes eliminar tu cuenta en la app. Así se eliminan la cuenta y los registros de suscripción que almacenamos. Si eres propietario de espacios compartidos con otros miembros, primero tienes que eliminar esos espacios o quitar a sus miembros. Los datos de los espacios privados en el dispositivo son independientes; también puedes borrar los datos financieros locales en Ajustes.

## Suscripciones y compras

Las compras las procesa Apple. Usamos RevenueCat para consultar el estado de la suscripción. En Supabase, vinculados a tu ID de usuario, almacenamos un indicador de cuenta premium y contadores de uso de IA (cuántas solicitudes de voz, imagen y documentos has usado). No recibimos ni almacenamos números de tarjetas de pago.

## Voz, escaneo, documentos y otras funciones de IA

Cuando usas la entrada por voz, el escaneo de recibos o documentos u otra extracción con IA, la app envía el contenido que has proporcionado a nuestro backend (Supabase Edge Functions). El backend reenvía ese contenido a OpenAI para que la app pueda proponer operaciones.

Según la función, ese contenido puede incluir:

-   audio de voz;
-   fotos de recibos, facturas, extractos u otros documentos similares;
-   texto extraído de documentos;
-   texto que has escrito;
-   nombres de cuentas y categorías del dispositivo, junto con los importes y la divisa relacionados, para que el modelo pueda asociarlos.

Esto se envía solo para prestar la función que has solicitado. No almacenamos el contenido enviado en nuestra base de datos. El backend usa la solicitud para devolver entradas estructuradas y para contabilizar el uso frente a tus límites.

OpenAI procesa la solicitud conforme a sus condiciones de la API. OpenAI declara que, por defecto, los datos enviados a la API no se usan para entrenar sus modelos. OpenAI puede conservar datos durante un periodo limitado para operar la API y para supervisar abusos. Consulta las políticas de OpenAI enlazadas más abajo.

Las funciones de IA son opcionales. Puedes añadir operaciones manualmente sin enviar este contenido.

## Analítica, fallos y otros datos de red

-   **Tipos de cambio.** La app descarga de nuestros servidores instantáneas públicas de tipos de cambio. No se trata de tus registros.
-   **Analítica de producto (PostHog).** Registramos eventos como las funciones que usas, recuentos aproximados de uso (por ejemplo, el número de operaciones, no los importes) y el idioma de la app. Los eventos se asocian a tu ID de usuario. No enviamos a PostHog importes de operaciones, notas, fotos ni audio.
-   **Informes de fallos (Sentry).** Enviamos diagnósticos de fallos para ayudar a corregir errores. No adjuntamos capturas de pantalla ni información personal adicional a esos informes.
-   **Datos técnicos.** Cuando la app se comunica con un servidor o un SDK, ese tercero suele recibir información técnica como la dirección IP, el tipo de dispositivo y la versión del sistema operativo.

## Lo que no hacemos

-   No vendemos tus datos.
-   No usamos tus datos para redes publicitarias ni para rastrearte en apps y sitios web de otras empresas.
-   No recopilamos tu ubicación GPS precisa. La app usa los ajustes de idioma y región del dispositivo, no el GPS.

## Encargados del tratamiento externos

Estas empresas tratan datos según lo descrito anteriormente. Cada una tiene su propia política de privacidad:

-   [Apple](https://www.apple.com/legal/privacy/): Iniciar sesión con Apple, App Store, compras dentro de la app, copia de seguridad opcional en iCloud
-   [Google](https://policies.google.com/privacy): Iniciar sesión con Google
-   [Supabase](https://supabase.com/privacy): cuenta, registros de suscripción y uso, espacios compartidos, funciones de backend
-   [OpenAI](https://openai.com/policies/privacy-policy/): procesamiento con IA del contenido que envías ([privacidad de la API y empresarial](https://openai.com/enterprise-privacy/))
-   [RevenueCat](https://www.revenuecat.com/privacy): estado de la suscripción
-   [PostHog](https://posthog.com/privacy): analítica de producto
-   [Sentry](https://sentry.io/privacy/): informes de fallos
-   [Expo](https://expo.dev/privacy): entorno de ejecución de la app

También podemos divulgar información si la ley lo exige, o si creemos de buena fe que la divulgación es necesaria para proteger derechos o la seguridad, o para investigar un fraude.

## Conservación y eliminación

-   Los datos de los espacios privados permanecen en tu dispositivo hasta que los eliminas o desinstalas la app (salvo que también conserves una copia de seguridad en iCloud).
-   Los datos de los espacios compartidos se conservan en nuestros servidores mientras el espacio está compartido y se eliminan cuando el propietario deja de compartirlo o lo elimina.
-   Los registros de cuenta y de uso se conservan mientras tengas una cuenta y se eliminan cuando eliminas la cuenta, más un breve periodo necesario para completar la eliminación.
-   El contenido de las solicitudes de IA se procesa para atender la solicitud. No lo almacenamos como parte de tus registros. Los encargados del tratamiento pueden conservarlo según sus propias políticas.
-   Los datos de analítica y de fallos se conservan el tiempo necesario para operar y mejorar la app.

Para eliminar los datos de tu cuenta, usa Eliminar cuenta en la app o escribe a [help.qalta.app@outlook.com](mailto:help.qalta.app@outlook.com).

## Cambios

Podemos actualizar esta política. La fecha de entrada en vigor indicada arriba cambiará. Si sigues usando la app tras una actualización, aceptas la política revisada.

## Contacto

Daniel Tokkozhin
[help.qalta.app@outlook.com](mailto:help.qalta.app@outlook.com)
