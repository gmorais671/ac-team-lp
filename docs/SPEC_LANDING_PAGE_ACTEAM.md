Não são exatamente o mesmo arquivo.

- `README.md`: documentação geral do projeto, stack, estrutura e status.
- `SPEC_LANDING_PAGE_ACTEAM.md`: especificação detalhada para orientar a implementação no VS Code/OpenCode.

O ideal é manter os dois arquivos. Abaixo está o conteúdo do `SPEC_LANDING_PAGE_ACTEAM.md`:

```markdown
# SPEC_LANDING_PAGE_ACTEAM.md

# Especificação da Landing Page ACTEAM

## 1. Objetivo do Projeto

Criar uma landing page moderna, responsiva, performática e otimizada para SEO para a marca ACTEAM, representada pelo personal trainer Aleff.

A página deverá apresentar:

- A proposta de trabalho do Aleff;
- Sua experiência como personal trainer e competidor de fisiculturismo;
- A metodologia de atendimento;
- Resultados e transformações de alunos;
- Planos de acompanhamento;
- Formas de contato e conversão de visitantes em leads.

O projeto será desenvolvido com Next.js e TypeScript, substituindo a versão anterior construída em Flutter Web.

A prioridade é criar uma página com:

1. Boa experiência visual;
2. Alta velocidade de carregamento;
3. SEO adequado;
4. Responsividade;
5. Clareza na comunicação;
6. Conversão para contato via WhatsApp;
7. Identidade visual consistente com a marca ACTEAM.

---

## 2. Diretrizes Importantes

### 2.1 Não inventar informações

O projeto não deve inventar:

- Preços;
- Depoimentos;
- Resultados de alunos;
- Quantidade de alunos;
- Certificações;
- Localização;
- Número de anos de experiência;
- Formação acadêmica;
- Serviços que não foram confirmados;
- Promessas de resultados.

Quando uma informação ainda não estiver disponível, utilizar:

- Placeholder claramente identificado;
- Texto genérico;
- Ou solicitar a informação antes de implementar.

Exemplos de placeholders:

- `[INSERIR NÚMERO DO WHATSAPP]`
- `[INSERIR BIOGRAFIA APROVADA]`
- `[INSERIR DEPOIMENTO REAL]`
- `[INSERIR PREÇO DO PLANO]`

### 2.2 Preservar a identidade da marca

A marca ACTEAM utiliza principalmente:

- Preto;
- Branco;
- Vermelho.

Essas cores devem ser predominantes em toda a interface.

Evitar o uso de cores aleatórias nos cards e componentes. Cores secundárias podem ser utilizadas somente para:

- Estados de sucesso;
- Estados de erro;
- Feedback de formulário;
- Elementos funcionais que exijam diferenciação visual.

### 2.3 Priorizar conversão sem poluir o layout

A página deve possuir chamadas para ação claras, mas sem transformar todas as seções em anúncios.

Os principais CTAs devem direcionar para:

- Formulário de contato;
- Seção de planos;
- WhatsApp;
- Avaliação inicial ou conversa com o Aleff.

---

## 3. Stack Técnica

### 3.1 Tecnologias principais

- Next.js com App Router;
- TypeScript;
- Tailwind CSS;
- Framer Motion;
- Lucide React;
- React Hook Form;
- Zod.

### 3.2 Princípios técnicos

- Utilizar Server Components por padrão;
- Utilizar Client Components somente quando houver interatividade;
- Evitar transformar a página inteira em um Client Component;
- Utilizar `next/image` para imagens;
- Otimizar vídeos e animações;
- Evitar JavaScript desnecessário;
- Criar componentes reutilizáveis;
- Manter os dados de conteúdo separados da estrutura visual;
- Não acoplar a interface diretamente a detalhes de infraestrutura.

---

## 4. Design System

### 4.1 Cores

#### Fundo principal

```text
#09090B
```

Utilizar no fundo geral da página e em grandes áreas escuras.

#### Fundo secundário

```text
#121215
#18181B
```

Utilizar em cards, blocos destacados e containers elevados.

#### Bordas

```text
#27272A
```

Utilizar em bordas discretas e divisões entre elementos.

#### Vermelho da marca

```text
#DC2626
#E11D48
```

Utilizar em:

- CTAs;
- Links ativos;
- Ícones de destaque;
- Bordas especiais;
- Gradientes;
- Indicadores de interação.

Escolher uma cor principal para evitar que cada componente utilize um vermelho diferente.

#### Texto principal

```text
#FFFFFF
```

#### Texto secundário

```text
#A1A1AA
```

### 4.2 Tipografia

A tipografia deve transmitir:

- Força;
- Performance;
- Clareza;
- Modernidade;
- Profissionalismo.

Sugestão:

- Títulos: `Barlow Condensed`, `Oswald`, `Teko` ou outra fonte condensada e forte;
- Corpo: `Inter` ou `Plus Jakarta Sans`.

Caso nenhuma fonte externa seja adicionada inicialmente, utilizar uma fonte sans-serif moderna disponível no projeto.

### 4.3 Bordas e raios

Utilizar bordas discretamente arredondadas:

- Cards: `rounded-2xl`;
- Botões: `rounded-lg` ou `rounded-xl`;
- Imagens destacadas: `rounded-2xl`;
- Elementos decorativos: utilizar raios menores ou formas geométricas.

Evitar excesso de arredondamento em todos os elementos, para manter a identidade forte e esportiva.

### 4.4 Sombras e efeitos

Utilizar:

- Sombras suaves;
- Gradientes vermelhos discretos;
- Glow vermelho controlado;
- Backdrop blur somente em elementos específicos;
- Overlay escuro sobre imagens para melhorar a leitura.

Evitar excesso de:

- Glassmorphism;
- Brilhos;
- Gradientes muito fortes;
- Animações contínuas;
- Elementos piscando.

---

## 5. Estrutura Geral da Página

A landing page deverá possuir as seguintes seções:

1. Header inteligente;
2. Hero;
3. Sobre o Aleff / Por que a ACTEAM;
4. Como funciona;
5. Resultados e transformações;
6. Planos;
7. Perguntas frequentes;
8. Formulário de contato;
9. Footer.

A ordem poderá ser ajustada durante a implementação caso os testes visuais indiquem uma melhor sequência de conversão.

---

## 6. Header Inteligente

### 6.1 Objetivo

Criar uma barra de navegação fixa que desaparece quando o usuário rola para baixo e reaparece quando o usuário rola para cima.

### 6.2 Comportamento

- Ficar fixa no topo da tela;
- Esconder ao detectar scroll para baixo;
- Reaparecer ao detectar scroll para cima;
- Permanecer visível quando o usuário estiver no topo da página;
- Adicionar fundo translúcido ao sair do topo;
- Possuir transição suave;
- Não causar deslocamento no layout;
- Funcionar em desktop e mobile.

### 6.3 Conteúdo

O header deverá conter:

- Logo ou nome ACTEAM;
- Links para as principais seções;
- CTA principal;
- Menu mobile.

Links sugeridos:

- Sobre;
- Como funciona;
- Resultados;
- Planos;
- Contato.

### 6.4 Acessibilidade

- Utilizar elemento semântico `<header>`;
- Utilizar `<nav>` para navegação;
- O botão do menu mobile deve possuir `aria-label`;
- Indicar visualmente o estado do menu;
- Permitir navegação via teclado;
- Manter contraste adequado.

---

## 7. Hero Section

### 7.1 Objetivo

Apresentar rapidamente:

- Quem é o Aleff;
- Qual problema ele resolve;
- Para quem é o acompanhamento;
- Qual ação o visitante deve realizar.

### 7.2 Estrutura visual

O Hero deverá utilizar:

- Fundo escuro;
- Imagem forte do Aleff;
- Overlay para garantir legibilidade;
- Elementos vermelhos discretos;
- Tipografia de impacto;
- CTA principal;
- CTA secundário opcional.

### 7.3 Conteúdo

O texto inicial poderá seguir esta direção:

#### Título

```text
A SUA MELHOR VERSÃO COMEÇA AGORA
```

#### Subtítulo

```text
Treinamento e acompanhamento personalizado para quem busca evolução com estratégia, consistência e orientação.
```

Esse texto deverá ser revisado conforme a comunicação oficial da ACTEAM.

### 7.4 CTAs

CTA principal sugerido:

```text
Começar agora
```

CTA secundário sugerido:

```text
Conhecer o método
```

Os textos poderão ser ajustados para refletir melhor a estratégia comercial.

### 7.5 Requisitos técnicos

- Utilizar `next/image`;
- Definir dimensões apropriadas;
- Utilizar `priority` somente na imagem principal do Hero;
- Não carregar vídeos pesados automaticamente no Hero sem necessidade;
- Garantir bom contraste em telas pequenas;
- Testar o recorte da imagem em diferentes proporções.

---

## 8. Seção Sobre o Aleff / Por que a ACTEAM

### 8.1 Problema da versão atual

A seção atual enfatiza principalmente fotos do Aleff em competições de fisiculturismo.

Embora essas imagens transmitam autoridade e experiência, o excesso de fotos de competição pode fazer o visitante interpretar que o serviço é direcionado somente a atletas ou pessoas avançadas.

A nova seção deverá mostrar mais proximidade e variedade.

### 8.2 Objetivo da nova seção

Comunicar que a ACTEAM une:

- Experiência prática;
- Disciplina;
- Conhecimento;
- Acompanhamento individualizado;
- Aplicação da estratégia na vida real;
- Experiência com diferentes perfis de alunos.

### 8.3 Composição visual

Criar uma composição com:

- Fundo composto por fotografias;
- Fotos de competições;
- Fotos treinando;
- Fotos com alunos;
- Fotos da rotina;
- Fotos em diferentes momentos da carreira;
- Overlay escuro;
- Baixa opacidade nas imagens de fundo;
- Container centralizado com o conteúdo principal.

### 8.4 Container central

O container central deverá possuir:

- Fundo escuro semitransparente;
- Borda discreta;
- Blur moderado;
- Boa legibilidade;
- Espaçamento interno generoso;
- Layout adaptado para mobile.

Evitar utilizar transparência em excesso, pois a leitura do texto deve ser sempre prioridade.

### 8.5 Conteúdo sugerido

A seção deverá conter:

- Título;
- Texto biográfico aprovado;
- Breve explicação da metodologia;
- Lista de pilares;
- CTA opcional.

Pilares sugeridos:

- Atendimento individualizado;
- Estratégia baseada em objetivos;
- Acompanhamento próximo;
- Ajustes ao longo do processo;
- Consistência e evolução.

Esses itens deverão ser confirmados antes da publicação definitiva.

---

## 9. Seção Como Funciona

### 9.1 Objetivo

Explicar de forma visual e simples como funciona o acompanhamento.

### 9.2 Etapas

#### Etapa 1 — Avaliação Inicial

Objetivo:

- Entender o momento atual do aluno;
- Conhecer rotina, histórico e objetivos;
- Identificar necessidades e limitações.

#### Etapa 2 — Planejamento Individualizado

Objetivo:

- Criar uma estratégia personalizada;
- Organizar treino e nutrição conforme o objetivo;
- Adaptar o planejamento à rotina real do aluno.

#### Etapa 3 — Acompanhamento Ativo

Objetivo:

- Acompanhar a evolução;
- Realizar ajustes;
- Tirar dúvidas;
- Manter o aluno orientado durante o processo.

Os textos deverão ser revisados com o Aleff antes da publicação.

### 9.3 Interação dos cards

Cada card deverá possuir:

- Número da etapa;
- Título;
- Descrição;
- Ícone ou elemento visual;
- Mídia correspondente;
- Estado inicial;
- Estado de interação.

### 9.4 Desktop

No desktop:

- O card apresenta inicialmente seu conteúdo textual;
- Ao passar o mouse, a camada textual desliza suavemente;
- A mídia da etapa é revelada;
- A transição deve ocorrer da direita para a esquerda;
- A animação deve ser rápida e natural;
- O conteúdo não pode sair completamente da área visível;
- O card deve continuar legível mesmo sem interação.

### 9.5 Mobile

No mobile não se deve depender somente de hover.

Possibilidades:

- Alternância por toque;
- Cards empilhados com botão de expansão;
- Carrossel horizontal com `scroll-snap`;
- Ativação automática quando o card entra no viewport;
- Exibição da mídia após o toque.

A implementação deverá priorizar usabilidade e não apenas reproduzir literalmente o comportamento desktop.

### 9.6 Mídias

As mídias poderão ser:

- Vídeos curtos em MP4;
- Vídeos em WebM;
- GIFs otimizados;
- Animações leves;
- Ilustrações ou imagens sequenciais.

Requisitos:

- Utilizar `muted`;
- Utilizar `loop`;
- Utilizar `playsInline`;
- Evitar autoplay com áudio;
- Otimizar tamanho dos arquivos;
- Utilizar poster quando necessário;
- Fornecer fallback visual;
- Não prejudicar o carregamento inicial.

---

## 10. Seção Resultados e Transformações

### 10.1 Objetivo

Apresentar evidências reais do trabalho da ACTEAM sem criar promessas exageradas.

### 10.2 Possíveis formatos

- Fotos antes e depois;
- Cards de transformação;
- Depoimentos;
- Galeria de alunos;
- Resultados organizados por objetivo;
- Slider de comparação.

### 10.3 Informações permitidas

Somente utilizar informações confirmadas, como:

- Nome ou identificação autorizada do aluno;
- Objetivo;
- Período de acompanhamento;
- Depoimento autorizado;
- Imagens autorizadas;
- Métricas reais e verificadas.

### 10.4 Privacidade

Antes da publicação:

- Confirmar autorização para uso da imagem;
- Confirmar autorização para uso do nome;
- Confirmar autorização para publicar depoimentos;
- Evitar exibir informações pessoais desnecessárias.

### 10.5 Evitar

Não utilizar:

- Resultados inventados;
- Promessas de prazo;
- Garantias de perda de peso;
- Números sem comprovação;
- Comparações que induzam o visitante ao erro.

---

## 11. Seção de Planos

### 11.1 Objetivo

Apresentar as opções de acompanhamento de forma clara.

### 11.2 Direção visual

Os planos devem utilizar:

- Fundo preto ou cinza escuro;
- Texto branco;
- Destaques vermelhos;
- Bordas discretas;
- Hierarquia visual clara;
- Um plano principal visualmente destacado.

Evitar utilizar uma cor diferente para cada plano.

### 11.3 Conteúdo dos cards

Cada card poderá conter:

- Nome do plano;
- Breve descrição;
- Lista de benefícios;
- Frequência ou formato do acompanhamento;
- Preço, caso confirmado;
- CTA;
- Indicação de plano recomendado, se aplicável.

### 11.4 Informações não confirmadas

Não preencher valores ou benefícios sem confirmação.

Utilizar placeholders quando necessário:

```text
[INSERIR PREÇO]
[INSERIR BENEFÍCIOS]
[INSERIR FREQUÊNCIA]
```

### 11.5 Tabela comparativa

A tabela comparativa deverá:

- Ser responsiva;
- Permitir leitura em telas pequenas;
- Utilizar checkmarks e indicadores claros;
- Evitar excesso de colunas;
- Possuir contraste adequado;
- Não depender apenas de cores para transmitir significado.

---

## 12. Perguntas Frequentes

Criar uma seção de FAQ para responder dúvidas comuns.

Perguntas possíveis:

- Para quem é o acompanhamento?
- O atendimento é online ou presencial?
- Como funciona a avaliação inicial?
- O treino é personalizado?
- A nutrição faz parte do acompanhamento?
- Como são realizados os ajustes?
- Como começo o atendimento?

As respostas devem ser escritas com base nas informações reais fornecidas pelo Aleff.

Não publicar respostas especulativas.

---

## 13. Formulário de Contato

### 13.1 Objetivo

Capturar informações básicas do visitante e facilitar o início da conversa.

### 13.2 Campos sugeridos

- Nome;
- WhatsApp;
- Objetivo principal;
- Plano de interesse;
- Mensagem opcional.

### 13.3 Objetivos possíveis

- Emagrecimento;
- Hipertrofia;
- Performance;
- Saúde e qualidade de vida;
- Outro.

Essas opções deverão ser confirmadas conforme os serviços oferecidos.

### 13.4 Validação

Utilizar:

- React Hook Form;
- Zod;
- Mensagens de erro claras;
- Validação de campos obrigatórios;
- Validação de formato do WhatsApp;
- Estados de carregamento;
- Estado de sucesso;
- Estado de erro.

### 13.5 Integração inicial

A primeira versão poderá utilizar redirecionamento para o WhatsApp com mensagem pré-preenchida.

O número do WhatsApp não deve ser inventado.

Utilizar placeholder:

```text
[INSERIR NÚMERO DO WHATSAPP]
```

Mensagem sugerida:

```text
Olá, Aleff! Meu nome é {nome}. Tenho interesse em acompanhamento para {objetivo}. Gostaria de saber mais sobre o plano {plano}.
```

### 13.6 Segurança e privacidade

- Não expor tokens no frontend;
- Não armazenar dados sem necessidade;
- Não inserir credenciais no código;
- Não enviar dados para serviços não confirmados;
- Informar o visitante sobre o destino do formulário, se houver armazenamento.

---

## 14. Footer

O footer deverá conter:

- Nome ou logo ACTEAM;
- Breve descrição;
- Links das seções;
- Link para WhatsApp;
- Redes sociais, somente se os endereços forem confirmados;
- Informação de direitos autorais;
- Política de privacidade, caso exista.

Não criar links fictícios para redes sociais.

---

## 15. Responsividade

A página deverá ser planejada para:

- Smartphones pequenos;
- Smartphones grandes;
- Tablets;
- Notebooks;
- Monitores grandes.

### 15.1 Regras

- Evitar overflow horizontal;
- Não depender apenas de hover;
- Ajustar tamanhos de título;
- Adaptar grids para uma coluna;
- Reduzir efeitos pesados em telas pequenas;
- Garantir botões com área de toque adequada;
- Verificar espaçamentos em mobile;
- Testar menus e carrosséis com toque.

---

## 16. Acessibilidade

A implementação deverá seguir boas práticas:

- HTML semântico;
- Hierarquia correta de headings;
- Textos alternativos nas imagens;
- Contraste adequado;
- Navegação por teclado;
- Estados de foco visíveis;
- Botões reais para ações;
- Labels nos campos de formulário;
- `aria-label` quando necessário;
- Respeito à preferência `prefers-reduced-motion`.

Quando o usuário preferir reduzir movimento, as animações deverão ser reduzidas ou desativadas.

---

## 17. SEO

### 17.1 Metadata

Configurar:

- Título da página;
- Descrição;
- Keywords somente quando fizer sentido;
- Canonical URL, quando o domínio estiver definido;
- Open Graph;
- Twitter Cards;
- Imagem de compartilhamento.

Não inventar domínio ou URL definitiva.

### 17.2 Conteúdo indexável

O conteúdo principal deverá existir em HTML renderizado pelo Next.js.

Não depender exclusivamente de:

- Canvas;
- JavaScript para inserir textos;
- Imagens contendo todo o conteúdo textual;
- Animações para apresentar informações essenciais.

### 17.3 Dados estruturados

Avaliar a utilização de JSON-LD com informações confirmadas.

Possíveis tipos:

- `Person`;
- `ProfessionalService`;
- `HealthAndBeautyBusiness`.

Não incluir:

- Endereço não confirmado;
- Avaliações falsas;
- Nota inexistente;
- Número de clientes não confirmado;
- Informações inventadas.

### 17.4 Imagens

- Utilizar `next/image`;
- Adicionar `alt` descritivo;
- Comprimir imagens;
- Usar formatos modernos quando possível;
- Evitar carregar todas as imagens com prioridade;
- Utilizar lazy loading fora do conteúdo inicial.

---

## 18. Performance

### 18.1 Imagens

- Comprimir arquivos;
- Usar dimensões adequadas;
- Evitar imagens maiores que o necessário;
- Utilizar `priority` somente para imagens críticas;
- Utilizar carregamento lazy nas demais imagens.

### 18.2 Vídeos

- Manter vídeos curtos;
- Utilizar compressão;
- Preferir WebM quando adequado;
- Fornecer MP4 como fallback;
- Usar poster;
- Não utilizar áudio automático;
- Evitar vários vídeos carregando simultaneamente;
- Considerar carregar vídeos somente quando o card estiver visível.

### 18.3 Animações

- Preferir `transform` e `opacity`;
- Evitar animações que causem reflow;
- Não executar animações pesadas continuamente;
- Respeitar `prefers-reduced-motion`;
- Testar em dispositivos móveis.

---

## 19. Arquitetura de Componentes

Estrutura sugerida:

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── opengraph-image.tsx
├── components/
│   ├── layout/
│   │   ├── SmartHeader.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── AboutMe.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Results.tsx
│   │   ├── Plans.tsx
│   │   ├── FAQ.tsx
│   │   └── Contact.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── SectionHeading.tsx
│       ├── Container.tsx
│       └── Reveal.tsx
├── data/
│   ├── site-content.ts
│   ├── plans.ts
│   └── how-it-works.ts
├── lib/
│   ├── utils.ts
│   └── validations/
│       └── contactSchema.ts
└── types/
    └── index.ts
```

