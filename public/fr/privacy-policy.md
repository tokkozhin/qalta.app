---
title: "Politique de confidentialité — Qalta"
description: "Comment Qalta traite vos données. Les espaces privés restent sur votre iPhone, avec une sauvegarde iCloud facultative ; les espaces partagés se synchronisent uniquement avec les personnes que vous invitez ; la voix et les scans sont envoyés à notre serveur et à OpenAI uniquement pour être lus."
url: https://qalta.app/fr/privacy-policy
---

# Politique de confidentialité

Date d’entrée en vigueur : 16 octobre 2026

Cette traduction est fournie pour plus de commodité. En cas de divergence avec la [version anglaise](https://qalta.app/privacy-policy), c’est la version anglaise qui prévaut.

La présente politique s’applique à l’application mobile Qalta (« l’app ») fournie par Daniel Tokkozhin (« nous »). Elle explique ce qui reste sur votre appareil, ce qui quitte l’appareil et quelles entreprises traitent ces données.

## Les espaces privés restent sur votre appareil

Vos données sont conservées dans des espaces. Un espace privé, avec ses comptes, opérations, catégories, budgets, objectifs, dettes, éléments récurrents et autres données similaires, est stocké uniquement sur votre appareil (SQLite). Nous n’envoyons pas les espaces privés sur nos serveurs.

Si vous utilisez la fonction de sauvegarde facultative, des copies peuvent être stockées dans votre compte iCloud. Ce stockage est fourni par Apple et relève de la politique de confidentialité d’Apple.

## Espaces partagés

Le partage est facultatif. Si vous partagez un espace, cet espace et tout son contenu (son nom, ses comptes, opérations, virements, catégories, budgets, objectifs, dettes, éléments récurrents et les notes que vous ajoutez) sont envoyés à notre fournisseur backend, Supabase, et synchronisés avec vos autres appareils et avec les personnes que vous invitez. Seuls les membres de l’espace peuvent y accéder. Chaque enregistrement indique quel membre l’a créé et qui l’a modifié en dernier.

Les membres d’un espace partagé peuvent voir le nom, l’adresse e-mail et la photo de profil de chacun issus du compte de connexion, ainsi que la date à laquelle chaque membre a rejoint l’espace. Les invitations sont des liens à usage unique qui expirent au bout de 7 jours. Nous ne stockons qu’une forme hachée du code d’invitation, et les invitations expirées sont supprimées automatiquement.

Lorsque le propriétaire arrête le partage ou supprime un espace partagé, ses données sont supprimées de nos serveurs et tous les membres perdent l’accès ; une copie reste sur l’appareil de chaque membre jusqu’à ce qu’il la retire. Lorsqu’un membre quitte l’espace ou en est retiré, il perd l’accès aux données présentes sur nos serveurs. Si votre abonnement prend fin, la synchronisation est suspendue, et les données déjà envoyées restent sur nos serveurs jusqu’à la suppression de l’espace.

## Compte

Vous vous connectez avec « Se connecter avec Apple » ou « Se connecter avec Google ». Nous recevons un jeton d’identité d’Apple ou de Google et créons un compte auprès de notre fournisseur backend, Supabase. Ce compte peut comprendre un identifiant utilisateur, une adresse e-mail (y compris le relais « Masquer mon adresse e-mail » d’Apple), votre nom et, avec Google, votre photo de profil. Vous pouvez modifier dans l’app le nom affiché aux autres membres.

Vous pouvez supprimer votre compte dans l’app. Cela supprime le compte et les données d’abonnement que nous conservons. Si vous êtes propriétaire d’espaces partagés avec d’autres membres, vous devez d’abord supprimer ces espaces ou en retirer les membres. Les données des espaces privés sur l’appareil sont distinctes ; vous pouvez aussi effacer les données financières locales dans les Réglages.

## Abonnements et achats

Les achats sont traités par Apple. Nous utilisons RevenueCat pour connaître l’état de l’abonnement. Nous stockons dans Supabase, liés à votre identifiant utilisateur, un indicateur premium et des compteurs d’utilisation de l’IA (le nombre de requêtes vocales, d’images et de documents que vous avez utilisées). Nous ne recevons ni ne stockons les numéros de carte de paiement.

## Voix, scan, documents et autres fonctions d’IA

Lorsque vous utilisez la saisie vocale, le scan de reçus ou de documents, ou une autre extraction par IA, l’app envoie le contenu que vous avez soumis à notre backend (Supabase Edge Functions). Le backend transmet ce contenu à OpenAI afin que l’app puisse proposer des opérations.

Selon la fonction, ce contenu peut comprendre :

-   l’audio de votre voix ;
-   des photos de reçus, de factures, de relevés ou de documents similaires ;
-   du texte extrait de documents ;
-   du texte que vous avez saisi ;
-   les noms des comptes et des catégories présents sur l’appareil, ainsi que les montants et la devise associés, afin que le modèle puisse les faire correspondre.

Ce contenu n’est envoyé que pour fournir la fonction que vous avez demandée. Nous ne stockons pas le contenu soumis dans notre base de données. Le backend utilise la requête pour renvoyer des entrées structurées et pour décompter l’utilisation par rapport à vos limites.

OpenAI traite la requête conformément à ses conditions d’utilisation de l’API. OpenAI indique que, par défaut, les données soumises à l’API ne sont pas utilisées pour entraîner ses modèles. OpenAI peut conserver des données pendant une durée limitée pour faire fonctionner l’API et pour la surveillance des abus. Consultez les politiques d’OpenAI dont les liens figurent ci-dessous.

Les fonctions d’IA sont facultatives. Vous pouvez ajouter des opérations manuellement sans envoyer ce contenu.

## Analyses, plantages et autres données réseau

-   **Taux de change.** L’app télécharge depuis nos serveurs des relevés publics de taux de change. Il ne s’agit pas de votre journal.
-   **Analyses produit (PostHog).** Nous enregistrons des événements tels que les fonctions que vous utilisez, des volumes d’utilisation approximatifs (par exemple le nombre d’opérations, pas les montants) et la langue de l’app. Les événements sont associés à votre identifiant utilisateur. Nous n’envoyons à PostHog ni montants d’opérations, ni notes, ni photos, ni audio.
-   **Rapports de plantage (Sentry).** Nous envoyons des diagnostics de plantage pour aider à corriger les bugs. Nous n’y joignons ni captures d’écran ni informations personnelles supplémentaires.
-   **Données techniques.** Lorsque l’app communique avec un serveur ou un SDK, ce tiers reçoit généralement des informations techniques telles que l’adresse IP, le type d’appareil et la version du système d’exploitation.

## Ce que nous ne faisons pas

-   Nous ne vendons pas vos données.
-   Nous n’utilisons pas vos données pour des réseaux publicitaires ni pour vous suivre dans les apps et sites web d’autres entreprises.
-   Nous ne collectons pas votre position GPS précise. L’app utilise les réglages de langue et de région de l’appareil, et non le GPS.

## Sous-traitants tiers

Ces entreprises traitent des données comme décrit ci-dessus. Chacune a sa propre politique de confidentialité :

-   [Apple](https://www.apple.com/legal/privacy/) — « Se connecter avec Apple », App Store, achats intégrés, sauvegarde iCloud facultative
-   [Google](https://policies.google.com/privacy) — « Se connecter avec Google »
-   [Supabase](https://supabase.com/privacy) — compte, données d’abonnement et d’utilisation, espaces partagés, fonctions backend
-   [OpenAI](https://openai.com/policies/privacy-policy/) — traitement par IA du contenu que vous soumettez ([confidentialité API / entreprise](https://openai.com/enterprise-privacy/))
-   [RevenueCat](https://www.revenuecat.com/privacy) — état de l’abonnement
-   [PostHog](https://posthog.com/privacy) — analyses produit
-   [Sentry](https://sentry.io/privacy/) — rapports de plantage
-   [Expo](https://expo.dev/privacy) — environnement d’exécution de l’app

Nous pouvons également divulguer des informations si la loi l’exige, ou si nous estimons de bonne foi que cette divulgation est nécessaire pour protéger des droits ou la sécurité, ou pour enquêter sur une fraude.

## Conservation et suppression

-   Les données des espaces privés restent sur votre appareil jusqu’à ce que vous les supprimiez ou désinstalliez l’app (sauf si vous conservez aussi une sauvegarde iCloud).
-   Les données des espaces partagés sont conservées sur nos serveurs tant que l’espace est partagé, puis supprimées lorsque le propriétaire arrête le partage ou supprime l’espace.
-   Les données de compte et d’utilisation sont conservées tant que vous avez un compte, puis supprimées lorsque vous supprimez le compte, avec un court délai nécessaire pour finaliser la suppression.
-   Le contenu des requêtes d’IA est traité pour exécuter la requête. Nous ne le stockons pas en tant que vos données. Les sous-traitants peuvent le conserver conformément à leurs propres politiques.
-   Les données d’analyse et de plantage sont conservées autant que nécessaire pour faire fonctionner et améliorer l’app.

Pour supprimer les données de votre compte, utilisez « Supprimer le compte » dans l’app ou écrivez à [help.qalta.app@outlook.com](mailto:help.qalta.app@outlook.com).

## Modifications

Nous pouvons mettre à jour cette politique. La date d’entrée en vigueur ci-dessus sera alors modifiée. Continuer à utiliser l’app après une mise à jour signifie que vous acceptez la politique révisée.

## Contact

Daniel Tokkozhin
[help.qalta.app@outlook.com](mailto:help.qalta.app@outlook.com)
