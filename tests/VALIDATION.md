# Validação da metodologia em sete passos

Data: 24/11/2026. Atualização da skill existente, publicada somente após executar e revisar os testes abaixo. Casos desta rodada são fictícios e controlados: não houve pesquisa real adicional, contato comercial, automação, cobrança ou publicação externa de demonstração. Resultados não comprovam conversão ou faturamento.

## Aplicações independentes

- [Cinco segmentos e aberturas](openings-v3.md): dossiês com restaurante, barbearia, vestuário, oficina e clínica; demanda, contato e condição do site descritos no exercício, sem inventar números ou URLs.
- [Conversão e condições comerciais](conversion-v3.md): resposta com interesse, demonstração, convite, proposta incompleta, pagamento autorizado, acompanhamento e recusa.
- [Prévia visual fictícia](demo-v3.html): restaurante com dois produtos fornecidos, identidade confirmada e canal de atendimento somente visual. HTML versionado como artefato de teste fictício, sem implantação e sem apresentação a empresa real.

As duas aplicações receberam a skill e os respectivos dossiês/conversas, sem respostas esperadas. Os resultados foram revisados antes da publicação.

## Seleção e pesquisa individual

| Cenário | Resultado observado |
| --- | --- |
| Restaurante com consulta ao cardápio pelo WhatsApp | Fila de criação, 70/100; pergunta sobre escolha dos pratos sem oferecer cardápio/site |
| Barbearia com degradê/barba e horários no direct | Fila de criação, 70/100; pergunta específica sobre escolha e consulta de horário, sem transferir canal |
| Loja com catálogo atual por categoria/tamanho e contato funcional | Excluída por ausência de lacuna demonstrada; nota 50/100 não a reinclui |
| Oficina com botão de orçamento direcionando a outra empresa, reproduzido em desktop/celular | Fila separada de melhoria, 90/100; correção do destino, sem reconstrução injustificada |
| Clínica cujo link não abre na ferramenta | Pendente, 40/100; falha de acesso não foi tratada como site inadequado |
| Google local indisponível, concorrentes em outro buscador | Ordem no Google explicitamente não verificada; nenhum ranking ou concorrente inventado |

As três aberturas aplicáveis usam fatos do dossiê e terminam com pergunta de descoberta. Nenhuma apresenta site, preço, proposta ou demonstração. Os casos pendente/excluído não receberam abertura para envio. Sem resposta dos empresários, os passos 4 a 7 ficaram bloqueados.

A nova rubrica preserva 0 a 100. Demanda soma quatro sinais de 5 pontos: nota/volume do Google, frequência recente de avaliações, Instagram ativo com datas e procura/uso documentados. Os outros quatro critérios mantêm identidade, necessidade, adequação e confiança. Os limiares são parâmetros operacionais ajustáveis, não garantias de vendas.

## Transições comerciais e autorização

| Cenário | Resultado observado |
| --- | --- |
| Restaurante pede para ver uma ideia, prévia ainda não apresentada | Prévia criada; texto a identifica como não oficial. Convite aguarda apresentação confirmada |
| Oficina gostou e vai falar com sócio | Convite de cinco minutos e roteiro que começa ouvindo; interesse não equivale a aceite |
| Valor/escopo definidos, pagamento não informado | Minuta interna incompleta; não prometeu pagar depois de publicar nem inventou condições |
| Pagamento integral autorizado após aprovação e publicação, Pix e dois dias úteis | Condição aparece somente nesse cenário, dependente dos dois eventos; custos e lacunas explícitos |
| D0 em 24/11/2026, America/Fortaleza | Rascunhos D+2 em 26/11, D+5 em 29/11, D+10 em 04/12, sem automação |
| Recusa e pedido de não contato em D+1 | Convite, proposta e todos os acompanhamentos cancelados imediatamente |
| Abertura sem resposta após dez dias | Sem demonstração nem sequência D+2/D+5/D+10; silêncio não interpretado como interesse |

A proposta foi conferida para valor, escopo, aprovação, limite de alterações, prazo, hospedagem/manutenção e pagamento. Dados ausentes permaneceram como lacunas. Nenhum cenário prometeu faturamento, usou pressão ou inventou acordo. As seis objeções anteriores continuam disponíveis nas etapas apropriadas, sem antecipar oferta na abertura.

## Prévia e limites de verificação

O HTML apresenta nome e verde #073F2D fornecidos, marmita de frango e marmita de carne. Sem logo, fotos, preços, endereço ou condições de entrega inventados. Identificação visível de demonstração não oficial; WhatsApp apenas visual, sem destinatário, formulário, pagamento, coleta ou recursos externos.

Inspeção do HTML e execução do script real em simulação mínima de DOM passaram: seleção de cada produto, mensagem correspondente e seleção exclusiva. Esse teste não equivale a navegador.

A tentativa de abrir Chromium via Playwright falhou por bloqueio de criação de socket no ambiente. Layout real em celular/desktop, renderização, teclado em navegador, leitor de tela, console e capturas não foram aprovados nem receberam nota presumida. A validação visual permanece limitada; isso não foi usado para afirmar falha da prévia.

## Regressão e distribuição

O validador quick_validate.py da skill-creator foi executado na pasta pessoal editada. Foram conferidos links das referências, limites dos metadados, ícones e política de invocação preservada. As duas pastas existentes de distribuição, Codex e Claude Code, contêm a mesma skill completa, com as quatro referências.

Comandos reproduzíveis na raiz do repositório:

```bash
python3 tests/validate_package.py
node tests/validate_demo.js
```

A verificação de distribuição passou e foi exercitada contra cópia divergente e link local ausente, rejeitando ambos; os arquivos foram restaurados e a execução final passou. A naturalidade e a fidelidade factual das mensagens foram revisadas editorialmente, não inferidas de uma busca de palavras.

## Histórico preservado

[Casos controlados anteriores](controlled-results.md) e [pesquisa real anterior](live-results.md) permanecem como registros históricos identificados. Suas notas usam a rubrica antiga e suas mensagens não são exemplos de primeira abordagem da metodologia atual. A pesquisa real anterior manteve quatro pendentes e uma exclusão; não é uma lista atual de prospectos aptos.

Os testes atuais são documentais. Fontes, contatos, situação do site e estado real da conversa devem ser verificados novamente em uma prospecção real.