### 19.1 Separação de responsabilidades

- `app`: rotas, layout e configuração da aplicação;
- `components`: componentes visuais;
- `sections`: seções da landing page;
- `ui`: componentes reutilizáveis;
- `data`: conteúdo configurável;
- `lib`: funções auxiliares e validações;
- `types`: tipos compartilhados.

### 19.2 Conteúdo separado da interface

Evitar escrever todo o conteúdo diretamente dentro de componentes complexos.

Sempre que possível, manter:

- Lista de etapas;
- Lista de planos;
- Links;
- Benefícios;
- Perguntas frequentes;

em arquivos de dados separados.

---

## 20. Tipos de Estado

### 20.1 Estado de UI

Exemplos:

- Header visível ou oculto;
- Menu mobile aberto;
- Card ativo;
- FAQ expandido;
- Estado de hover;
- Estado de foco;
- Estado de carregamento do formulário.

Esses estados devem permanecer próximos dos componentes que os utilizam.

### 20.2 Estado de domínio

Exemplos:

- Objetivo escolhido pelo visitante;
- Plano selecionado;
- Dados preenchidos no formulário;
- Etapa selecionada da metodologia.

Esse estado deve ser modelado de forma clara e não deve depender diretamente de detalhes visuais.

### 20.3 Estado de infraestrutura

