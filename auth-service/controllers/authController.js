const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

const SECRET = 'segredoUltraSeguro123';

exports.signup = (req, res) => {
  const { username, password } = req.body;
  if (userModel.findUser(username)) {
    return res.status(400).json({ error: 'Usuário já existe' });
  }
  userModel.createUser(username, password);
  res.status(201).json({ message: 'Usuário criado' });
};

exports.login = (req, res) => {
  const { username, password } = req.body;
  const user = userModel.findUser(username);
  if (!user || user.password !== password) {
    return res.status(401).json({ error: 'Credenciais inválidas' });
  }
  const token = jwt.sign({ username }, SECRET, { expiresIn: '1h' });
  res.json({ token });
};
