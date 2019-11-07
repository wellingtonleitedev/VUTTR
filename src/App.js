import React, { Fragment } from 'react';
import Routes from './routes';
import { Global } from './style/global';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Fragment>
      <Global />
      <Routes />
      <ToastContainer />
    </Fragment>
  );
}

export default App;
