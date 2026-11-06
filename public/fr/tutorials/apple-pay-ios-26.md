---
title: "Automatisation Apple Pay sur iOS 26 — Qalta"
description: "Configurez une automatisation Raccourcis pour que chaque achat Apple Pay soit enregistré dans Qalta comme dépense, avec le montant et le commerçant remplis. Pour iOS 26."
url: https://qalta.app/fr/tutorials/apple-pay-ios-26
---

# Automatisation Apple Pay sur iOS 26

Après un paiement Apple Pay, Qalta peut enregistrer l’achat comme dépense. Le montant et le commerçant proviennent de la transaction ; vous pouvez choisir la catégorie et le compte à chaque fois, ou les définir à l’avance.

Il vous faut iOS 26, **Qalta** et **Raccourcis**, ainsi que des cartes dans Wallet.

1.  Ouvrez **Réglages → Wallet & Apple Pay**. Activez **Activités en direct** et **Données cellulaires**.

    ![Autorisations Wallet et Apple Pay](https://qalta.app/assets/apple-pay-ios-26/en/01-wallet-settings.png)
    *Autorisations Wallet*

2.  Ouvrez **Raccourcis**, allez dans l’onglet **Automatisation** et touchez **Nouvelle automatisation**.

    ![Onglet Automatisation de Raccourcis](https://qalta.app/assets/apple-pay-ios-26/en/02-automation-tab.png)
    *Nouvelle automatisation*

3.  Choisissez **Wallet** — « When I tap a Wallet Card or Pass » (paiement sur un terminal).

    ![Déclencheur Wallet dans la liste des automatisations](https://qalta.app/assets/apple-pay-ios-26/en/03-wallet-trigger.png)
    *Déclencheur Wallet*

4.  Sélectionnez les cartes que Qalta doit suivre. Touchez **Suivant**.

    ![Sélection des cartes de paiement](https://qalta.app/assets/apple-pay-ios-26/en/04-select-cards.png)
    *Cartes à suivre*

5.  Gardez les catégories Wallet qui vous intéressent (toutes, c’est très bien). Sélectionnez **Exécuter immédiatement** (et non Exécuter après confirmation). Touchez **Suivant**.

    ![Catégories Wallet](https://qalta.app/assets/apple-pay-ios-26/en/05-categories.png)
    *Catégories*

6.  Sur l’écran des tuiles, touchez la carte grise **Create New Shortcut** en haut à gauche. Ne choisissez pas un raccourci existant dans la liste en dessous.

    ![Tuile Create New Shortcut](https://qalta.app/assets/apple-pay-ios-26/en/06-create-shortcut.png)
    *Nouveau raccourci*

7.  Un éditeur vide s’ouvre. Dans la recherche d’actions en bas, tapez **Qalta** et touchez **Créer une dépense Wallet** (et non « Créer une transaction »).

    ![Recherche de Créer une dépense Wallet](https://qalta.app/assets/apple-pay-ios-26/en/07-search-qalta.png)
    *Action Qalta*

8.  Vous devriez voir deux blocs : « Receive transaction as input » et l’action Qalta. Touchez le champ gris **Montant** de l’action Qalta — un pavé numérique apparaît. Au-dessus, touchez **Sélectionner une variable**.

    ![Champ Montant et Sélectionner une variable](https://qalta.app/assets/apple-pay-ios-26/en/08-tap-amount.png)
    *Montant, puis Sélectionner une variable*

9.  Sur l’écran Sélectionner une variable, touchez la puce bleue **Entrée du raccourci** sous « Receive transaction as input ».

    ![Sélection de Entrée du raccourci comme variable](https://qalta.app/assets/apple-pay-ios-26/en/09-select-variable.png)
    *Entrée du raccourci*

10.  Touchez la puce bleue **Entrée du raccourci** qui se trouve maintenant dans l’action Qalta. Dans la fenêtre, Type doit être **Transaction**. Ne laissez pas la coche sur « Transaction » — faites défiler la liste et touchez **Montant**.

     ![Propriétés de la transaction : touchez Montant](https://qalta.app/assets/apple-pay-ios-26/en/10-pick-amount.png)
     *Type Transaction → Montant*

11.  Faites de même pour le nom du magasin. Touchez le chevron de l’action Qalta pour afficher les champs. Touchez **Commerçant** → **Sélectionner une variable** → **Entrée du raccourci**. Touchez de nouveau la puce, Type **Transaction**, puis choisissez **Commerçant** dans la liste.

     ![Choix de Commerçant dans la transaction](https://qalta.app/assets/apple-pay-ios-26/en/11-merchant.png)
     *Type Transaction → Commerçant*

12.  Les autres champs sont facultatifs. Options pour **Catégorie** et **Compte** :

     -   **Choisir** — sélectionnez une catégorie ou un compte précis de Qalta. Si vous n’avez qu’un compte, faites-le : sélectionnez-le une fois. Inutile d’utiliser « Demander à chaque fois ».
     -   **Demander à chaque fois** — après chaque paiement, Qalta vous demandera où enregistrer la dépense. Pratique si vous avez plusieurs catégories ou comptes.
     -   Vous pouvez laisser **Choisir** vide — Qalta utilisera les valeurs par défaut et tentera de détecter la catégorie.

     **Devise**, **Note** et **Date** peuvent rester vides. Activez **Afficher lors de l’exécution** pour qu’une confirmation apparaisse après le paiement. Touchez la coche bleue en haut.

     ![Catégorie, Compte et Afficher lors de l’exécution](https://qalta.app/assets/apple-pay-ios-26/en/12-category-account.png)
     *Catégorie, compte et confirmation*

13.  L’automatisation apparaît dans **Automatisation**. Après votre prochain achat Apple Pay avec la carte sélectionnée, Qalta vous proposera d’enregistrer la dépense.

     ![Automatisation terminée dans la liste](https://qalta.app/assets/apple-pay-ios-26/en/13-automation-list.png)
     *C’est prêt*

## Vidéo complète

Vous préférez suivre sur un enregistrement d’écran ?

*Configuration pas à pas sur iOS 26.*

[Tous les tutoriels](https://qalta.app/fr/tutorials/)
