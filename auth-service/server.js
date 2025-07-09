const app = require('./app');
const PORT = 3002;

app.listen(PORT, () => {
  console.log(`auth-service rodando na porta ${PORT}`);
});
