import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './styles';

export const IconButton = ({ onClick, color, icon, children }) => (
  <Button style={{ backgroundColor: color }} onClick={onClick}>
    {icon}
    {children}
  </Button>
);

IconButton.defaultProps = {
  color: '#365df0',
};

IconButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string,
  icon: PropTypes.element.isRequired,
  children: PropTypes.string.isRequired,
};
