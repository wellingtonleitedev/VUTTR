import React, { useState } from 'react';
import { Container, Content, ModalHeader, Form, Actions } from './styles';
import { CancelButton } from '../CancelButton';
import { ConfirmButton } from '../ConfirmButton';
import { FaPlus } from 'react-icons/fa';
import api from '../../services/api';

export function Modal({ onClose }) {
  const [title, setTitle] = useState(undefined);
  const [link, setLink] = useState(undefined);
  const [description, setDescription] = useState(undefined);
  const [tags, setTags] = useState([]);

  const handleSubmit = async e => {
    e.preventDefault();

    const tool = { title, link, description, tags: [tags] };

    await api.post('/tools', tool);

    onClose();
  };

  return (
    <Container>
      <Content>
        <ModalHeader>
          <FaPlus color="#365df0" size={15} />
          <h3>Add new tool</h3>
        </ModalHeader>
        <Form onSubmit={handleSubmit}>
          <label>Tool Name</label>
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <label>Tool Link</label>
          <input
            type="text"
            value={link}
            onChange={e => setLink(e.target.value)}
          />
          <label>Tool Description</label>
          <textarea
            rows="5"
            value={description}
            onChange={e => setDescription(e.target.value)}
          ></textarea>
          <label>Tool Tags</label>
          <input value={tags} onChange={e => setTags(e.target.value)} />
          <Actions>
            <CancelButton onClick={() => onClose()}>Cancelar</CancelButton>
            <ConfirmButton type="submit">Confirmar</ConfirmButton>
          </Actions>
        </Form>
      </Content>
    </Container>
  );
}
