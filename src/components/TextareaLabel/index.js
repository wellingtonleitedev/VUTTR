import React from 'react';
import PropTypes from 'prop-types';
import { Label, Textarea } from './styles';

export const TextareaLabel = ({
  id,
  value,
  cols,
  rows,
  children,
  onChange,
}) => {
  return (
    <Label htmlFor={id}>
      {children}
      <Textarea
        id={id}
        value={value}
        cols={cols}
        rows={rows}
        onChange={e => onChange(e.target.value)}
      />
    </Label>
  );
};

TextareaLabel.defaultProps = {
  value: '',
  children: '',
  cols: '',
  rows: '5',
};

TextareaLabel.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  cols: PropTypes.string,
  rows: PropTypes.string,
  children: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
