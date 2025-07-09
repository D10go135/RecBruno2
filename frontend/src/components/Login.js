import React, { useState } from 'react';
import axios from 'axios';

export default function Login({ onAuth }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:3002/login', {
        username,
        password
      }, {
        withCredentials: true // habilita envio/recebimento de cookies
      });

      const token = res.data.token;
      if (token) {
        localStorage.setItem('token', token);
        onAuth();
      } else {
        alert('Token não recebido');
      }
    } catch (err) {
      console.error('Erro ao fazer login:', err);
      alert('Login falhou. Verifique usuário e senha.');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Usuário" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" />
      <button type="submit">Entrar</button>
    </form>
  );
}
