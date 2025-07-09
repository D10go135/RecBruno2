import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ProductEditModal({ produto, onClose, onUpdated }) {
  const [form, setForm] = useState({
    nome: '',
    categoria: '',
    quantidade: 0,
    preco: ''
  });

  useEffect(() => {
    if (produto) {
      setForm({
        nome: produto.nome,
        categoria: produto.categoria,
        quantidade: produto.quantidade,
        preco: produto.preco
      });
    }
  }, [produto]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3001/produtos/${produto.id}`, form, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    onUpdated(); 
    onClose();   
  };

  if (!produto) return null;

  return (
    <div style={{ background: '#0009', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
      <div style={{
        background: '#fff', padding: 20, maxWidth: 400, margin: '100px auto', borderRadius: 8
      }}>
        <h2>Editar Produto</h2>
        <form onSubmit={handleSubmit}>
          <input name="nome" value={form.nome} onChange={handleChange} placeholder="Nome" required />
          <input name="categoria" value={form.categoria} onChange={handleChange} placeholder="Categoria" />
          <input type="number" name="quantidade" value={form.quantidade} onChange={handleChange} placeholder="Quantidade" />
          <input type="number" step="0.01" name="preco" value={form.preco} onChange={handleChange} placeholder="Preço" />
          <div style={{ marginTop: 12 }}>
            <button type="submit">Salvar</button>
            <button type="button" onClick={onClose} style={{ marginLeft: 8 }}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
