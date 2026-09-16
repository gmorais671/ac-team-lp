# ACTEAM LP — Especificação Técnica do Projeto

Landing page institucional do personal trainer Aleff Cesar (marca ACTEAM / futuro PersonalPRO), com foco em SEO, performance e conversão de leads.

---

## 1. Stack Tecnológica

- **Framework:** Next.js 15+ (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS
- **Ícones:** Lucide React
- **Animações e Gestos:** Framer Motion
- **Formulários:** React Hook Form + Zod
- **Otimização de Mídia:** `next/image`, `<video>` (MP4/WebM) para loops animados

Dependências já instaladas:

```bash
npm install framer-motion lucide-react react-hook-form zod @hookform/resolvers
```

---

## 2. Design System

### 2.1 Paleta de Cores

| Uso | Cor | Hex |
|---|---|---|
| Fundo principal | Zinc-950 | `#09090B` |
| Cards / containers elevados | Zinc-900 | `#121215` / `#18181B` |
| Bordas sutis | Zinc-800 | `#27272A` |
| Cor primária (Brand Red) | Red | `#DC2626` / `#E11D48` |
| Texto principal | Branco | `#FFFFFF` |
| Texto secundário | Zinc-400 | `#A1A1AA` |

### 2.2 Tipografia

- **Títulos:** fonte impactante/geométrica (`Teko`, `Oswald` ou `Barlow Condensed`) ou `Inter/Montserrat` com tracking alargado
- **Corpo:** `Inter` ou `Plus Jakarta Sans`

---

## 3. Arquitetura das Seções

### 3.1 Smart Header / Navbar
- Fixo no topo, com comportamento *hide on scroll down / reveal on scroll up*.
- Ao esconder: `translate-y-[-100%]`.
- Ao reaparecer: fundo translúcido `backdrop-blur-md bg-black/70`.
- Conteúdo: logotipo ACTEAM, âncoras (`#sobre`, `#como-funciona`, `#resultados`, `#planos`, `#contato`), CTA "Começar Agora".

### 3.2 Hero Section
- Copy principal: "A SUA MELHOR VERSÃO COMEÇA AGORA"
- Subtítulo: consultoria personalizada unindo treino de força e nutrição, foco em performance e estética.
- CTA com glow vermelho sutil, direcionando aos planos ou formulário.
- Visual: foto do Aleff com recorte profissional + glow radial vermelho de fundo.

### 3.3 Seção "Sobre Mim / Por que a ACTEAM?" (Reformulada)
- **Fundo (background layer):** mosaico/grid em baixa opacidade e P&B com fotos do Aleff competindo, treinando, atendendo alunos e na rotina.
- **Container central (foreground):** card com efeito glassmorphism (fundo escuro semi-transparente, borda sutil avermelhada/acinzentada, blur).
- **Conteúdo interno:** mini biografia (Nutricionista + Treinador), lista de pilares com checkmarks estilizados (atendimento individualizado, ciência aplicada, acompanhamento direto).

### 3.4 Seção "Como Funciona" (Cards Interativos)
Estrutura de 3 passos:
1. Avaliação Inicial — alinhamento de rotina e histórico.
2. Planejamento Individualizado — montagem da estratégia de treino e nutrição.
3. Acompanhamento Ativo — suporte via WhatsApp e ajustes constantes.

**Mecânica de interação:**
- Cada card tem duas camadas: bloco de texto e mídia animada (vídeo/gif em loop).
- **Desktop (hover):** texto desliza para a esquerda (`translate-x`), revelando a mídia à direita via Framer Motion.
- **Mobile (touch):** alternância por toque ou preview automático ao entrar no viewport, com snapping horizontal.

### 3.5 Seção "Resultados / Transformações"
- Layout de validação social, substituindo o card neutro atual.
- Comparativo antes/depois (slider de divisão horizontal ou cards duplos lado a lado).
- Tags semânticas: meta atingida, tempo de acompanhamento, depoimento curto.

### 3.6 Seção "Planos & Tabela Comparativa"
- Cartões padronizados na paleta da marca (preto/cinza escuro + destaque vermelho no plano principal), eliminando cores dispersas (azul/verde/laranja).
- Tabela comparativa com ícones de check/cross (Lucide) e tooltips explicativos.

### 3.7 Seção de Contato & Captura de Lead
- Formulário com validação via React Hook Form + Zod.
- Campos: Nome, WhatsApp, Objetivo Principal (Emagrecimento, Hipertrofia, Performance), Plano de Interesse.
- Botão "Enviar no WhatsApp": dispara mensagem pré-formatada abrindo o WhatsApp do Aleff.

---

## 4. SEO & Core Web Vitals

- **Metadata API do Next.js:** `title`, `description`, `keywords`, `openGraph`, imagem de compartilhamento (`opengraph-image.png`).
- **Schema Markup (JSON-LD):** tipo `Person` / `SportsActivityLocation` / `HealthAndBeautyBusiness` para ranqueamento local e nacional.
- **Server Components por padrão:** apenas interações de scroll, hover e formulários marcadas com `'use client'`.

---

## 5. Estrutura de Pastas Sugerida

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── opengraph-image.png
├── components/
│   ├── layout/
│   │   └── SmartHeader.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── AboutMe.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Results.tsx
│   │   ├── Plans.tsx
│   │   └── Contact.tsx
│   └── ui/
├── lib/
│   └── validations/
│       └── contactSchema.ts
├── styles/
└── public/
    ├── images/
    └── videos/
```

---

## 6. Status do Projeto

- [x] Projeto Next.js criado (`ac_team_lp`) com TypeScript, Tailwind, ESLint, App Router
- [x] Dependências de design system instaladas
- [ ] Estrutura de pastas criada
- [ ] Componentes de seção implementados
- [ ] Integração de mídia (fotos/vídeos do Aleff)
- [ ] Formulário de contato + integração WhatsApp
- [ ] SEO / Metadata / JSON-LD
- [ ] Deploy
```