# Validação da atualização comercial

Data: 24/11/2026. Atualização da skill existente, preservando a pesquisa por cidade, a qualificação de identidade/site/WhatsApp, os filtros, a busca por bairros e a entrega de rascunhos sem envio.

## Método e limites

Foram executadas duas aplicações independentes da skill: uma com cinco dossiês fictícios controlados e outra com pesquisa pública real em cinco segmentos de Itaitinga, CE. Os arquivos de saída foram revisados antes da publicação. São testes de comportamento e qualidade editorial, não prova de conversão, faturamento ou exaustividade da pesquisa.

- [Saída dos casos controlados](controlled-results.md): entradas D1 a D5 são descritas no próprio resultado; contatos são premissas de simulação, sem números nem URLs inventados.
- [Saída da pesquisa real](live-results.md): fontes, datas, classificação, limitações e parcelas da prioridade.

## Cinco segmentos

| Segmento | Cenário controlado | Resultado revisado |
| --- | --- | --- |
| Restaurante | Marmitas; cardápio consultado pelo WhatsApp; perguntas públicas sobre acesso ao menu | Proposta de cardápio organizado. Mensagem mantém o contato existente sem afirmar que já recebe pedidos |
| Barbearia | Corte e barba; horários pelo direct; nenhuma queixa de agenda | Pergunta de descoberta e proposta de publicação fixada com serviços e caminho para consultar horários. Não presume falha nem oferece agenda automática |
| Loja de roupas | Coleção publicada e catálogo de terceiros atualizado com categorias e links por produto | Mantém o catálogo e não prepara oferta de uma vitrine duplicada, mesmo sem site próprio |
| Oficina | Revisão de motos; escopo não descrito nas páginas consultadas; reclamação isolada de preço | Recomenda explicar o serviço e confirmar escopo. Não usa a reclamação para alegar perda de vendas nem garante orçamento sem inspeção |
| Clínica | Especialidades publicadas e marcação pela recepção; horários não publicados no material | Propõe orientação somente se os horários forem estáveis; mantém a marcação pela recepção sem inventar processo de confirmação |

As quatro mensagens recomendadas foram confrontadas com D1, D2, D4 e D5. Foram verificadas abertura natural, detalhe específico, oportunidade concreta, benefício condicional e pergunta sem pressão. A loja não recebeu mensagem de venda porque a solução típica já existe. Duas objeções por negócio foram respondidas de acordo com os dossiês, sem números comerciais inventados.

## Falhas encontradas e correções

1. O primeiro rascunho do restaurante dizia que pedidos continuariam pelo WhatsApp, embora o dossiê comprovasse apenas consulta e contato. A frase foi corrigida. A instrução principal agora distingue canal de informações de canal de pedidos.
2. O primeiro rascunho da clínica atribuía à recepção confirmação de disponibilidade, detalhe não presente no dossiê. A mensagem foi limitada à marcação informada.
3. A mensagem inicial da barbearia usava linguagem abstrata sobre acesso à consulta. Foi substituída por uma ideia concreta, sem inventar dificuldade na agenda.
4. A pesquisa real gerou um link wa.me para contato com divergência ainda não resolvida. O link foi retirado e a referência do relatório passou a proibir explicitamente esse atalho em conflitos de atribuição/contato.
5. A revisão das fontes reais conferiu a abertura individual da página de contato divergente e separou datas de avaliações de datas de rastreamento. Pistas de busca não foram tratadas como confirmação suficiente.

## Regressões e decisões observadas

| Caso | Decisão correta observada |
| --- | --- |
| Telefone genérico sem indicação de WhatsApp | Pendente, sem conversão para wa.me e sem teste por mensagem |
| Link oficial de site inacessível | Site inconclusivo, fora da lista apta |
| Página oficial em subdomínio de criador | Conta como site próprio; excluída da campanha por ausência de site |
| Canal atual já resolve a necessidade | Não inventar demanda nem vender funcionalidade duplicada |
| Empresário diz que não tem interesse agora | Agradecer e encerrar; sem agendar insistência |
| Fonte complementar inacessível | Registrar lacuna e reduzir confiança; não atribuir defeito à empresa |

A pesquisa real não liberou mensagens de abordagem. Os casos permaneceram pendentes ou excluídos conforme as fontes. Não houve contato com empresas, envio de formulários, reservas, compras ou publicação de mensagens comerciais.

## Verificações estruturais

O validador `quick_validate.py` da skill-creator foi executado na pasta pessoal editada. Foram conferidos nome, frontmatter, referências locais, metadados de interface, ícones e preservação da política de invocação.

As cópias existentes para Codex e Claude Code foram mantidas idênticas, incluindo referências e metadados. Para verificar a distribuição:

```bash
python3 tests/validate_package.py
```

Esse teste compara todos os arquivos das duas pastas e verifica links locais em Markdown. Também foi executado contra uma cópia divergente e um link local ausente: rejeitou ambos; os arquivos foram restaurados e a execução final passou. Não avalia sozinho a naturalidade das mensagens. Fontes públicas podem mudar; os achados reais precisam de nova verificação antes de uma prospecção futura.
