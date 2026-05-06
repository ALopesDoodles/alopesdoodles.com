# CLAUDE.md — A.Lopes Doodles

Instruções permanentes para o assistente Claude Code neste projeto.

---

## Regras de workflow

### Autorização antes de implementar
- Analisar → propor plano → perguntar explicitamente se pode avançar → aguardar "sim" claro
- Nunca implementar a meio de uma conversa assumindo que a discussão implica consentimento
- Frases como "avança com a tua ideia" ou "parece bem" **não contam** como autorização para escrever código
- Perguntar sempre: "posso avançar?" — e só tocar em ficheiros após resposta afirmativa
- Sem excepções, mesmo para alterações de uma linha

### Commits e pushes
- Nunca fazer `git commit` ou `git push` sem instrução explícita do utilizador
- O utilizador revê sempre as alterações no servidor local antes de qualquer commit
- Aprovação de edições locais não implica aprovação para commit/push

---

## Design — 3 formatos obrigatórios

Qualquer alteração de UI deve contemplar e ser testada nos 3 formatos:

| Formato | Breakpoint | Notas |
|---|---|---|
| Monitor horizontal | >1024px | layout wide, peek lateral no carousel |
| Monitor vertical | 768px–1024px | layout mais compacto |
| Mobile | <768px | touch/swipe, sem min-height fixo |

Ao propor alterações: descrever o comportamento nos 3 formatos. Ao implementar: incluir breakpoints para os 3 casos.

---

## Contexto do projeto

**O que é:** Site de portfólio e credibilidade do estúdio A.Lopes Doodles (António Lopes, Portugal).

**Objetivo atual:** Âncora de confiança para compradores no Vinted — não é canal de venda direta. O site dá credibilidade ao negócio enquanto o mercado ibérico é validado via Vinted.

**Não sugerir** funcionalidades de e-commerce, carrinho, envios ou loja online até o utilizador indicar que a fase Vinted está concluída.

**Voz:** Estúdio de uma única pessoa. Todo o conteúdo usa voz singular e primeira pessoa:
- PT: "eu", "comigo", "o meu trabalho", "respondo"
- ES: "yo", "conmigo", "mi trabajo", "respondo"
- EN: "I", "my work", "I reply"
- Nunca usar plural: "nós", "connosco", "respondemos", "we", "our"

---

## Stack técnica

- **Framework:** Astro v6
- **Estilos:** CSS vanilla com custom properties (sem Tailwind)
- **i18n:** PT / ES / EN — ficheiro `src/i18n/translations.ts`
- **Deploy:** GitHub Pages com CNAME para domínio personalizado

**Paleta de cores:**
```
--navy:       #1c2438
--cream:      #e8d4b0
--terracotta: #c4532a
--off-white:  #f8f5f0
--gray:       #6b6b6b
```

**Tipografia:**
- Serif: Playfair Display
- Sans: DM Sans

---

## Serviços e filtros do portfólio

| Chave | PT | ES | EN |
|---|---|---|---|
| miniEu | Mini-eu | Mini-yo | Mini-me |
| laser | Gravação Laser | Grabado Láser | Laser Engraving |
| tabletop | Tabletop | Tabletop | Tabletop |
| collectibles | Colecionáveis | Coleccionables | Collectibles |
| cosplay | Cosplay | Cosplay | Cosplay |
| custom | Customizáveis | Personalizables | Customisables |

URL do portfólio filtrado: `/{lang}/portfolio?filter={chave}`
