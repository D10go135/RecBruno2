import React, { useState } from 'react';
import axios from 'axios';

export default function ProductForm({ onAdd }) {
  const [nome, setNome] = useState('');
  const [categoria, setCategoria] = useState('');
  const [quantidade, setQuantidade] = useState(0);
  const [preco, setPreco] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');

    try {
      await axios.post('http://localhost:3001/produtos', {
        nome,
        categoria,
        quantidade: Number(quantidade),
        preco: parseFloat(preco)
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setNome('');
      setCategoria('');
      setQuantidade(0);
      setPreco('');
      onAdd();
    } catch (error) {
      console.error('Erro ao cadastrar produto:', error);
      alert('Erro ao cadastrar: verifique autenticação e backend.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome" required />
      <input value={categoria} onChange={(e) => setCategoria(e.target.value)} placeholder="Categoria" />
      <input type="number" value={quantidade} onChange={(e) => setQuantidade(e.target.value)} placeholder="Quantidade" />
      <input type="number" step="0.01" value={preco} onChange={(e) => setPreco(e.target.value)} placeholder="Preço" />
      <button type="submit">Cadastrar Produto</button>
    </form>
  );
}
