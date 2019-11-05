import React from 'react';
import { FaPlus, FaSearch } from 'react-icons/fa';
import { Container, Button, Actions, Inputs } from './styles';

export default function Header({ onChange, onClick, value }) {
  return (
    <Container>
      <h1>VUTTR</h1>
      <h3>Very Useful Tools to Remember</h3>
      <Actions>
        <Inputs>
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
          <input id="input-check" type="checkbox" />
          <label htmlFor="input-check">search in logs only</label>
        </Inputs>
        <Button onClick={onClick}>
          <FaPlus color="#FFF" size={13} />
          Add
        </Button>
      </Actions>
    </Container>
  );
}
