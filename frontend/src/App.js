import React, { useState, useEffect } from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import Login from './components/Login';

function App() {
  const [auth, setAuth] = useState(false);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuth(true);
    }
  }, []);

  if (!auth) {
    return <Login onAuth={() => setAuth(true)} />;
  }

  return (
    <div>
      <h1>Controle de Inventário</h1>
      <ProductForm onAdd={() => setRefresh(!refresh)} />
      <ProductList refresh={refresh} />
    </div>
  );
}

export default App;
