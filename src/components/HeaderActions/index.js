import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaPlus } from 'react-icons/fa';
import { Container, Inputs } from './styles';
import { IconButton, InputSearch, CheckboxInput, Header } from '..';
import { fetchToolsRequest } from '../../store/modules/tools/actions';
import { handleFormModal } from '../../store/modules/modal/actions';

export function HeaderActions() {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);

  const handleSearch = text => {
    if (checked) return dispatch(fetchToolsRequest({ tags_like: text }));

    return dispatch(fetchToolsRequest({ q: text }));
  };

  const openModal = () => {
    dispatch(handleFormModal({}, true));
  };

  return (
    <>
      <Header />
      <Container>
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
      </Container>
    </>
  );
}
