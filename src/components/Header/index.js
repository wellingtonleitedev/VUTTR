import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { Container, Button, Actions, Inputs } from './styles';

export default function Header() {
  return (
    <Container>
      <h1>VUTTR</h1>
      <h3>Very Useful Tools to Remember</h3>
      <Actions>
        <Inputs>
          <input
            id="input-search"
            type="text"
            placeholder="Type what you are looking for"
          />
          <input id="input-check" type="checkbox" checked />
          <label for="input-check">search in logs only</label>
        </Inputs>
        <Button>
          <FaPlus color="#FFF" size={13} />
          Add
        </Button>
      </Actions>
    </Container>
  );
}
