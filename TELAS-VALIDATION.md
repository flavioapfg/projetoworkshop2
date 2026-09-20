# Gooday — Plano de validação + checklist de entrega

Documento operacional para validar **todas as telas** do catálogo (`TELAS.md` / spec colada no chat) e entregar o sistema completo.

**Fonte da verdade:** catálogo de telas + §0 Comportamento global.  
**Ambientes:** local `http://127.0.0.1:5173` · produção `https://projetoworkshop2.vercel.app`

---

## 1. Situação atual (baseline)

| Camada | Status | Notas |
|--------|--------|--------|
| Auth demo `admin@admin.com` / `@admin` | ✅ | Local + Vercel |
| SPA rewrite Vercel (`vercel.json`) | ✅ | Rotas internas não dão mais 404 |
| AppShell + NavigationContext | ✅ local | **Ainda não 100% no deploy** (shell/views/sheets locais) |
| Views / sheets / overlays (inventário) | ✅ esqueleto | UI mock navegável |
| Stories: `Você (+)` → criar · demais → viewer | ✅ local | Viewer alinhado ao `gooday_story_modal.html` |
| Comportamento §0 (fades, drag, 800px, zoom) | ⚠️ parcial | Ver fase 3 |
| Dados live Supabase (feed/stories/msgs) | ❌ | Auth ok; UI ainda mock |
| Deploy = código local completo | ❌ | Prioridade: sync GitHub → Vercel |

---

## 2. Como validar (método)

Para **cada** tela do inventário (seção 5):

1. **Abrir** pelo caminho documentado (“Como abrir”)
2. **Conferir anatomia** (layout / elementos presentes)
3. **Exercitar ações** (taps, sheets, stack `go`/`back`)
4. **Checar estados** (empty, loading, unread, active nav)
5. **Checar regras §0** quando aplicável (z-index, body lock, Escape, scroll)
6. Marcar no checklist: `⬜` → `🟡` (parcial) → `✅` ou `🐛` (bug com nota)

### Devices / viewports obrigatórios

| Viewport | Largura | O que validar |
|----------|---------|----------------|
| Mobile | 375 / 390 | Header mobile, bottom nav, sheets bottom, safe-area |
| Tablet | 768 | Transição perto de 800 |
| Desktop | 1280 / 1440 | Grid 3 cols, rail, avatar menu, drag stories |
| Wide | 1800+ | Padding/gap maiores |

### Atalhos de QA

- Escape: emoji → story → sheet → `back()` view
- Body lock: scroll da Home não deve mexer com overlay aberto
- Após fechar overlay: scrollY da Home restaurado

---

## 3. Plano por fases (ordem de execução)

### Fase 0 — Alinhar ambientes (bloqueante)
**Objetivo:** o que validamos local é o que está no ar.

- [ ] Commit/push do shell (`AppShell`, views, sheets, overlays, `Home` wired)
- [ ] Confirmar `vercel.json` rewrite ativo
- [ ] Smoke: login demo → `/home` → Buscar / Perfil / Story / Criar
- [ ] Atualizar este doc com data do deploy validado

**DoD:** mesmos fluxos passam em local e em `projetoworkshop2.vercel.app`.

---

### Fase 1 — Inventário de telas (navegação)
**Objetivo:** toda tela do catálogo **abre e fecha** pelo caminho certo.

Ordem sugerida (mapa G do catálogo):

1. Auth + Home chrome  
2. Stories (criar + viewer)  
3. Sheets da Home (Criar, Comentários, Reagir, Share, Menu, Notifs, Conta, Logout)  
4. Views de descoberta (Buscar → Perfil/Grupo)  
5. Social (Mensagens → Chat → Perfil)  
6. Conta (Meu perfil → Editar / Grupos / Seguidores / Config → e-mail/senha)  
7. Media Capture + Toast  

**DoD:** checklist seção 5.1–5.4 sem `⬜` críticos (tudo `✅` ou `🟡` com gap documentado).

---

### Fase 2 — Fidelidade de ações por tela
**Objetivo:** gestos e resultados batem com o catálogo (não só “abre a tela”).

Prioridade alta:

- [ ] Feed: like toggle + pop; double-tap foto = like forçado
- [ ] Story: 5s, tap 30/70, pause no reply/emoji, fim fecha
- [ ] Create post: mídia 1:1, contador 2200, publicar → topo + toast
- [ ] Create story: captura → composer 9:16 → lista + toast
- [ ] Comments desktop split ~44/56
- [ ] Busca live + empty state
- [ ] Seguir / Participar toggles + toast
- [ ] Chat Enter envia; composer fixed

**DoD:** fluxos Create + Story + Feed Post sem bugs de interação.

---

### Fase 3 — Comportamento global §0 (polish de produto)
**Objetivo:** full-bleed + scroll + máscaras + motion.

| Item §0 | Prioridade | Status |
|---------|------------|--------|
| Breakpoint 800px / grid 3 cols | P0 | 🟡 |
| Safe-areas | P0 | 🟡 |
| Z-index 40→90 | P0 | ✅ shell |
| Body lock + Escape | P0 | ✅ shell |
| Stack go/back | P0 | ✅ |
| Fade rail top/bottom dinâmico | P1 | ⬜ |
| Fade chips L/R | P1 | ⬜ |
| Drag-to-scroll stories (8px) | P1 | ⬜ |
| Zoom desktop ~1.08 | P2 | ⬜ |
| `prefers-reduced-motion` | P2 | ⬜ |
| Toast posições + 2600ms | P1 | 🟡 |
| Sheet timings 180/320/240 | P1 | 🟡 |