Exemplos:

- Envio de dados para uma API;
- Integração com WhatsApp;
- Persistência de leads;
- Serviços externos.

A UI não deve conhecer tokens, URLs internas, chaves secretas ou detalhes de infraestrutura.

---

## 21. Estratégia de Implementação

A implementação deverá ocorrer em etapas.

### Etapa 1 — Fundação

- Confirmar estrutura do projeto;
- Configurar fontes;
- Configurar cores;
- Configurar estilos globais;
- Criar componentes base;
- Validar responsividade inicial.

### Etapa 2 — Header e Hero

- Criar header;
- Implementar comportamento de scroll;
- Criar menu mobile;
- Implementar Hero;
- Testar visual em diferentes tamanhos.

### Etapa 3 — Sobre o Aleff

- Organizar imagens;
- Criar mosaico ou composição de fundo;
- Criar container central;
- Implementar conteúdo aprovado;
- Avaliar legibilidade.

### Etapa 4 — Como Funciona

- Criar dados das etapas;
- Criar cards;
- Implementar interação desktop;
- Implementar comportamento mobile;
- Adicionar vídeos ou imagens;
- Testar performance.

### Etapa 5 — Resultados e Planos

- Inserir somente conteúdo confirmado;
- Criar cards;
- Criar comparativos;
- Criar tabela responsiva;
- Destacar plano principal sem exageros.

