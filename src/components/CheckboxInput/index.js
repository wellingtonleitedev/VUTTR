import React from 'react';
import { Container } from './styles';

export const CheckboxInput = ({ checked, onChecked }) => {
  return (
    <Container>
      <input
        id="input-check"
        type="checkbox"
        checked={checked}
        onChange={onChecked}
      />
      <label htmlFor="input-check">search in logs only</label>
    </Container>
  );
};
