import React, { useState, useRef, useEffect } from 'react';
import { Overlay, Content, ModalHeader, Form, Actions } from './styles';
import { CancelButton } from '../CancelButton';
import { ConfirmButton } from '../ConfirmButton';
import { FaPlus } from 'react-icons/fa';
import api from '../../services/api';

export function Modal({ open, onClose }) {
  const modalRef = useRef(null);
  const overlayRef = useRef(null);
  const actionsRef = useRef(null);
  const [title, setTitle] = useState(undefined);
  const [link, setLink] = useState(undefined);
  const [description, setDescription] = useState(undefined);
  const [tags, setTags] = useState([]);
  const [situation, setSituation] = useState(open);

  useEffect(() => {
    if (open) {
      overlayRef.current.addEventListener('click', handleClose);
      setSituation(open);
    }
  }, [open]);

  const handleClose = event => {
    event.stopPropagation();

    const content = modalRef.current.contains(event.target);
    const cancel = actionsRef.current.children[0].contains(event.target);
    const confirm = actionsRef.current.children[1].contains(event.target);

    console.log(cancel);
    if (!content || cancel || confirm) {
      setSituation(false);
      onClose();
      overlayRef.current.removeEventListener('click', handleClose);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const tool = { title, link, description, tags: [tags] };

    if (!title || !link || !description || !tags) return;

    await api.post('/tools', tool);

    setSituation(false);
    onClose();
  };

  return (
    <Overlay ref={overlayRef} modalOpen={situation}>
      <Content ref={modalRef}>
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
          <Actions ref={actionsRef}>
            <CancelButton onClick={() => handleClose()}>Cancelar</CancelButton>
            <ConfirmButton type="submit">Confirmar</ConfirmButton>
          </Actions>
        </Form>
      </Content>
    </Overlay>
  );
}