### Etapa 6 — FAQ e Contato

- Criar acordeão de FAQ;
- Criar schema de validação;
- Criar formulário;
- Implementar estados de erro e sucesso;
- Integrar WhatsApp após confirmação do número.

### Etapa 7 — SEO e Performance

- Configurar metadata;
- Adicionar Open Graph;
- Criar JSON-LD com dados confirmados;
- Otimizar imagens;
- Revisar carregamento;
- Testar acessibilidade;
- Testar Core Web Vitals.

---

## 22. Critérios de Aceitação

A landing page será considerada pronta quando:

- [ ] O projeto executar sem erros;
- [ ] A página funcionar em desktop e mobile;
- [ ] O header ocultar e reaparecer corretamente;
- [ ] O menu mobile funcionar;
- [ ] O Hero possuir CTA claro;
- [ ] A seção Sobre apresentar diferentes contextos da trajetória do Aleff;
- [ ] A seção Como Funciona possuir interação em desktop e mobile;
- [ ] As mídias estiverem otimizadas;
- [ ] A seção de resultados utilizar somente informações autorizadas;
- [ ] Os planos estiverem padronizados visualmente;
- [ ] O formulário possuir validação;
- [ ] O WhatsApp utilizar o número correto e confirmado;
- [ ] Não existirem links fictícios;
- [ ] Não existirem informações inventadas;
- [ ] As imagens possuírem textos alternativos;
- [ ] O conteúdo principal estiver indexável;
- [ ] A metadata estiver configurada;
- [ ] A página não possuir overflow horizontal;
- [ ] A página funcionar com animações reduzidas;
- [ ] Não existirem erros no console;
- [ ] O projeto passar pelo lint;
- [ ] O build de produção funcionar corretamente.

