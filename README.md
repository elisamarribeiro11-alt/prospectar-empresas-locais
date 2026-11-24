# Prospectar empresas locais

Skill para Codex e Claude Code pesquisar empresas de uma cidade brasileira cujo site próprio de vendas ou apresentação não foi localizado, verificar contatos públicos e preparar abordagens comerciais individuais.

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

## O que a pesquisa entrega

Para cada empresa apta: nome, segmento, contato comercial público, presença digital, evidências com fontes e datas, possível dor, oportunidade comercial, solução recomendada, mensagem inicial, possíveis objeções com respostas e prioridade de 0 a 100 com composição e justificativa.

O diagnóstico examina segmento, presença digital, avaliações públicas, concorrentes locais, atendimento, acesso aos produtos/serviços e jornada de compra. Fatos, hipóteses e informações não verificadas aparecem separados. Os canais observados não são tratados automaticamente como a principal origem de vendas.

A abordagem começa por um detalhe verificado, apresenta uma ideia útil e termina com uma pergunta simples. Há orientações específicas para restaurantes, barbearias, lojas de roupas, oficinas e clínicas, além de respostas para seis objeções comuns.

## Critérios preservados

- Cruzar identidade e localização em fontes públicas; eliminar duplicatas e negócios comprovadamente fechados.
- Pesquisar site no perfil oficial, bio, mapas e buscas direcionadas. Reconhecer páginas oficiais em subdomínios; separar redes sociais e ferramentas de terceiros.
- Usar “site próprio não localizado”, sem afirmar inexistência absoluta. Excluir da abordagem para criação quando houver site próprio; deixar casos inconclusivos pendentes.
- Confirmar WhatsApp comercial público antes de montar um link direto. Telefone genérico não é confirmação de WhatsApp.
- Informar cobertura e limitações. Não inventar números, prejuízos, orçamento, interesse ou promessas de faturamento.
- Entregar rascunhos para o usuário decidir sobre o envio. A skill não contata empresas, faz compras nem agenda serviços.

A nota ordena os prospectos; não mede probabilidade de venda nem substitui os critérios de elegibilidade. Uma solução já disponível não deve ser oferecida como novidade. Recusas são respeitadas, sem pressão ou insistência.

## Arquivos de apoio

- [SKILL.md](.agents/skills/prospectar-empresas-locais/SKILL.md): pesquisa, qualificação e fluxo comercial.
- [Diagnóstico e relatório](.agents/skills/prospectar-empresas-locais/references/diagnostico-relatorio.md): sete dimensões, evidências, pontuação e formato de entrega.
- [Segmentos e abordagens](.agents/skills/prospectar-empresas-locais/references/segmentos-abordagens.md): soluções mínimas e exemplos condicionados a evidências.
- [Objeções](.agents/skills/prospectar-empresas-locais/references/objecoes.md): respostas adaptáveis às seis situações.
- [Validação](tests/VALIDATION.md): cenários, resultados e limites dos testes desta atualização.

A pesquisa ao vivo exige busca web no ambiente. Sem acesso, a skill informa a limitação e pode analisar fontes fornecidas pelo usuário. As fontes podem mudar e devem ser verificadas em cada nova prospecção.
