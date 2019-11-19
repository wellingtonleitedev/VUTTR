import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { Container, Actions, Inputs } from './styles';
import { IconButton, SearchInput, CheckboxInput } from '../';
import api from '../../services/api';
import { useDispatch } from 'react-redux';

export const Header = ({ onClick, value }) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);

  const fetchTools = async () => {
    const tools = await api.get('/tools');
    dispatch({ type: 'REQUEST_TOOLS', payload: tools.data });
  };

  const handleSearch = async search => {
    if (!search) return fetchTools();
    let tools = undefined;

    if (checked) {
      tools = await api.get(`/tools?tags_like=${search}`);
    } else {
      tools = await api.get(`/tools?q=${search}`);
    }

    dispatch({ type: 'SEARCH_TOOLS', payload: tools.data });
  };

  return (
    <Container>
      <h1>VUTTR</h1>
      <h3>Very Useful Tools to Remember</h3>
      <Actions>
        <Inputs>
          <SearchInput
            value={value}
            onChange={e => handleSearch(e.target.value)}
          />
          <CheckboxInput
            checked={checked}
            onChecked={() => setChecked(!checked)}
          />
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
