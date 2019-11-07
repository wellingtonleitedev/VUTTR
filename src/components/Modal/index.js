import React, { useState, useRef, useEffect } from 'react';
import { Overlay, Content, ModalHeader, Form, Actions } from './styles';
import { CancelButton } from '../CancelButton';
import { ConfirmButton } from '../ConfirmButton';
import { FaPlus } from 'react-icons/fa';
import api from '../../services/api';
import { toast } from 'react-toastify';

export function Modal({ open, onClose }) {
  const modalRef = useRef(null);
  const overlayRef = useRef(null);
  const actionsRef = useRef(null);
  const [tool, setTool] = useState({});

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

    if (!content || cancel || confirm) {
      setSituation(false);
      onClose();
      overlayRef.current.removeEventListener('click', handleClose);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();

    console.log(tool);
    const { title, link, description, tags } = tool;

    if (!title || !link || !description || !tags.length) return;

    await api.post('/tools', tool);

    setSituation(false);
    onClose();

    toast.success(`${title} foi adicionado com sucesso!`);
    setTool({});
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
            onChange={e => setTool({ ...tool, title: e.target.value })}
          />
          <label>Tool Link</label>
          <input
            type="text"
            onChange={e => setTool({ ...tool, link: e.target.value })}
          />
          <label>Tool Description</label>
          <textarea
            rows="5"
            onChange={e => setTool({ ...tool, description: e.target.value })}
          ></textarea>
          <label>Tool Tags</label>
          <input
            multiple
            onChange={e => setTool({ ...tool, tags: [e.target.value] })}
          />
          <Actions ref={actionsRef}>
            <CancelButton onClick={() => handleClose()}>Cancelar</CancelButton>
            <ConfirmButton type="submit">Confirmar</ConfirmButton>
          </Actions>
        </Form>
      </Content>
    </Overlay>
  );
}
