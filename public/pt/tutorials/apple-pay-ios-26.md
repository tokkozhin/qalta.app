---
title: "Automação do Apple Pay no iOS 26 — Qalta"
description: "Configure uma automação no app Atalhos para que cada compra com Apple Pay seja salva no Qalta como despesa, com o valor e o estabelecimento preenchidos. Para iOS 26."
url: https://qalta.app/pt/tutorials/apple-pay-ios-26
---

# Automação do Apple Pay no iOS 26

Depois de um pagamento com Apple Pay, o Qalta pode salvar a compra como despesa. O valor e o estabelecimento vêm da transação; você pode escolher a categoria e a conta a cada vez ou defini-las com antecedência.

Você precisa do iOS 26, dos apps **Qalta** e **Atalhos** e de cartões no Wallet.

1.  Abra **Ajustes → Wallet e Apple Pay**. Ative **Atividades ao Vivo** e **Dados Celulares**.

    ![Permissões de Wallet e Apple Pay](https://qalta.app/assets/apple-pay-ios-26/en/01-wallet-settings.png)
    *Permissões do Wallet*

2.  Abra o app **Atalhos**, vá até a aba **Automação** e toque em **Nova Automação**.

    ![Aba Automação do app Atalhos](https://qalta.app/assets/apple-pay-ios-26/en/02-automation-tab.png)
    *Nova automação*

3.  Escolha **Wallet** — “When I tap a Wallet Card or Pass” (pagamento na maquininha).

    ![Gatilho do Wallet na lista de automações](https://qalta.app/assets/apple-pay-ios-26/en/03-wallet-trigger.png)
    *Gatilho do Wallet*

4.  Selecione os cartões que o Qalta deve acompanhar. Toque em **Seguinte**.

    ![Selecionando cartões de pagamento](https://qalta.app/assets/apple-pay-ios-26/en/04-select-cards.png)
    *Quais cartões acompanhar*

5.  Mantenha as categorias do Wallet que interessam a você (pode deixar todas). Selecione **Executar Imediatamente** (não Executar Após Confirmação). Toque em **Seguinte**.

    ![Categorias do Wallet](https://qalta.app/assets/apple-pay-ios-26/en/05-categories.png)
    *Categorias*

6.  Na tela de blocos, toque no cartão cinza **Criar Novo Atalho** no canto superior esquerdo. Não escolha um atalho existente da lista abaixo.

    ![Bloco Criar Novo Atalho](https://qalta.app/assets/apple-pay-ios-26/en/06-create-shortcut.png)
    *Novo atalho*

7.  Um editor vazio se abre. Na busca de ações na parte de baixo, digite **Qalta** e toque em **Criar despesa do Wallet** (não em “Criar transação”).

    ![Buscando Criar despesa do Wallet](https://qalta.app/assets/apple-pay-ios-26/en/07-search-qalta.png)
    *Ação do Qalta*

8.  Você deve ver dois blocos: “Receive transaction as input” e a ação do Qalta. Toque no campo cinza **Valor** na ação do Qalta — aparece um teclado numérico. Acima dele, toque em **Selecionar Variável**.

    ![Campo Valor e Selecionar Variável](https://qalta.app/assets/apple-pay-ios-26/en/08-tap-amount.png)
    *Toque em Valor e depois em Selecionar Variável*

9.  Na tela Selecionar Variável, toque no chip azul **Entrada do Atalho** abaixo de “Receive transaction as input”.

    ![Selecionando Entrada do Atalho como variável](https://qalta.app/assets/apple-pay-ios-26/en/09-select-variable.png)
    *Entrada do Atalho*

10.  Toque no chip azul **Entrada do Atalho** que agora está dentro da ação do Qalta. Na folha que se abre, Tipo deve ser **Transação**. Não deixe a marca em “Transação” — role a lista e toque em **Valor**.

     ![Propriedades da transação: toque em Valor](https://qalta.app/assets/apple-pay-ios-26/en/10-pick-amount.png)
     *Tipo Transação → Valor*

11.  Repita para o nome da loja. Toque na seta da ação do Qalta para expandir os campos. Toque em **Estabelecimento** → **Selecionar Variável** → **Entrada do Atalho**. Toque no chip de novo, Tipo **Transação**, e escolha **Merchant** na lista.

     ![Escolhendo Merchant na transação](https://qalta.app/assets/apple-pay-ios-26/en/11-merchant.png)
     *Tipo Transação → Merchant*

12.  Os demais campos são opcionais. Opções para **Categoria** e **Conta**:

     -   **Escolher** — escolha uma categoria ou conta específica do Qalta. Se você tem só uma conta, faça isso: selecione-a uma vez. Não é preciso usar Perguntar Sempre.
     -   **Perguntar Sempre** — depois de cada pagamento, o Qalta pergunta onde salvar a despesa. Útil se você tem várias categorias ou contas.
     -   Você pode deixar **Escolher** vazio — o Qalta usa os padrões e tenta detectar a categoria.

     **Moeda**, **Nota** e **Data** podem ficar vazios. Ative **Mostrar ao Executar** para que uma confirmação apareça após o pagamento. Toque na marca de seleção azul no topo.

     ![Categoria, Conta e Mostrar ao Executar](https://qalta.app/assets/apple-pay-ios-26/en/12-category-account.png)
     *Categoria, conta e confirmação*

13.  A automação aparece em **Automação**. Depois da sua próxima compra com Apple Pay usando o cartão selecionado, o Qalta vai oferecer salvar a despesa.

     ![Automação concluída na lista](https://qalta.app/assets/apple-pay-ios-26/en/13-automation-list.png)
     *Tudo pronto*

## Vídeo completo

Prefere acompanhar por uma gravação de tela?

*Passo a passo da configuração no iOS 26.*

[Todos os tutoriais](https://qalta.app/pt/tutorials/)
