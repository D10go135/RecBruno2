const model = require('../models/productModel');

exports.list = async (req, res) => {
  const produtos = await model.getAll();
  res.json(produtos);
};

exports.create = async (req, res) => {
  const { nome, categoria, quantidade, preco } = req.body;
  const id = await model.create(nome, categoria, quantidade, preco);
  res.status(201).json({ id });
};

exports.update = async (req, res) => {
  const id = req.params.id;
  await model.update(id, req.body);
  res.sendStatus(204);
};

exports.remove = async (req, res) => {
  const id = req.params.id;
  await model.remove(id);
  res.sendStatus(204);
};
