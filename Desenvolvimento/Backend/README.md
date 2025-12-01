# Bumblebee API 🚗🤖

Backend do sistema de aluguel de carros e gestão de frotas **Bumblebee**.  
Esta API RESTful gerencia todo o fluxo de veículos, clientes, categorias e reservas.

---

## 🛠 Tecnologias Utilizadas

- NestJS — Framework Node.js progressivo para aplicações server-side.
- Prisma ORM — ORM moderno para Node.js e TypeScript.
- SQLite — Banco de dados leve baseado em arquivo.
- Swagger (OpenAPI) — Documentação automática e interativa.
- TypeScript — Tipagem estática para desenvolvimento seguro.

---

## ⚙️ Instalação e Configuração

### 1. Instalar dependências
npm install

### 2. Configurar o Banco de Dados  
O projeto utiliza SQLite; o arquivo `dev.db` será criado automaticamente.

Criar e aplicar as migrations:  
npx prisma migrate dev --name init

Opcional — abrir o Prisma Studio:  
npx prisma studio

### 3. Popular o Banco (Seed)
npm run db:seed

---

## ▶️ Executando a Aplicação

Modo desenvolvimento (auto-reload):  
npm run start:dev

Modo produção:  
npm run start:prod

A API estará disponível em:  
http://localhost:3000

---

## 📚 Documentação da API

Acesse o Swagger em:  
http://localhost:3000/api

---

## 🧪 Testes

Rodar testes unitários:  
npm run test

Cobertura de testes:  
npm run test:cov

---

## 📝 Licença

Este projeto está sob a licença MIT.