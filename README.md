# Portfólio Breno Martins

Este projeto é um portfólio pessoal desenvolvido em React + TypeScript, com foco em apresentar experiências, tecnologias e projetos de forma profissional.

## Objetivo

Disponibilizar uma página de portfólio moderna, responsiva e fácil de publicar para recrutadores e visitantes.

## Tecnologias utilizadas

- React
- TypeScript
- TailwindCSS
- Framer Motion
- React Scroll
- React Icons

## Pré-requisitos

Antes de começar, você precisa ter instalado:

- Node.js (recomendado: versão LTS)
- npm (normalmente já vem com o Node.js)

## Como rodar o projeto (passo a passo)

### 1) Instalar dependências

```bash
npm install
npm --prefix portfolio-cra install
```

O que você está fazendo aqui:

- `npm install`: instala dependências da pasta raiz.
- `npm --prefix portfolio-cra install`: instala as dependências da aplicação React que está dentro da pasta `portfolio-cra`.

### 2) Iniciar o projeto em ambiente de desenvolvimento

```bash
npm run start
```

O que você está fazendo aqui:

- Executa o script da raiz que encaminha automaticamente para `portfolio-cra`.
- Inicia o servidor local para desenvolvimento.
- Normalmente abre em `http://localhost:3000`.

### 3) Gerar build de produção

```bash
npm run build
```

O que você está fazendo aqui:

- Cria uma versão otimizada do projeto para publicação.
- Os arquivos finais são gerados em `portfolio-cra/build`.

### 4) Rodar testes

```bash
npm run test
```

O que você está fazendo aqui:

- Executa os testes configurados no projeto.

## Scripts disponíveis na raiz

- `npm run start`: inicia o projeto localmente
- `npm run dev`: alias para `start`
- `npm run build`: gera build de produção
- `npm run test`: executa testes

## Estrutura resumida

```text
PORTIFOLIO-BRENOMARTINS/
├─ package.json                # Scripts para executar tudo pela raiz
└─ portfolio-cra/
   ├─ package.json             # Dependências e scripts da aplicação React
   ├─ src/
   │  └─ App.tsx               # Componente principal da interface
   └─ build/                   # Saída gerada no build de produção
```

## Publicação (deixar online)

Rodar localmente (`npm run start`) não deixa o site público. Para compartilhar com recrutadores, publique em uma plataforma.

### Opção recomendada: Vercel

1. Suba o projeto para o GitHub.
2. Conecte o repositório na Vercel.
3. Configure:
   - Root Directory: `portfolio-cra`
   - Build Command: `npm run build`
   - Output Directory: `build`
4. Clique em Deploy.

Resultado:

- Você receberá um link público (`https://...vercel.app`) para compartilhar.

### Opção alternativa: Netlify

Configuração equivalente:

- Base directory: `portfolio-cra`
- Build command: `npm run build`
- Publish directory: `build`

## Problemas comuns e solução

### Avisos de depreciação no terminal

Mensagens como `DeprecationWarning` podem aparecer devido ao `react-scripts` (CRA). Em geral, não impedem execução.

### Porta em uso

Se a porta 3000 estiver ocupada, o terminal perguntará se deseja usar outra porta. Confirme com `Y`.

### Build falhando por dependências

Execute novamente:

```bash
npm --prefix portfolio-cra install
npm run build
```

## Contato

Se quiser ajustar conteúdo, projetos ou links sociais, edite `portfolio-cra/src/App.tsx`.