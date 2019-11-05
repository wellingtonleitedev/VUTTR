import React from 'react';
import { Button } from './styles';

export const ConfirmButton = ({ children, onClick }) => (
  <Button onClick={onClick}>{children}</Button>
);
