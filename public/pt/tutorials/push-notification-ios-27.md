---
title: "Automação de notificações do banco no iOS 27 — Qalta"
description: "Configure um atalho para que a notificação de pagamento do app do seu banco seja salva no Qalta como despesa, com o valor lido do texto. Para iOS 27."
url: https://qalta.app/pt/tutorials/push-notification-ios-27
---

# Automação de notificações do banco no iOS 27

Quando o app do seu banco envia uma notificação de pagamento, o Qalta pode salvá-la como despesa. O valor e o estabelecimento são extraídos do texto da notificação.

Você precisa do iOS 27, dos apps **Qalta** e **Atalhos** e de um app de banco que mostre notificações na tela bloqueada. Este gatilho não está disponível no iOS 26.

1.  Abra o app **Atalhos** e toque no botão **+** na parte de baixo para criar um novo atalho.

    ![Todos os Atalhos com o botão de mais](https://qalta.app/assets/push-notification-ios-27/en/01-shortcuts.png)
    *Novo atalho*

2.  Um editor vazio se abre. Na busca de ações, toque no chip **Automação** — ou digite “Automação”.

    ![Editor de atalho vazio com o chip Automação](https://qalta.app/assets/push-notification-ios-27/en/02-new-shortcut.png)
    *Chip Automação*

3.  Em **Apps**, toque em **Notification** — “When I receive a notification from …”.

    ![Gatilho de notificação na lista de Automação](https://qalta.app/assets/push-notification-ios-27/en/03-notification-trigger.png)
    *Gatilho de notificação*

4.  O primeiro bloco diz **When I receive a notification from App**. Toque no chip azul **App** para escolher seu banco.

    ![When I receive a notification from App](https://qalta.app/assets/push-notification-ios-27/en/04-from-app.png)
    *Escolha o app*

5.  Busque seu banco e toque no app que envia os alertas de pagamento (por exemplo, **Kaspi.kz**, e não um app relacionado de Pay ou QR).

    ![Seletor de apps buscando o banco](https://qalta.app/assets/push-notification-ios-27/en/05-pick-bank.png)
    *App do banco*

6.  Agora você deve ver **When I receive a notification from \[banco\]**. No campo de busca na parte de baixo, digite **Qalta**.

    ![Gatilho de notificação para o app do banco selecionado](https://qalta.app/assets/push-notification-ios-27/en/06-bank-selected.png)
    *Gatilho do banco definido*

7.  Toque em **Registrar despesa bancária** (não em “Criar despesa do Wallet” nem em “Criar transação”).

    ![Buscando Registrar despesa bancária](https://qalta.app/assets/push-notification-ios-27/en/07-search-qalta.png)
    *Ação do Qalta*

8.  Você deve ver dois blocos: o gatilho de notificação e **Registrar despesa bancária de Corpo da notificação**. Toque no campo cinza **Corpo da notificação**.

    ![Registrar despesa bancária com o campo Corpo da notificação](https://qalta.app/assets/push-notification-ios-27/en/08-tap-body.png)
    *Toque em Corpo da notificação*

9.  Aparece um teclado. Acima dele, toque em **Selecionar Variável** e depois no chip azul **Notification** abaixo do gatilho.

    ![Selecionar Variável com o chip Notification](https://qalta.app/assets/push-notification-ios-27/en/09-select-variable.png)
    *Selecionar Variável → Notification*

10.  Toque no chip azul **Notification** que agora está dentro da ação do Qalta. Na folha que se abre, não deixe a marca em “Notification” — toque em **Body**. O Qalta lê o valor do texto da notificação, não do objeto de notificação inteiro.

     ![Propriedades da notificação: toque em Body](https://qalta.app/assets/push-notification-ios-27/en/10-pick-body.png)
     *Obter → Body*

11.  A ação do Qalta agora deve dizer **Registrar despesa bancária de Body**.

     ![Body vinculado em Registrar despesa bancária](https://qalta.app/assets/push-notification-ios-27/en/11-body-mapped.png)
     *Body vinculado*

12.  Os demais campos são opcionais. Toque na seta para expandi-los. Opções para **Categoria** e **Conta**:

     -   **Escolher** — escolha uma categoria ou conta específica do Qalta. Se você tem só uma conta, faça isso: selecione-a uma vez. Não é preciso usar Perguntar Sempre.
     -   **Perguntar Sempre** — depois de cada notificação, o Qalta pergunta onde salvar a despesa. Útil se você tem várias categorias ou contas.
     -   Você pode deixar **Escolher** vazio — o Qalta usa os padrões e tenta detectar a categoria.

     **Nota** e **Data** podem ficar vazios. Ative **Mostrar ao Executar** para que uma confirmação apareça. Toque na seta de voltar.

     ![Categoria, Conta e Mostrar ao Executar](https://qalta.app/assets/push-notification-ios-27/en/12-category-account.png)
     *Categoria, conta e confirmação*

13.  O atalho aparece em **Todos os Atalhos** como **Registrar despesa bancária**. Depois da próxima notificação de pagamento desse app do banco, o Qalta vai oferecer salvar a despesa.

     ![Registrar despesa bancária em Todos os Atalhos](https://qalta.app/assets/push-notification-ios-27/en/13-all-shortcuts.png)
     *Tudo pronto*

## Vídeo completo

Prefere acompanhar por uma gravação de tela?

*Passo a passo da configuração no iOS 27.*

[Todos os tutoriais](https://qalta.app/pt/tutorials/)
