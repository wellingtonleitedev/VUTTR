import React from 'react';
import PropTypes from 'prop-types';
import { Label, Textarea } from './styles';

export const TextareaLabel = ({ id, cols, rows, children, onChange }) => {
  return (
    <Label htmlFor={id}>
      {children}
      <Textarea
        id={id}
        cols={cols}
        rows={rows}
        onChange={e => onChange(e.target.value)}
      />
    </Label>
  );
};

TextareaLabel.defaultProps = {
  children: '',
  cols: '',
  rows: '5',
};

TextareaLabel.propTypes = {
  id: PropTypes.string.isRequired,
  cols: PropTypes.string,
  rows: PropTypes.string,
  children: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
