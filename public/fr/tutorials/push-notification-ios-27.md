---
title: "Automatisation des notifications bancaires sur iOS 27 — Qalta"
description: "Configurez un raccourci pour qu’une notification de paiement de votre app bancaire soit enregistrée dans Qalta comme dépense, avec le montant lu dans le texte. Pour iOS 27."
url: https://qalta.app/fr/tutorials/push-notification-ios-27
---

# Automatisation des notifications bancaires sur iOS 27

Quand votre app bancaire envoie une notification de paiement, Qalta peut l’enregistrer comme dépense. Le montant et le commerçant sont extraits du texte de la notification.

Il vous faut iOS 27, **Qalta** et **Raccourcis**, ainsi qu’une app bancaire qui affiche des notifications sur l’écran verrouillé. Ce déclencheur n’est pas disponible sur iOS 26.

1.  Ouvrez **Raccourcis** et touchez le bouton **+** en bas pour créer un raccourci.

    ![Tous les raccourcis avec le bouton plus](https://qalta.app/assets/push-notification-ios-27/en/01-shortcuts.png)
    *Nouveau raccourci*

2.  Un éditeur vide s’ouvre. Dans la recherche d’actions, touchez la puce **Automatisation** — ou tapez « Automatisation ».

    ![Éditeur de raccourci vide avec la puce Automatisation](https://qalta.app/assets/push-notification-ios-27/en/02-new-shortcut.png)
    *Puce Automatisation*

3.  Sous **Apps**, touchez **Notification** — « When I receive a notification from … ».

    ![Déclencheur Notification dans la liste Automatisation](https://qalta.app/assets/push-notification-ios-27/en/03-notification-trigger.png)
    *Déclencheur Notification*

4.  Le premier bloc indique **When I receive a notification from App**. Touchez la puce bleue **App** pour choisir votre banque.

    ![When I receive a notification from App](https://qalta.app/assets/push-notification-ios-27/en/04-from-app.png)
    *Choisir l’app*

5.  Recherchez votre banque et touchez l’app qui envoie les alertes de paiement (par exemple **Kaspi.kz**, et non une app Pay ou QR associée).

    ![Sélecteur d’app avec la recherche de la banque](https://qalta.app/assets/push-notification-ios-27/en/05-pick-bank.png)
    *App bancaire*

6.  Vous devriez maintenant voir **When I receive a notification from \[banque\]**. Dans le champ de recherche en bas, tapez **Qalta**.

    ![Déclencheur Notification pour l’app bancaire sélectionnée](https://qalta.app/assets/push-notification-ios-27/en/06-bank-selected.png)
    *Le déclencheur bancaire est prêt*

7.  Touchez **Enregistrer une dépense bancaire** (et non « Créer une dépense Wallet » ni « Créer une transaction »).

    ![Recherche de Enregistrer une dépense bancaire](https://qalta.app/assets/push-notification-ios-27/en/07-search-qalta.png)
    *Action Qalta*

8.  Vous devriez voir deux blocs : le déclencheur de notification et **Enregistrer une dépense bancaire depuis Corps de la notification**. Touchez le champ gris **Corps de la notification**.

    ![Enregistrer une dépense bancaire avec le champ Corps de la notification](https://qalta.app/assets/push-notification-ios-27/en/08-tap-body.png)
    *Corps de la notification*

9.  Un clavier apparaît. Au-dessus, touchez **Sélectionner une variable**, puis la puce bleue **Notification** sous le déclencheur.

    ![Sélectionner une variable avec la puce Notification](https://qalta.app/assets/push-notification-ios-27/en/09-select-variable.png)
    *Sélectionner une variable → Notification*

10.  Touchez la puce bleue **Notification** qui se trouve maintenant dans l’action Qalta. Dans la fenêtre, ne laissez pas la coche sur « Notification » — touchez **Body**. Qalta lit le montant dans le texte de la notification, et non dans l’objet notification entier.

     ![Propriétés de la notification : touchez Body](https://qalta.app/assets/push-notification-ios-27/en/10-pick-body.png)
     *Obtenir → Body*

11.  L’action Qalta devrait maintenant indiquer **Enregistrer une dépense bancaire depuis Body**.

     ![Body associé dans Enregistrer une dépense bancaire](https://qalta.app/assets/push-notification-ios-27/en/11-body-mapped.png)
     *Body est associé*

12.  Les autres champs sont facultatifs. Touchez le chevron pour les afficher. Options pour **Catégorie** et **Compte** :

     -   **Choisir** — sélectionnez une catégorie ou un compte précis de Qalta. Si vous n’avez qu’un compte, faites-le : sélectionnez-le une fois. Inutile d’utiliser « Demander à chaque fois ».
     -   **Demander à chaque fois** — après chaque notification, Qalta vous demandera où enregistrer la dépense. Pratique si vous avez plusieurs catégories ou comptes.
     -   Vous pouvez laisser **Choisir** vide — Qalta utilisera les valeurs par défaut et tentera de détecter la catégorie.

     **Note** et **Date** peuvent rester vides. Activez **Afficher lors de l’exécution** pour qu’une confirmation apparaisse. Touchez la flèche de retour.

     ![Catégorie, Compte et Afficher lors de l’exécution](https://qalta.app/assets/push-notification-ios-27/en/12-category-account.png)
     *Catégorie, compte et confirmation*

13.  Le raccourci apparaît dans **Tous les raccourcis** sous le nom **Enregistrer une dépense bancaire**. Après la prochaine notification de paiement de cette app bancaire, Qalta vous proposera d’enregistrer la dépense.

     ![Enregistrer une dépense bancaire dans Tous les raccourcis](https://qalta.app/assets/push-notification-ios-27/en/13-all-shortcuts.png)
     *C’est prêt*

## Vidéo complète

Vous préférez suivre sur un enregistrement d’écran ?

*Configuration pas à pas sur iOS 27.*

[Tous les tutoriels](https://qalta.app/fr/tutorials/)
