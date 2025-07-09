const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const verifyToken = require('./middleware/verifyToken');

const app = express();
app.use(cors({
    origin: 'http://localhost:3000', // ou seu domínio real
    credentials: true
  }));
app.use(express.json());

app.use('/', authRoutes);
app.get('/verify', verifyToken, (req, res) => res.sendStatus(200));

module.exports = app;