---

## 23. Dados Confirmados do Projeto

### 23.1 Nome oficial da marca

O nome oficial da marca deve ser escrito como:

```text
ACTeam
```

Utilizar essa grafia em:

- Logo textual;
- Header;
- Hero;
- Footer;
- Metadata;
- Textos institucionais;
- Dados estruturados;
- Chamadas para ação.

Não utilizar `ACTEAM` ou `Acteam` como nome principal da marca, exceto quando necessário para compatibilidade técnica ou referência histórica à versão antiga.

---

### 23.2 Biografia oficial

Manter o texto utilizado na landing page antiga:

> Atendimento presencial em Taubaté/SP e consultoria online para alunos em todo o Brasil e exterior. Especialista em unir treinamento de força e nutrição para maximizar sua performance e estética corporal.

Esse texto deverá ser utilizado como base da seção “Por que escolher a ACTeam?” ou “Sobre o Aleff”.

Não alterar o sentido da biografia sem autorização.

---

### 23.3 Localização e modalidades de atendimento

A ACTeam oferece:

- Consultoria presencial em Taubaté/SP;
- Consultoria online para alunos em todo o Brasil;
- Consultoria online para alunos no exterior.

Essas modalidades devem aparecer na seção de apresentação e também nos planos.

---

### 23.4 Número oficial do WhatsApp

