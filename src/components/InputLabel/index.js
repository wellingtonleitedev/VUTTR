import React from 'react';
import PropTypes from 'prop-types';
import { Label, Input } from './styles';

export const InputLabel = ({ id, type, value, children, onChange }) => {
  return (
    <Label htmlFor={id}>
      {children}
      <Input
        id={id}
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </Label>
  );
};

InputLabel.defaultProps = {
  value: '',
  children: '',
};

InputLabel.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  children: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
