Estrutura das pastas
/frontend           # React App
/backend
  /auth-service     # Serviço de autenticação (login/cadastro/verify)
  /task-service     # Serviço de produtos (rota protegida /produtos)
Instalar as dependencias com npm install e rodar o frontend com npm start
Fazer o comando docker-compose up -d para contenerização

Frontend:
Biblioteca         / Ferramenta	Finalidade
React	              Criação da interface web
Axios	              Requisições HTTP para APIs
React Router 	      Navegação entre páginas
localStorage 	      Armazenar o token JWT
Create React App	  Ambiente de desenvolvimento

Backend - Auth Service (auth-service)
Pacote         / Lib	Finalidade
Express	        Servidor Node.js
jsonwebtoken	  Geração e validação de JWT
Cors	          Permitir acesso entre domínios
Axios	          Comunicação entre serviços 

Backend - Task Service (task-service)
Pacote          / Lib	Finalidade
Express	        Servidor para API de produtos
Axios	          Validação do token via auth-service
Cors	          Comunicação com frontend
jsonwebtoken 	 Validação de token local 

Dificuldade:
Tive dificuldade na autorização do token na hora de criar os produtos.


