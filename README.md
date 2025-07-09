# Bruno - Sistema Fullstack

Sistema desenvolvido para gerenciar um inventário de produtos, utilizando Node.js com Express no backend, React no frontend e MySQL como banco de dados.
Sendo um sitema com microsserviços como 

## Tecnologias Utilizadas

### Backend
- Node.js
- Express
- MySQL
- Cors


### Frontend
- React
- Vite
- Axios


## Como Rodar o Projeto

### Pré-requisitos
- Node.js
- MySQL
- React
- npm ou yarn

### 1. Clonar o repositório
```bash
git clone https://github.com/D10go135/RecBruno2.git
cd RecBruno2
```

### 2. Configurar o Backend

#### 2.1 Instalar dependências
```bash
cd auth-service
npm install
```

#### 2.2 Rodar servidor backend
```bash
node server.js
```
#### 2.3 Instalar dependências
```bash
cd task-service
npm install
```

#### 2.4 Rodar servidor backend
```bash
node server.js
```

### 3. Configurar o Frontend

#### 3.1 Instalar dependências
```bash
cd ../frontend
npm install
```

#### 3.2 Rodar aplicação React
```bash
npm start
```

### 4. Configurar o docker

#### 4.1 Rodar docker
```bash
docker-compose up -d

```

A aplicação estará disponível em `http://localhost:3000`.
## Dificuldades:
Deu problema na autorização do token na hora da criação de produtos.
