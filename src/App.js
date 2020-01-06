import React from 'react';
import Routes from './routes';
import { Global } from './style/global';
import { Provider } from 'react-redux';
import store from './store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store}>
      <Global />
      <Routes />
      <ToastContainer className="toast-container" />
    </Provider>
  );
}

export default App;
