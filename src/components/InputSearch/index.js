import React from 'react';
import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Container } from './styles';

export const InputSearch = ({ onChange }) => {
  return (
    <Container>
      <button type="button">
        <FaSearch color="#B1ADB9" size={14} />
      </button>
      <input
        id="input-search"
        type="text"
        placeholder="Type what you are looking for"
        onChange={onChange}
      />
    </Container>
  );
};

InputSearch.propTypes = {
  onChange: PropTypes.func.isRequired,
};
