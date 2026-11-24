# Prospectar empresas locais

Skill para Codex e Claude Code pesquisar empresas brasileiras com sinais de demanda e oportunidades digitais, verificar contatos públicos e preparar uma conversa comercial em sete passos. Atende criação de sites e melhoria de sites com inadequações demonstráveis, em filas separadas.

O ponto de partida é o negócio: entender como o cliente encontra produtos, pede informações, agenda ou solicita orçamento. A falta de site não prova perda de vendas. A recomendação pode ser uma página simples, uma vitrine, um cardápio ou apenas melhorar um canal que a empresa já usa.

## Instalação e uso

Clone ou baixe este repositório e abra sua pasta no Codex ou Claude Code. As pastas de projeto das duas ferramentas contêm a mesma skill, com suas referências. Para usar em outro projeto, copie a pasta inteira correspondente, incluindo `references/` e `agents/`.

| Ferramenta | Pasta | Exemplo |
| --- | --- | --- |
| Codex | `.agents/skills/prospectar-empresas-locais/` | `Use $prospectar-empresas-locais. cidade: Itaitinga - CE` |
| Claude Code | `.claude/skills/prospectar-empresas-locais/` | `/prospectar-empresas-locais cidade: Itaitinga - CE` |

Informe somente a cidade ou acrescente bairro, segmento e limite:

```text
Use $prospectar-empresas-locais.
cidade: Itaitinga - CE
segmentos: restaurantes e lojas de roupas
limite: 5 empresas
```

Use o filtro opcional `somente-sem-site` para restringir à pesquisa original de empresas sem site próprio localizado.

## Os sete passos

| Passo | Trabalho | Condição para avançar |
| --- | --- | --- |
| 1. Selecionar empresas com clientes | Priorizar nota alta no Google, avaliações recentes/frequentes, Instagram ativo e indícios de demanda | Identidade, contato e oportunidade verificados |
| 2. Pesquisar a dor | Buscar serviço, segmento e bairro; comparar apresentação, sites e jornada dos concorrentes | Detalhe específico sustentado por fontes |
| 3. Iniciar com pergunta | Abertura natural sobre descoberta, escolha ou atendimento | Resposta real e interesse, sem presumir pelo silêncio |
| 4. Apresentar prévia | Demonstração não oficial com identidade, oferta real, informações verificadas e canais de atendimento | Interesse registrado e demonstração apresentada |
| 5. Convidar para ligação | Conversa de cinco minutos: ouvir, confirmar necessidade, mostrar solução, investimento e próximo passo | Condições comerciais e escopo definidos |
| 6. Reduzir risco | Formalizar escopo, aprovação, alterações, prazo, custos e pagamento | Pagamento após aprovação e publicação somente se autorizado pelo vendedor |
| 7. Acompanhar | Rascunhos personalizados em D+2, D+5 e D+10 após apresentação confirmada | Interesse anterior e ausência de recusa; parar no fechamento ou recusa |

A primeira mensagem não oferece site, desenvolvimento, preço, proposta ou demonstração. Os passos posteriores ficam bloqueados até suas condições ocorrerem. Interesse não autoriza envio automático ou publicação.

A prévia usa `design-profissional`, quando disponível, sem tornar essa skill obrigatória para pesquisar empresas. Não usa informações inventadas, pagamentos reais ou coleta de dados. É identificada como demonstração não oficial e permanece local/privada até autorização de publicação.

## O que a pesquisa entrega

Para cada empresa apta: nome, segmento, contato comercial público, presença digital, evidências com fontes e datas, possível dor, oportunidade comercial, solução recomendada, pergunta inicial, possíveis objeções com respostas e prioridade de 0 a 100 com composição e justificativa. Inclui sinais de demanda, fila de criação/melhoria, etapa atual, autorizações e próxima ação.

O diagnóstico examina segmento, presença digital, avaliações públicas, concorrentes locais, atendimento, acesso aos produtos/serviços e jornada de compra. Fatos, hipóteses e informações não verificadas aparecem separados. Os canais observados não são tratados automaticamente como a principal origem de vendas.

A abordagem começa por um detalhe verificado e uma pergunta específica. A solução fica no diagnóstico interno até haver resposta e interesse. Há exemplos para restaurantes, barbearias, lojas de roupas, oficinas e clínicas, além de respostas para seis objeções comuns nas etapas apropriadas.

A demanda usa quatro sinais de até 5 pontos cada: nota/volume no Google, frequência recente das avaliações, atividade datada do Instagram e procura/uso documentados. Os limiares são critérios de priorização ajustáveis, sem estimativas de faturamento. Os outros quatro critérios, de até 20 pontos cada, preservam identidade/contato, necessidade, adequação e confiança, totalizando 100.

Resultados de outro buscador não são apresentados como posições no Google. A pesquisa registra consulta, data e tipo de resultado, sem tratar uma posição observada como liderança permanente.

## Critérios preservados

- Cruzar identidade e localização em fontes públicas; eliminar duplicatas e negócios comprovadamente fechados.
- Pesquisar site no perfil oficial, bio, mapas e buscas direcionadas. Reconhecer páginas oficiais em subdomínios; separar redes sociais e ferramentas de terceiros.
- Usar “site próprio não localizado”, sem afirmar inexistência absoluta. Excluir da fila de criação por ausência quando houver site próprio; avaliar melhoria em fila separada somente por inadequação verificável. Site adequado sem lacuna é excluído; falha da ferramenta fica inconclusiva.
- Confirmar WhatsApp comercial público antes de montar um link direto. Telefone genérico não é confirmação de WhatsApp.
- Informar cobertura e limitações. Não inventar números, prejuízos, orçamento, interesse ou promessas de faturamento.
- Entregar rascunhos para o usuário decidir sobre o envio. Pesquisa não autoriza contato, publicação de prévia ou automação de acompanhamento. Cada ação externa exige autorização explícita.

A nota ordena os prospectos; não mede probabilidade de venda nem substitui os critérios de elegibilidade. Uma solução já disponível não deve ser oferecida como novidade. Recusas são respeitadas, sem pressão ou insistência.

## Arquivos de apoio

- [SKILL.md](.agents/skills/prospectar-empresas-locais/SKILL.md): pesquisa, qualificação e fluxo comercial.
- [Diagnóstico e relatório](.agents/skills/prospectar-empresas-locais/references/diagnostico-relatorio.md): sete dimensões, evidências, pontuação e formato de entrega.
- [Segmentos e abordagens](.agents/skills/prospectar-empresas-locais/references/segmentos-abordagens.md): soluções mínimas e exemplos condicionados a evidências.
- [Objeções](.agents/skills/prospectar-empresas-locais/references/objecoes.md): respostas adaptáveis às seis situações.
- [Conversão em sete passos](.agents/skills/prospectar-empresas-locais/references/conversao-sete-passos.md): condições das etapas, prévia, ligação, proposta e acompanhamento.
- [Validação](tests/VALIDATION.md): cenários, resultados e limites dos testes desta atualização.

A pesquisa ao vivo exige busca web no ambiente. Sem acesso, a skill informa a limitação e pode analisar fontes fornecidas pelo usuário. As fontes podem mudar e devem ser verificadas em cada nova prospecção.