**DoD:** checklist seção 5.5 marcada; sem “app em card estreito”.

---

### Fase 4 — Dados reais (Supabase)
**Objetivo:** sair do mock onde o workshop exige persistência.

Ordem:

1. Sessão → perfil `public.users`  
2. Feed posts + likes/comments  
3. Stories  
4. Mensagens / chat  
5. Grupos / membership  
6. Notificações unread  

**DoD:** login demo vê dados do projeto Supabase; ações críticas persistem (mínimo: post + like + comment).

---

### Fase 5 — Hardening + entrega
- [ ] Empty / loading / error states
- [ ] A11y básica (labels, focus, Escape)
- [ ] Lighthouse mobile (performance razoável)
- [ ] README: como rodar, credenciais demo, URL prod
- [ ] Tag/release ou deploy final marcado neste checklist

**DoD:** “sistema entregue” = Fase 0–3 verdes + Fase 4 no escopo acordado + demo estável em produção.

---

## 4. Sessões de validação sugeridas

| Sessão | Duração | Foco | Entrega |
|--------|---------|------|---------|
| V1 | 1–2h | Fase 0 + smoke Home/Stories/Sheets | Deploy = local |
| V2 | 2–3h | Todas as Views (C1–C14) | Checklist 5.3 |
| V3 | 2h | Sheets + Create + Media | Checklist 5.4 |
| V4 | 2h | §0 layout/scroll/fades | Checklist 5.5 |
| V5 | 3h+ | Supabase binding | Fase 4 |
| V6 | 1h | Regressão prod + handoff | Fase 5 |

Registrar bugs como: `🐛 [tela] — repro → esperado → atual`.

---

## 5. Checklist mestre (to-do de entrega)

Legenda: `⬜` não feito · `🟡` parcial · `✅` ok · `🐛` bug aberto · `➖` N/A

### 5.1 Auth / ambiente
- [ ] Login demo local
- [ ] Login demo produção
- [ ] Cadastro (fluxo signup)
- [ ] Redirect pós-login → `/home`
- [ ] Deploy sync com shell completo

### 5.2 Home / chrome
- [ ] Home Feed
- [ ] Header Mobile (+, sino, avatar)
- [ ] Header Desktop (busca → Buscar, sino, AvatarMenu)
- [ ] Stories Row (Você = criar; outros = viewer)
- [ ] Communities Carousel (só mobile)
- [ ] Feed Post (todas as ações)
- [ ] Mobile Nav
- [ ] Desktop Nav
- [ ] Right Rail (Grupos | Pessoas)

### 5.3 Views
- [ ] Buscar
- [ ] Perfil (pessoa)
- [ ] Grupo
- [ ] Publicação
- [ ] Mensagens
- [ ] Chat
- [ ] Meu perfil
- [ ] Editar perfil
- [ ] Membros
- [ ] Seguidores
- [ ] Meus grupos
- [ ] Configurações
- [ ] Alterar e-mail
- [ ] Alterar senha

### 5.4 Sheets / overlays
- [ ] Criar (picker)
- [ ] Nova publicação
- [ ] Novo story (após captura)
- [ ] Comentários (mobile + desktop split)
- [ ] Reagir
- [ ] Compartilhar
- [ ] Opções da publicação
- [ ] Notificações
- [ ] Sua conta
- [ ] Deseja sair?
- [ ] Story Viewer (`gooday_story_modal`)
- [ ] Media Capture
- [ ] Toast
- [ ] Avatar Menu (desktop)

### 5.5 Comportamento global (§0)
- [ ] Full-bleed 100% largura
- [ ] Breakpoint 800px
- [ ] Grid desktop 3 colunas
- [ ] Safe-areas
- [ ] Z-index correto
- [ ] Body lock
- [ ] Escape (prioridade)
- [ ] Stack go/back
- [ ] Fade rail dinâmico
- [ ] Fade chips dinâmico
- [ ] Drag stories desktop
- [ ] Timings (sheet/view/toast/story 5s)
- [ ] Double-tap like
- [ ] `prefers-reduced-motion`

### 5.6 Dados / produção
- [ ] Env Vercel `VITE_SUPABASE_*`
- [ ] Feed/posts no Supabase
- [ ] Stories no Supabase
- [ ] Mensagens no Supabase
- [ ] README + credenciais demo documentadas
- [ ] Smoke final em produção assinado

---

## 6. Definição de “sistema completo”

Consideramos entregue quando:

1. **Checklist 5.1–5.4** sem itens críticos em `⬜`/`🐛`
2. **§0 P0** (layout, z-index, lock, Escape, stack) em `✅`
3. **Demo** estável: login → home → criar post/story → buscar → mensagens → config
4. **Produção** = mesmo build validado localmente
5. Gaps P2 (zoom 1.08, reduced-motion, binding total) listados como backlog explícito — não surpresa

---

## 7. Próximo passo imediato

1. **Fase 0:** publicar o shell local no GitHub/Vercel  
2. Abrir sessão **V1** e preencher §5.2 + Stories  
3. Seguir V2 → V3 sem pular o método da §2  

Quando quiser executar, diga por qual fase começamos (recomendo **Fase 0**).
