import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Container } from './styles';

export const SearchInput = ({ value, onChange }) => {
  return (
    <Container>
      <button>
        <FaSearch color="#B1ADB9" size={14} />
      </button>
      <input
        id="input-search"
        type="text"
        placeholder="Type what you are looking for"
        value={value}
        onChange={onChange}
      />
    </Container>
  );
};
