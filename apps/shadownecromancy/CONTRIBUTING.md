# CONTRIBUTING — ShadowNecromancy

> Projeto dentro do monorepo `shadowchar-studio`.
> Localização: `apps/shadownecromancy`

---

## Branch Strategy

### Branches permanentes

| Branch    | Propósito                                   |
| --------- | ------------------------------------------- |
| `main`    | Produção — Vercel deploy automático         |
| `develop` | Integração de features — Vercel Preview     |

### Branches temporárias

Sempre criadas a partir de `develop`:

| Prefixo          | Uso                                  |
| ---------------- | ------------------------------------ |
| `feat/nome`      | Nova feature                         |
| `fix/nome`       | Correção de bug                      |
| `chore/nome`     | Configuração, deps, refactor         |

### Regras

- **Nunca** commitar diretamente em `main`
- PRs de `develop` → `main` disparam deploy em produção
- PRs de `feat/*` → `develop` disparam Vercel Preview
- Mensagens de commit seguem **Conventional Commits**:

  | Prefixo  | Uso                              |
  | -------- | -------------------------------- |
  | `feat:`  | Nova funcionalidade              |
  | `fix:`   | Correção de bug                  |
  | `chore:` | Manutenção, deps, config         |
  | `docs:`  | Documentação                     |
  | `style:` | Formatação sem lógica            |

### Exemplos de fluxo

```bash
git checkout develop
git checkout -b feat/waitlist-modal
# ... código ...
git commit -m "feat(waitlist): add email capture modal with success state"
git push origin feat/waitlist-modal
# Abrir PR: feat/waitlist-modal → develop
```

---

## Deploy na Vercel

Para conectar um novo app do monorepo na Vercel:

1. Acesse vercel.com → **Add New Project**
2. Importe o repo `shadowchar-studio`
3. Em **"Root Directory"** selecione: `apps/shadownecromancy`
4. **Framework Preset**: Next.js (detecta automático)
5. Adicione as env vars:
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - `STRIPE_SECRET_KEY`
   - `STRIPE_PRICE_ID_FUNDADOR`
   - `NEXT_PUBLIC_URL`
   - `DATABASE_URL`
   - `BETTER_AUTH_SECRET`
   - `RESEND_API_KEY`
6. Em **"Production Branch"**: `main`
7. Em **"Preview Branches"**: `develop`
8. **Deploy**

### Para adicionar um novo produto (ex: ShadowEcho)

1. Crie `apps/shadowecho` com `create-next-app`
2. Crie `apps/shadowecho/vercel.json` seguindo o mesmo padrão
3. Na Vercel: **Add New Project** → mesmo repo → **Root Directory**: `apps/shadowecho`