Número confirmado:

```text
+55 12 97850-3248
```

Para gerar links do WhatsApp, utilizar o formato internacional sem espaços, parênteses ou hífens:

```text
5512978503248
```

O número deve ser utilizado somente em:

- Botões de contato;
- Formulário;
- CTAs;
- Links de atendimento;
- Mensagens pré-preenchidas.

Mensagem inicial sugerida:

```text
Olá, Aleff! Meu nome é {nome}. Tenho interesse em um acompanhamento da ACTeam e gostaria de saber mais sobre as opções disponíveis.
```

---

## 24. Planos Confirmados

Os planos devem ser mantidos conforme a landing page antiga.

### 24.1 ACTeam Performance

- Modalidade: Consultoria online;
- Valor: R$ 300,00;
- Consultoria online: incluída;
- Consultoria presencial: não incluída;
- Treino personalizado: incluído;
- Plano alimentar: incluído;
- Suplementação: incluída;
- Suporte via WhatsApp: incluído.

### 24.2 ACTeam Start

- Modalidade: Consultoria online;
- Valor: R$ 220,00;
- Consultoria online: incluída;
- Consultoria presencial: não incluída;
- Treino personalizado: opcional;
- Plano alimentar: opcional;
- Suplementação: não incluída;
- Suporte via WhatsApp: incluído.

