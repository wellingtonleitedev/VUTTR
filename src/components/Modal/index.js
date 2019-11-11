import React, { useState, useRef, useEffect } from 'react';
import { Overlay, Content, ModalHeader, Form, Actions } from './styles';
import { CancelButton } from '../CancelButton';
import { ConfirmButton } from '../ConfirmButton';
import { FaPlus } from 'react-icons/fa';
import api from '../../services/api';
import { toast } from 'react-toastify';
import { ToastContentSuccess } from '../ToastContentSuccess';
import { ToastContentError } from '../ToastContentError';
import { InputTags } from '../InputTags';

export function Modal({ open, onClose }) {
  const modalRef = useRef(null);
  const overlayRef = useRef(null);
  const actionsRef = useRef(null);
  const inputRef = useRef(null);
  const [tool, setTool] = useState({ tags: [] });

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

  const pushTags = value => {
    let tag = undefined;
    const tags = [];

    if (value.match(/^[,]/g) || value.match(/^[ ]/g)) {
      inputRef.current.value = '';
      return;
    }

    if (value.match(/[,]/g) || value.match(/[ ]/g)) {
      tag = value.replace(' ', '');
      tag = value.replace(',', '');

      inputRef.current.value = '';
      tags.push(tag);
      setTool({ ...tool, tags: [...tool.tags, ...tags] });
    }
  };

  const removeTag = tag => {
    console.log(tag);
    // const index = tags.filter(t => t)
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const { title, link, description, tags } = tool;

    if (!title || !link || !description || !tags.length) {
      return toast.error(
        <ToastContentError>
          You need to fill in all the fields!
        </ToastContentError>
      );
    }

    await api.post('/tools', tool);

    setSituation(false);
    onClose();

    toast.success(
      <ToastContentSuccess>
        {title} has been successfully added!
      </ToastContentSuccess>
    );
    setTool({ tags: [] });
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
          <InputTags
            inputRef={inputRef}
            tags={tool.tags}
            onChange={text => pushTags(text)}
            onClick={() => console.log('teste')}
          />
          <Actions ref={actionsRef}>
            <CancelButton type="button" onClick={() => handleClose()}>
              Cancelar
            </CancelButton>
            <ConfirmButton type="submit">Confirmar</ConfirmButton>
          </Actions>
        </Form>
      </Content>
    </Overlay>
  );
}
