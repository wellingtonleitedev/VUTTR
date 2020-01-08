import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import Routes from './routes';
import { Global } from './style/global';
import store from './store';
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
