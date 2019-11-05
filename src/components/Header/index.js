import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { Container, Actions, Inputs } from './styles';
import { IconButton } from '../IconButton';
import { SearchInput } from '../SearchInput';
import { CheckboxInput } from '../CheckboxInput';

export const Header = ({ onChange, onChecked, onClick, value, checked }) => {
  return (
    <Container>
      <h1>VUTTR</h1>
      <h3>Very Useful Tools to Remember</h3>
      <Actions>
        <Inputs>
          <SearchInput value={value} onChange={onChange} />
          <CheckboxInput checked={checked} onChecked={onChecked} />
        </Inputs>
        <IconButton
          onClick={onClick}
          color="#365df0"
          icon={<FaPlus color="#FFF" size={13} />}
        >
          Add
        </IconButton>
      </Actions>
    </Container>
  );
};
