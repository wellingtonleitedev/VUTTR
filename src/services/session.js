import { store } from '../store';
import { logoutRequest } from '../store/modules/auth/actions';

export default async error => {
  if (error.response.statusText === 'Unauthorized') {
    store.dispatch(logoutRequest());
  }
};
