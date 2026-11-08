---
title: "Automação do Apple Pay no iOS 27 — Qalta"
description: "Configure um atalho para que cada compra com Apple Pay seja salva no Qalta como despesa, com o valor e o estabelecimento vindos do Wallet. Para iOS 27."
url: https://qalta.app/pt/tutorials/apple-pay-ios-27
---

# Automação do Apple Pay no iOS 27

Depois de um pagamento com Apple Pay, o Qalta pode salvar a compra como despesa. O valor e o estabelecimento vêm da transação do Wallet; você pode escolher a categoria e a conta a cada vez ou defini-las com antecedência.

Você precisa do iOS 27, dos apps **Qalta** e **Atalhos** e de cartões no Wallet. No iOS 27, o gatilho do Wallet fica dentro de um novo atalho — não existe uma aba Automação separada.

1.  Abra o app **Atalhos** e toque no botão **+** na parte de baixo para criar um novo atalho.

    ![Todos os Atalhos com o botão de mais](https://qalta.app/assets/apple-pay-ios-27/en/01-shortcuts.png)
    *Novo atalho*

2.  Um editor vazio se abre. Na busca de ações, toque no chip **Automação** — ou digite “Automação”.

    ![Editor de atalho vazio com o chip Automação](https://qalta.app/assets/apple-pay-ios-27/en/02-new-shortcut.png)
    *Chip Automação*

3.  Em **Apps**, toque em **Wallet** — “When I tap a Wallet Card or Pass” (pagamento na maquininha).

    ![Gatilho do Wallet na lista de Automação](https://qalta.app/assets/apple-pay-ios-27/en/03-wallet-trigger.png)
    *Gatilho do Wallet*

4.  O primeiro bloco diz **When Any Card is tapped**. Se você quiser que o Qalta rode só para alguns cartões, toque no chip azul **Any Card**.

    ![Gatilho When Any Card is tapped](https://qalta.app/assets/apple-pay-ios-27/en/04-any-card.png)
    *Any Card*

5.  Selecione o cartão com que você paga (por exemplo, **Kaspi Gold**). Toque na marca de seleção.

    ![Selecionando um cartão de pagamento](https://qalta.app/assets/apple-pay-ios-27/en/05-select-card.png)
    *Qual cartão acompanhar*

6.  Agora você deve ver um bloco: **When \[seu cartão\] is tapped**. No campo de busca na parte de baixo, digite **Qalta**.

    ![Gatilho do Wallet para o cartão selecionado](https://qalta.app/assets/apple-pay-ios-27/en/06-card-tapped.png)
    *Gatilho do cartão definido*

7.  Toque em **Criar despesa do Wallet** (não em “Criar transação”).

    ![Buscando Criar despesa do Wallet](https://qalta.app/assets/apple-pay-ios-27/en/07-search-qalta.png)
    *Ação do Qalta*

8.  Você deve ver dois blocos: o gatilho do Wallet e a ação do Qalta. Toque no campo cinza **Valor** — aparece um teclado numérico. Acima dele, toque em **Selecionar Variável**.

    ![Campo Valor e Selecionar Variável](https://qalta.app/assets/apple-pay-ios-27/en/08-tap-amount.png)
    *Toque em Valor e depois em Selecionar Variável*

9.  Na tela Selecionar Variável, toque no chip azul **Transação** abaixo do gatilho do Wallet. Esse é o pagamento com Apple Pay, não a Entrada do Atalho.

    ![Selecionando Transação do gatilho do Wallet](https://qalta.app/assets/apple-pay-ios-27/en/09-select-transaction.png)
    *Transação*

10.  Toque no chip azul **Transação** que agora está dentro da ação do Qalta. Na folha que se abre, não deixe a marca em “Transação” — toque em **Valor**.

     ![Propriedades da transação: toque em Valor](https://qalta.app/assets/apple-pay-ios-27/en/10-pick-amount.png)
     *Obter → Valor*

11.  Repita para o nome da loja. Toque na seta da ação do Qalta para expandir os campos. Toque em **Estabelecimento** → **Selecionar Variável** → **Transação**. Toque no chip de novo e escolha **Merchant** na lista — não “Transação”.

     ![Escolhendo Merchant na transação](https://qalta.app/assets/apple-pay-ios-27/en/11-merchant.png)
     *Obter → Merchant*

12.  Os demais campos são opcionais. Opções para **Categoria** e **Conta**:

     -   **Escolher** — escolha uma categoria ou conta específica do Qalta. Se você tem só uma conta, faça isso: selecione-a uma vez. Não é preciso usar Perguntar Sempre.
     -   **Perguntar Sempre** — depois de cada pagamento, o Qalta pergunta onde salvar a despesa. Útil se você tem várias categorias ou contas.
     -   Você pode deixar **Escolher** vazio — o Qalta usa os padrões e tenta detectar a categoria.

     **Moeda**, **Nota** e **Data** podem ficar vazios. Ative **Mostrar ao Executar** para que uma confirmação apareça após o pagamento. Toque na seta de voltar.

     ![Categoria, Conta e Mostrar ao Executar](https://qalta.app/assets/apple-pay-ios-27/en/12-category-account.png)
     *Categoria, conta e confirmação*

13.  O atalho aparece em **Todos os Atalhos** como **Criar despesa do Wallet**. Depois da sua próxima compra com Apple Pay usando o cartão selecionado, o Qalta vai oferecer salvar a despesa.

     ![Criar despesa do Wallet em Todos os Atalhos](https://qalta.app/assets/apple-pay-ios-27/en/13-all-shortcuts.png)
     *Tudo pronto*

## Vídeo completo

Prefere acompanhar por uma gravação de tela?

*Passo a passo da configuração no iOS 27.*

[Todos os tutoriais](https://qalta.app/pt/tutorials/)
