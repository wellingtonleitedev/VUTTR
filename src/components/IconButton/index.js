import React from 'react';
import { Button } from './styles';

export const IconButton = ({ onClick, color, icon, children }) => (
  <Button style={{ backgroundColor: color }} onClick={onClick}>
    {icon}
    {children}
  </Button>
);
