import React, { useState } from 'react';
import {
  ModalContainer,
  ModalContent,
  ModalHeader,
  Form,
  Button,
} from './styles';
import { FaPlus } from 'react-icons/fa';
import api from '../../services/api';
import Modal from '@material-ui/core/Modal';

export default function AddModal({ open, onClose }) {
  const [name, setName] = useState(undefined);
  const [link, setLink] = useState(undefined);
  const [description, setDescription] = useState(undefined);
  const [tags, setTags] = useState([]);

  const handleSubmit = async e => {
    e.preventDefault();

    const tool = { name, link, description, tags };

    try {
      await api.post('/tools', tool);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <ModalContainer>
        <ModalContent>
          <ModalHeader>
            <FaPlus color="#365df0" size={15} />
            <h3>Add new tool</h3>
          </ModalHeader>
          <Form onSubmit={() => handleSubmit()}>
            <label>Tool Name</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
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
            <Button type="submit">Confirmar</Button>
          </Form>
        </ModalContent>
      </ModalContainer>
    </Modal>
  );
}
