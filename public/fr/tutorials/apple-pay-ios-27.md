---
title: "Automatisation Apple Pay sur iOS 27 — Qalta"
description: "Configurez un raccourci pour que chaque achat Apple Pay soit enregistré dans Qalta comme dépense, avec le montant et le commerçant issus de Wallet. Pour iOS 27."
url: https://qalta.app/fr/tutorials/apple-pay-ios-27
---

# Automatisation Apple Pay sur iOS 27

Après un paiement Apple Pay, Qalta peut enregistrer l’achat comme dépense. Le montant et le commerçant proviennent de la transaction Wallet ; vous pouvez choisir la catégorie et le compte à chaque fois, ou les définir à l’avance.

Il vous faut iOS 27, **Qalta** et **Raccourcis**, ainsi que des cartes dans Wallet. Sur iOS 27, le déclencheur Wallet se trouve dans un nouveau raccourci — il n’y a plus d’onglet Automatisation séparé.

1.  Ouvrez **Raccourcis** et touchez le bouton **+** en bas pour créer un raccourci.

    ![Tous les raccourcis avec le bouton plus](https://qalta.app/assets/apple-pay-ios-27/en/01-shortcuts.png)
    *Nouveau raccourci*

2.  Un éditeur vide s’ouvre. Dans la recherche d’actions, touchez la puce **Automatisation** — ou tapez « Automatisation ».

    ![Éditeur de raccourci vide avec la puce Automatisation](https://qalta.app/assets/apple-pay-ios-27/en/02-new-shortcut.png)
    *Puce Automatisation*

3.  Sous **Apps**, touchez **Wallet** — « When I tap a Wallet Card or Pass » (paiement sur un terminal).

    ![Déclencheur Wallet dans la liste Automatisation](https://qalta.app/assets/apple-pay-ios-27/en/03-wallet-trigger.png)
    *Déclencheur Wallet*

4.  Le premier bloc indique **When Any Card is tapped**. Si vous voulez que Qalta ne se lance que pour certaines cartes, touchez la puce bleue **Any Card**.

    ![Déclencheur When Any Card is tapped](https://qalta.app/assets/apple-pay-ios-27/en/04-any-card.png)
    *Any Card*

5.  Sélectionnez la carte avec laquelle vous payez (par exemple **Kaspi Gold**). Touchez la coche.

    ![Sélection d’une carte de paiement](https://qalta.app/assets/apple-pay-ios-27/en/05-select-card.png)
    *Carte à suivre*

6.  Vous devriez maintenant voir un seul bloc : **When \[votre carte\] is tapped**. Dans le champ de recherche en bas, tapez **Qalta**.

    ![Déclencheur Wallet pour la carte sélectionnée](https://qalta.app/assets/apple-pay-ios-27/en/06-card-tapped.png)
    *Le déclencheur de carte est prêt*

7.  Touchez **Créer une dépense Wallet** (et non « Créer une transaction »).

    ![Recherche de Créer une dépense Wallet](https://qalta.app/assets/apple-pay-ios-27/en/07-search-qalta.png)
    *Action Qalta*

8.  Vous devriez voir deux blocs : le déclencheur Wallet et l’action Qalta. Touchez le champ gris **Montant** — un pavé numérique apparaît. Au-dessus, touchez **Sélectionner une variable**.

    ![Champ Montant et Sélectionner une variable](https://qalta.app/assets/apple-pay-ios-27/en/08-tap-amount.png)
    *Montant, puis Sélectionner une variable*

9.  Sur l’écran Sélectionner une variable, touchez la puce bleue **Transaction** sous le déclencheur Wallet. C’est le paiement Apple Pay, et non l’Entrée du raccourci.

    ![Sélection de Transaction depuis le déclencheur Wallet](https://qalta.app/assets/apple-pay-ios-27/en/09-select-transaction.png)
    *Transaction*

10.  Touchez la puce bleue **Transaction** qui se trouve maintenant dans l’action Qalta. Dans la fenêtre, ne laissez pas la coche sur « Transaction » — touchez **Montant**.

     ![Propriétés de la transaction : touchez Montant](https://qalta.app/assets/apple-pay-ios-27/en/10-pick-amount.png)
     *Obtenir → Montant*

11.  Faites de même pour le nom du magasin. Touchez le chevron de l’action Qalta pour afficher les champs. Touchez **Commerçant** → **Sélectionner une variable** → **Transaction**. Touchez de nouveau la puce et choisissez **Commerçant** dans la liste — et non « Transaction ».

     ![Choix de Commerçant dans la transaction](https://qalta.app/assets/apple-pay-ios-27/en/11-merchant.png)
     *Obtenir → Commerçant*

12.  Les autres champs sont facultatifs. Options pour **Catégorie** et **Compte** :

     -   **Choisir** — sélectionnez une catégorie ou un compte précis de Qalta. Si vous n’avez qu’un compte, faites-le : sélectionnez-le une fois. Inutile d’utiliser « Demander à chaque fois ».
     -   **Demander à chaque fois** — après chaque paiement, Qalta vous demandera où enregistrer la dépense. Pratique si vous avez plusieurs catégories ou comptes.
     -   Vous pouvez laisser **Choisir** vide — Qalta utilisera les valeurs par défaut et tentera de détecter la catégorie.

     **Devise**, **Note** et **Date** peuvent rester vides. Activez **Afficher lors de l’exécution** pour qu’une confirmation apparaisse après le paiement. Touchez la flèche de retour.

     ![Catégorie, Compte et Afficher lors de l’exécution](https://qalta.app/assets/apple-pay-ios-27/en/12-category-account.png)
     *Catégorie, compte et confirmation*

13.  Le raccourci apparaît dans **Tous les raccourcis** sous le nom **Créer une dépense Wallet**. Après votre prochain achat Apple Pay avec la carte sélectionnée, Qalta vous proposera d’enregistrer la dépense.

     ![Créer une dépense Wallet dans Tous les raccourcis](https://qalta.app/assets/apple-pay-ios-27/en/13-all-shortcuts.png)
     *C’est prêt*

## Vidéo complète

Vous préférez suivre sur un enregistrement d’écran ?

*Configuration pas à pas sur iOS 27.*

[Tous les tutoriels](https://qalta.app/fr/tutorials/)
