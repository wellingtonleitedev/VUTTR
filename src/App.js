import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from 'react-router-dom';
import Routes from './routes';
import history from './services/history';
import { Global } from './style/global';
import { store, persistor } from './store';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Global />
          <Routes />
          <ToastContainer className="toast-container" />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
