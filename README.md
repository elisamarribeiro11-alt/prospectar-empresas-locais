# Prospectar empresas locais

Skill para Claude Code e Codex. Informe uma cidade brasileira para pesquisar empresas cujo site próprio de vendas ou apresentação não foi localizado.

A pesquisa cruza fontes públicas e entrega o WhatsApp comercial em link direto, uma sugestão de site e uma mensagem de abordagem personalizada. Você escolhe quais mensagens enviar.

## Como instalar

Clone ou baixe este repositório e abra sua pasta no Claude Code ou no Codex. A skill já está nas pastas de projeto reconhecidas pelas duas ferramentas.

| Ferramenta | Pasta da skill | Exemplo de uso |
| --- | --- | --- |
| Claude Code | `.claude/skills/prospectar-empresas-locais/` | `/prospectar-empresas-locais cidade: Itaitinga - CE` |
| Codex | `.agents/skills/prospectar-empresas-locais/` | `Use $prospectar-empresas-locais. cidade: Itaitinga - CE` |

Se quiser usar a skill em outro projeto, copie a pasta correspondente para o mesmo caminho relativo nesse projeto.

## O que esperar

- Você pode informar apenas a cidade ou acrescentar bairro, segmento e limite de resultados.
- A pesquisa depende de acesso a busca web no ambiente em que você executa a skill.
- A entrega mostra as fontes, a cobertura e as pendências. A busca por fontes públicas pode deixar empresas de fora.
- As abordagens são rascunhos para envio manual.
