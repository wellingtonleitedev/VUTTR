import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Container, Actions, Inputs } from './styles';
import { IconButton, InputSearch, CheckboxInput } from '..';
import { searchToolsRequest } from '../../store/modules/tools/actions';
import { handleFormModal } from '../../store/modules/modal/actions';

export const Header = () => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);

  const handleSearch = text => {
    dispatch(searchToolsRequest(text, checked));
  };

  const openModal = () => {
    dispatch(handleFormModal({}, true));
  };

  return (
    <Container>
      <h1>VUTTR</h1>
      <h3>Very Useful Tools to Remember</h3>
      <Actions>
        <Inputs>
          <InputSearch onChange={e => handleSearch(e.target.value)} />
          <CheckboxInput
            checked={checked}
            onChecked={() => setChecked(!checked)}
          />
        </Inputs>
        <IconButton
          onClick={() => openModal()}
          color="#365df0"
          icon={<FaPlus color="#FFF" size={13} />}
        >
          Add
        </IconButton>
      </Actions>
    </Container>
  );
};
