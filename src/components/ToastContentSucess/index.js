import React, { Fragment } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

// import { Container } from './styles';

export const ToastContentSucess = ({ children }) => {
  return (
    <Fragment>
      <div>
        <FaCheckCircle />
      </div>
      <div>{children}</div>
    </Fragment>
  );
};
