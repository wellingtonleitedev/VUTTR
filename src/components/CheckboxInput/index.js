/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
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

CheckboxInput.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChecked: PropTypes.func.isRequired,
};
