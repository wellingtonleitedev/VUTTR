import React, { useState } from 'react';
import {
  ModalContainer,
  ModalContent,
  ModalHeader,
  Form,
  Actions,
} from './styles';
import { FaPlus } from 'react-icons/fa';
import api from '../../services/api';
import Modal from '@material-ui/core/Modal';
import { ConfirmButton } from '../ConfirmButton';
import { CancelButton } from '../CancelButton';

export default function AddModal({ open, onClose }) {
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
    <Modal open={open} onClose={onClose}>
      <ModalContainer>
        <ModalContent>
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
        </ModalContent>
      </ModalContainer>
    </Modal>
  );
}