Nos planos Start, o cliente escolhe entre receber um treino personalizado ou um plano alimentar.

### 24.3 ACTeam Performance Pro

- Modalidade: Consultoria presencial em Taubaté/SP;
- Valor: R$ 350,00;
- Consultoria online: não incluída;
- Consultoria presencial: incluída;
- Treino personalizado: incluído;
- Plano alimentar: incluído;
- Suplementação: incluída;
- Suporte via WhatsApp: incluído.

### 24.4 ACTeam Start Pro

- Modalidade: Consultoria presencial em Taubaté/SP;
- Valor: R$ 270,00;
- Consultoria online: não incluída;
- Consultoria presencial: incluída;
- Treino personalizado: opcional;
- Plano alimentar: opcional;
- Suplementação: não incluída;
- Suporte via WhatsApp: incluído.

Nos planos Start Pro, o cliente escolhe entre receber um treino personalizado ou um plano alimentar.

---

## 25. Matriz Comparativa dos Planos

| Recurso | ACTeam Performance | ACTeam Start | ACTeam Performance Pro | ACTeam Start Pro |
|---|:---:|:---:|:---:|:---:|
| Consultoria online | Sim | Sim | Não | Não |
| Consultoria presencial | Não | Não | Sim | Sim |
| Treino personalizado | Sim | Opcional* | Sim | Opcional* |
| Plano alimentar | Sim | Opcional* | Sim | Opcional* |
| Suplementação | Sim | Não | Sim | Não |
| Suporte via WhatsApp | Sim | Sim | Sim | Sim |

```text
* Nos planos Start e Start Pro, o cliente escolhe entre treino personalizado ou plano alimentar.
```

Os valores e recursos acima foram extraídos da landing page antiga e devem ser mantidos na nova versão, salvo solicitação posterior do responsável pela marca.

---

## 26. Fotos e Imagens

As imagens da nova landing page ainda dependem de confirmação de autorização.

Até que a confirmação seja realizada:

- Utilizar placeholders visuais;
- Não considerar as imagens como assets definitivos;
- Não publicar imagens de alunos sem autorização;
- Não publicar imagens de terceiros sem confirmação;
- Não utilizar fotos em produção como se já estivessem aprovadas.

Adicionar comentários `TODO` no código e na organização dos assets:

```text
TODO: substituir placeholder pelas fotos autorizadas do Aleff.
TODO: confirmar autorização para uso das imagens dos alunos.
TODO: selecionar imagens de competição, rotina, treinamento e atendimento.
```

Estrutura provisória:

```text
public/
└── images/
    ├── TODO-hero-aleff.jpg
    ├── TODO-sobre-aleff-01.jpg
    ├── TODO-sobre-aleff-02.jpg
    ├── TODO-alunos-01.jpg
    └── TODO-rotina-aleff-01.jpg
```

---

## 27. Depoimentos e Resultados

Os depoimentos e resultados ainda dependem de confirmação e autorização.

Até que isso aconteça:

- Utilizar placeholders;
- Não publicar nomes reais;
- Não publicar fotos de alunos;
- Não publicar métricas;
- Não afirmar resultados;
- Não criar depoimentos fictícios.

Adicionar os seguintes comentários:

```text
TODO: inserir depoimentos reais após autorização.
TODO: confirmar autorização para uso de nome e imagem dos alunos.
TODO: confirmar resultados e informações de cada transformação.
TODO: substituir conteúdo provisório por depoimentos aprovados.
```

Exemplo de placeholder visual:

```text
[DEPOIMENTO REAL A INSERIR APÓS AUTORIZAÇÃO]
```

---

## 28. Redes Sociais

