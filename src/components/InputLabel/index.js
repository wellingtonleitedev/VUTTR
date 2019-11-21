import React from 'react';
import PropTypes from 'prop-types';
import { Label, Input } from './styles';

export const InputLabel = ({ id, type, children, onChange }) => {
  return (
    <Label htmlFor={id}>
      {children}
      <Input id={id} type={type} onChange={e => onChange(e.target.value)} />
    </Label>
  );
};

InputLabel.defaultProps = {
  children: '',
};

InputLabel.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  children: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
