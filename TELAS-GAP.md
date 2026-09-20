# TELAS-GAP — inventário vs catálogo

Atualizado após stories wired + plano de validação (`TELAS-VALIDATION.md`).

## Auth
| Item | Status |
|------|--------|
| Login/Cadastro | ✅ `/` |
| Demo `admin@admin.com` / `@admin` | ✅ local + Vercel |

## Arquitetura
| Item | Status |
|------|--------|
| AppShell + NavigationContext | ✅ local (deploy a sincronizar) |
| Views z-60 stack | ✅ |
| Sheets z-70 | ✅ |
| AvatarMenu z-75 | ✅ |
| Story Viewer z-80 | ✅ (`gooday_story_modal`) |
| Media Capture + Toast z-90 | ✅ |
| Body lock + Escape | ✅ |

## Home / chrome
| Item | Status |
|------|--------|
| Home Feed | ✅ wired no shell |
| Nav / header / mobile | ✅ abre views/sheets |
| Story `Você (+)` → criar modal | ✅ |
| Demais stories → Story Viewer | ✅ |

## Views
Buscar · Perfil · User · Grupo · Publicação · Mensagens · Chat · Editar perfil · Membros · Seguidores · Meus grupos · Configurações · Alterar e-mail · Alterar senha → ✅ esqueleto

## Sheets
Criar · Nova publicação · Novo story · Comentários · Reagir · Compartilhar · Opções · Notificações · Sua conta · Logout → ✅ esqueleto

## Pendências (ver TELAS-VALIDATION.md)
- Sync deploy = shell local (Fase 0)
- Fades rail/chips, drag stories, zoom 1.08 (§0)
- Double-tap like / fidelidade de gestos (Fase 2)
- Binding Supabase além do Auth (Fase 4)