As redes sociais oficiais ainda não foram confirmadas.

Até que os endereços sejam fornecidos:

- Não criar links fictícios;
- Não utilizar ícones apontando para URLs inexistentes;
- Não adicionar nomes de usuário presumidos;
- Utilizar um placeholder no Footer.

Adicionar:

```text
TODO: inserir redes sociais oficiais da ACTeam após confirmação.
```

Placeholder visual:

```text
Redes sociais em breve
```

---

## 29. Domínio

O domínio definitivo ainda não foi confirmado.

Não adicionar domínio fictício em:

- Metadata;
- Canonical URL;
- Open Graph;
- JSON-LD;
- Sitemap;
- Robots;
- Links internos.

Utilizar configuração provisória:

```text
TODO: inserir domínio definitivo da ACTeam.
```

A configuração definitiva de `metadataBase`, canonical e URLs de compartilhamento deverá ser feita somente após a confirmação do domínio.

---

## 30. Mídias da Seção "Como Funciona"

Os vídeos ou GIFs correspondentes às etapas ainda não foram confirmados.

Até que os arquivos sejam disponibilizados:

- Utilizar placeholders;
- Manter a estrutura de mídia preparada;
- Não adicionar vídeos fictícios;
- Não utilizar URLs externas desconhecidas;
- Garantir que os cards funcionem mesmo sem mídia.

Adicionar os seguintes comentários:

```text
TODO: inserir vídeo ou GIF da etapa Avaliação Inicial.
TODO: inserir vídeo ou GIF da etapa Planejamento.
TODO: inserir vídeo ou GIF da etapa Acompanhamento.
TODO: otimizar os arquivos para web.
TODO: confirmar se os arquivos possuem autorização de uso.
```

Estrutura provisória:

```text
public/
└── videos/
    ├── TODO-avaliacao-inicial.mp4
    ├── TODO-planejamento.mp4
    └── TODO-acompanhamento.mp4
```

Enquanto os vídeos não estiverem disponíveis, os cards devem exibir:

- Uma imagem placeholder;
- Um bloco visual com o número da etapa;
- Ou uma animação CSS simples e leve.

A ausência temporária dos vídeos não pode comprometer a compreensão do conteúdo.

---

## 31. Conteúdo da Seção "Como Funciona"

Manter como base o conteúdo da landing page antiga.

### Etapa 1 — Avaliação Inicial

```text
Videochamada ou presencial para conhecer sua rotina, objetivos e histórico.
```

### Etapa 2 — Planejamento

```text
Em até 3 dias úteis você recebe seu protocolo 100% individualizado.
```

### Etapa 3 — Acompanhamento

```text
Suporte via WhatsApp, ajustes periódicos e evolução contínua.
```

Esses textos podem receber ajustes de redação e design, mas o sentido deve ser preservado.

---

## 32. Conteúdo da Seção "Por que escolher a ACTeam?"

Utilizar como base o conteúdo da landing page antiga:

### Título

```text
POR QUE ESCOLHER A ACTEAM?
```

### Texto

```text
Atendimento presencial em Taubaté/SP e consultoria online para alunos em todo o Brasil e exterior. Especialista em unir treinamento de força e nutrição para maximizar sua performance e estética corporal.
```

### Diferenciais

- Consultoria conduzida pelo mesmo profissional do início ao fim;
- Nutricionista e Personal Trainer responsáveis por todo o planejamento;
- Atendimento verdadeiramente individualizado;
- Estratégias baseadas em evidências científicas;
- Ajustes constantes conforme sua evolução;
- Suporte direto via WhatsApp.

Esses diferenciais deverão ser mantidos, salvo alteração solicitada pelo Aleff.

---

## 33. Checklist de Informações Pendentes

- [x] Nome oficial da marca: ACTeam
- [x] Biografia baseada na landing page antiga
- [x] Número oficial do WhatsApp
- [x] Localização: Taubaté/SP
- [x] Modalidades: presencial e online
- [x] Planos disponíveis
- [x] Preços dos planos
- [x] Benefícios dos planos
- [ ] Confirmar fotos autorizadas
- [ ] Confirmar imagens de alunos
- [ ] Confirmar depoimentos autorizados
- [ ] Confirmar resultados que podem ser publicados
- [ ] Confirmar redes sociais oficiais
- [ ] Confirmar domínio definitivo
- [ ] Disponibilizar vídeos ou GIFs da seção “Como Funciona”
- [ ] Confirmar autorização de uso das mídias
```

Com isso, o `SPEC_LANDING_PAGE_ACTEAM.md` passa a refletir os dados reais da landing page antiga, mantendo `TODOs` somente nos itens que ainda precisam de confirmação.