import axios from 'axios';
import { store } from '../store';
import { logoutRequest } from '../store/modules/auth/actions';
import { toastError } from '../helpers';
import { ROUTES } from '../constraints';

const api = axios.create({
  baseURL: ROUTES.BASE_URL,
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
    const { data, statusText } = error.response;

    if (!data) return toastError('Connection not found');

    if (statusText === 'Unauthorized') {
      store.dispatch(logoutRequest());
      return toastError('you are probably not authorized');
    }

    return toastError(data.message);
  }
);
export default api;
