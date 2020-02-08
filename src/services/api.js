import axios from 'axios';
import { store } from '../store';
import { logoutRequest } from '../store/modules/auth/actions';
import { toastError } from '../helpers';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

api.interceptors.request.use(async config => {
  const { token } = store.getState().auth;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  async config => {
    return config;
  },
  error => {
    const { data } = error.response;

    if (error.response.statusText === 'Unauthorized') {
      store.dispatch(logoutRequest());
      return toastError('you are probably not authorized');
    }

    return toastError(data.message);
  }
);
export default api;
