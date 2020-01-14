import React from 'react';
import PropTypes from 'prop-types';
import { Label, Input } from './styles';

export function InputLabel({ id, children, onChange, ...rest }) {
  return (
    <Label htmlFor={id}>
      {children}
      <Input {...rest} onChange={e => onChange(e.target.value)} />
    </Label>
  );
}

InputLabel.defaultProps = {
  children: null,
};

InputLabel.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
