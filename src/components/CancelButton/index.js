import React from 'react';
import { Button } from './styles';

export const CancelButton = ({ children, onClick }) => (
  <Button onClick={onClick}>{children}</Button>
);
