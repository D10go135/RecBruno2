const app = require('./app');
const PORT = 3001;

app.listen(PORT, () => {
  console.log(` task-service rodando na porta ${PORT}`);
});
