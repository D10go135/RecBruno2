import axios from 'axios';

const API_URL = 'http://localhost:3001';
const AUTH_URL = 'http://localhost:3002';

const getApi = () => {
  const token = localStorage.getItem('token');
  return axios.create({
    baseURL: API_URL,
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

export const getProdutos = () => getApi().get('/produtos');
export const createProduto = (data) => getApi().post('/produtos', data);
export const updateProduto = (id, data) => getApi().put(`/produtos/${id}`, data);
export const deleteProduto = (id) => getApi().delete(`/produtos/${id}`);


export const signup = (data) => axios.post(`${AUTH_URL}/signup`, data);
export const login = (data) => axios.post(`${AUTH_URL}/login`, data);


