import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductEdit from './ProductEdit';

export default function ProductList({ refresh, onUpdated }) {
  const [produtos, setProdutos] = useState([]);
  const [editProduto, setEditProduto] = useState(null);

  useEffect(() => {
    fetchProdutos();
  }, [refresh]);

  const fetchProdutos = async () => {
    const res = await axios.get('http://localhost:3001/produtos', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    setProdutos(res.data);
  };

  const remover = async (id) => {
    await axios.delete(`http://localhost:3001/produtos/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    fetchProdutos();
    onUpdated();
  };

  return (
    <>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Categoria</th>
            <th>Quantidade</th>
            <th>Preço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map(p => (
            <tr
              key={p.id}
              style={p.quantidade < 5 ? { backgroundColor: '#ffeeba' } : {}}
            >
              <td>{p.nome}</td>
              <td>{p.categoria}</td>
              <td>{p.quantidade}</td>
              <td>R$ {Number(p.preco).toFixed(2)}</td>
              <td>
                <button onClick={() => setEditProduto(p)}>Editar</button>
                <button onClick={() => remover(p.id)}>Remover</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editProduto && (
        <ProductEdit
          produto={editProduto}
          onClose={() => setEditProduto(null)}
          onUpdated={() => {
            setEditProduto(null);
            fetchProdutos();
            onUpdated();
          }}
        />
      )}
    </>
  );
}
