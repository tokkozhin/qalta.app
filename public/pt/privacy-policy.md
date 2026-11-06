---
title: "Política de Privacidade — Qalta"
description: "Como o Qalta trata seus dados. Os espaços privados ficam no seu iPhone, com backup opcional no iCloud; os espaços compartilhados são sincronizados apenas com as pessoas que você convida; voz e digitalizações são enviadas ao nosso servidor e à OpenAI apenas para serem lidas."
url: https://qalta.app/pt/privacy-policy
---

# Política de Privacidade

Data de vigência: 16 de outubro de 2026

Esta tradução é fornecida apenas por conveniência. Se houver divergência em relação à [versão em inglês](https://qalta.app/privacy-policy), prevalece a versão em inglês.

Esta política se aplica ao aplicativo móvel Qalta (“o app”), fornecido por Daniel Tokkozhin (“nós”). Ela explica o que fica no seu dispositivo, o que sai dele e quais empresas processam esses dados.

## Os espaços privados ficam no seu dispositivo

Seus registros são mantidos em espaços. Um espaço privado, com suas contas, transações, categorias, orçamentos, metas, dívidas, itens recorrentes e dados semelhantes, é armazenado apenas no seu dispositivo (SQLite). Não enviamos espaços privados para os nossos servidores.

Se você usar o recurso opcional de backup, as cópias podem ser armazenadas na sua conta do iCloud. Esse armazenamento é fornecido pela Apple e está sujeito à política de privacidade da Apple.

## Espaços compartilhados

O compartilhamento é opcional. Se você compartilhar um espaço, esse espaço e tudo o que ele contém (seu nome, contas, transações, transferências, categorias, orçamentos, metas, dívidas, itens recorrentes e as notas que você adicionar) são enviados ao nosso provedor de backend, a Supabase, e mantidos sincronizados com seus outros dispositivos e com as pessoas que você convidar. Apenas os membros do espaço podem acessá-lo. Cada registro mostra qual membro o criou e quem o editou por último.

Os membros de um espaço compartilhado podem ver o nome, o endereço de e-mail e a foto de perfil uns dos outros, provenientes da conta de login, e quando cada membro entrou. Os convites são links de uso único que expiram após 7 dias. Armazenamos apenas uma forma criptografada por hash do código do convite, e os convites expirados são excluídos automaticamente.

Quando o proprietário para de compartilhar ou exclui um espaço compartilhado, os dados dele são excluídos dos nossos servidores e todos os membros perdem o acesso; uma cópia permanece no dispositivo de cada membro até que ele a remova. Quando um membro sai ou é removido, ele perde o acesso aos dados nos nossos servidores. Se a sua assinatura terminar, a sincronização é pausada, e os dados já enviados permanecem nos nossos servidores até que o espaço seja excluído.

## Conta

Você entra com o recurso Iniciar sessão com a Apple ou Fazer login com o Google. Recebemos um token de identidade da Apple ou do Google e criamos uma conta no nosso provedor de backend, a Supabase. Essa conta pode incluir um ID de usuário, um endereço de e-mail (incluindo o endereço de retransmissão do Ocultar Meu E-mail da Apple), o seu nome e, no caso do Google, a sua foto de perfil. Você pode alterar no app o nome exibido aos outros membros.

Você pode excluir sua conta no app. Isso remove a conta e os registros de assinatura que armazenamos. Se você for proprietário de espaços compartilhados com outros membros, precisa primeiro excluir esses espaços ou remover os membros deles. Os dados dos espaços privados no dispositivo são separados; você também pode apagar os dados financeiros locais nos Ajustes.

## Assinaturas e compras

As compras são processadas pela Apple. Usamos a RevenueCat para ler o status da assinatura. Armazenamos na Supabase, vinculados ao seu ID de usuário, um indicador de assinatura premium e contadores de uso de IA (quantas solicitações de voz, imagem e documento você já usou). Não recebemos nem armazenamos números de cartão de pagamento.

## Voz, digitalização, documentos e outros recursos de IA

Quando você usa a entrada por voz, a digitalização de recibos ou documentos ou outra extração por IA, o app envia o conteúdo que você forneceu ao nosso backend (Supabase Edge Functions). O backend encaminha esse conteúdo à OpenAI para que o app possa sugerir transações.

Dependendo do recurso, esse conteúdo pode incluir:

-   áudio de voz;
-   fotos de recibos, contas, extratos ou documentos semelhantes;
-   texto extraído de documentos;
-   texto que você digitou;
-   nomes de contas e categorias do dispositivo, além dos valores e da moeda relacionados, para que o modelo possa associá-los.

Esse conteúdo é enviado apenas para fornecer o recurso que você solicitou. Não armazenamos o conteúdo enviado no nosso banco de dados. O backend usa a solicitação para retornar lançamentos estruturados e para contabilizar o uso em relação aos seus limites.

A OpenAI processa a solicitação de acordo com os termos da sua API. A OpenAI declara que, por padrão, as entradas da API não são usadas para treinar seus modelos. A OpenAI pode reter dados por um período limitado para operar a API e monitorar abusos. Consulte as políticas da OpenAI indicadas abaixo.

Os recursos de IA são opcionais. Você pode adicionar transações manualmente sem enviar esse conteúdo.

## Análises, falhas e outros dados de rede

-   **Taxas de câmbio.** O app baixa dos nossos servidores tabelas públicas de cotações de moedas. Isso não envolve seus registros.
-   **Análises de produto (PostHog).** Registramos eventos como quais recursos você usa, contagens aproximadas de uso (por exemplo, o número de transações, não os valores) e o idioma do app. Os eventos são associados ao seu ID de usuário. Não enviamos à PostHog valores de transações, notas, fotos nem áudio.
-   **Relatórios de falhas (Sentry).** Enviamos diagnósticos de falhas para ajudar a corrigir erros. Não anexamos capturas de tela nem informações pessoais adicionais a esses relatórios.
-   **Dados técnicos.** Quando o app se comunica com um servidor ou SDK, essa parte normalmente recebe informações técnicas, como endereço IP, tipo de dispositivo e versão do sistema operacional.

## O que não fazemos

-   Não vendemos seus dados.
-   Não usamos seus dados para redes de publicidade nem para rastrear você em apps e sites de outras empresas.
-   Não coletamos localização GPS precisa. O app usa as configurações de idioma e região do dispositivo, não o GPS.

## Processadores terceirizados

Estas empresas processam dados conforme descrito acima. Cada uma tem sua própria política de privacidade:

-   [Apple](https://www.apple.com/legal/privacy/) — Iniciar sessão com a Apple, App Store, compras dentro do app, backup opcional no iCloud
-   [Google](https://policies.google.com/privacy) — Fazer login com o Google
-   [Supabase](https://supabase.com/privacy) — conta, registros de assinatura e uso, espaços compartilhados, funções de backend
-   [OpenAI](https://openai.com/policies/privacy-policy/) — processamento por IA do conteúdo que você envia ([privacidade da API / empresarial](https://openai.com/enterprise-privacy/))
-   [RevenueCat](https://www.revenuecat.com/privacy) — status da assinatura
-   [PostHog](https://posthog.com/privacy) — análises de produto
-   [Sentry](https://sentry.io/privacy/) — relatórios de falhas
-   [Expo](https://expo.dev/privacy) — ambiente de execução do app

Também podemos divulgar informações se exigido por lei ou se acreditarmos, de boa-fé, que a divulgação é necessária para proteger direitos ou a segurança, ou para investigar fraudes.

## Retenção e exclusão

-   Os dados dos espaços privados permanecem no seu dispositivo até que você os exclua ou desinstale o app (a menos que você também mantenha um backup no iCloud).
-   Os dados dos espaços compartilhados são mantidos nos nossos servidores enquanto o espaço estiver compartilhado e são excluídos quando o proprietário para de compartilhá-lo ou o exclui.
-   Os registros de conta e de uso são mantidos enquanto você tiver uma conta e são excluídos quando você exclui a conta, além de um curto período necessário para concluir a exclusão.
-   Os conteúdos das solicitações de IA são processados para atender à solicitação. Não os armazenamos como seus registros. Os processadores podem retê-los de acordo com suas próprias políticas.
-   Os dados de análise e de falhas são mantidos pelo tempo necessário para operar e melhorar o app.

Para excluir os dados da conta, use Excluir conta no app ou envie um e-mail para [help.qalta.app@outlook.com](mailto:help.qalta.app@outlook.com).

## Alterações

Podemos atualizar esta política. A data de vigência acima será alterada. O uso continuado após uma atualização significa que você aceita a política revisada.

## Contato

Daniel Tokkozhin
[help.qalta.app@outlook.com](mailto:help.qalta.app@outlook.com)
