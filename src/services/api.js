import axios from 'axios';
import { store } from '../store';

const api = axios.create({
  baseURL: 'https://vuttrapi.herokuapp.com:3000',
});

api.interceptors.request.use(async config => {
  const { token } = store.getState().auth;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
