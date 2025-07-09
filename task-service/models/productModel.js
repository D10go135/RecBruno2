const db = require('../database/db');

exports.getAll = async () => {
  const [rows] = await db.query('SELECT * FROM produtos');
  return rows;
};

exports.create = async (nome, categoria, quantidade, preco) => {
  const [result] = await db.query(
    'INSERT INTO produtos (nome, categoria, quantidade, preco) VALUES (?, ?, ?, ?)',
    [nome, categoria, quantidade, preco]
  );
  return result.insertId;
};

exports.update = async (id, { nome, categoria, quantidade, preco }) => {
  const fields = [];
  const values = [];

  if (nome) { fields.push('nome = ?'); values.push(nome); }
  if (categoria) { fields.push('categoria = ?'); values.push(categoria); }
  if (quantidade !== undefined) { fields.push('quantidade = ?'); values.push(quantidade); }
  if (preco !== undefined) { fields.push('preco = ?'); values.push(preco); }

  values.push(id);

  const query = `UPDATE produtos SET ${fields.join(', ')} WHERE id = ?`;
  await db.query(query, values);
};

exports.remove = async (id) => {
  await db.query('DELETE FROM produtos WHERE id = ?', [id]);
};
