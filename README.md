# Shadowchar Studio

Marca-mãe de micro-SaaS para RPG de mesa.

## Produtos
| Produto | Status | Diretório |
|---------|--------|-----------|
| ShadowNecromancy | 🔨 Em desenvolvimento | apps/shadownecromancy |
| ShadowEcho | 📋 Planejado | apps/shadowecho |
| ShadowRitual | 📋 Planejado | apps/shadowritual |

## Estrutura
```
apps/          → um diretório por produto (Next.js independente)
brand/         → assets, tokens e brand guide compartilhados
```

## Deploy
Cada app é deployado de forma independente na Vercel.
Configure Root Directory como apps/[nome-do-produto] em cada projeto Vercel.

## Brand
Tokens de design, logo e brand guide em /brand.
Todo produto herda os tokens de /brand/tokens/tokens.css.