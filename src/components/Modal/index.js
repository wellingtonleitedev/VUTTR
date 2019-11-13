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
  const inputRef = useRef(null);
  const [tool, setTool] = useState({ tags: [] });

  const [situation, setSituation] = useState(open);

  useEffect(() => {
    if (open) {
      setSituation(open);
    }
  }, [open]);

  const handleClose = event => {
    event.preventDefault();

    setSituation(false);
    onClose();
    setTool({ tags: [] });
  };

  const pushTags = value => {
    let tag = undefined;

    if (value.match(/^[,]/g) || value.match(/^[ ]/g)) {
      inputRef.current.value = '';
      return;
    }

    if (value.match(/[,]/g) || value.match(/[ ]/g)) {
      tag = value.replace(' ', '');
      tag = tag.replace(',', '');

      inputRef.current.value = '';
      setTool({ ...tool, tags: [...tool.tags, tag] });
    }
  };

  const handleRemoveForEvent = event => {
    const tags = tool.tags;

    if (!inputRef.current.value && event.key === 'Backspace') {
      tags.pop();
    }

    setTool({ ...tool, tags });
  };

  const handleRemove = index => {
    const tags = tool.tags;

    tags.splice(index, 1);

    setTool({ ...tool, tags });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const { title, link, description, tags } = tool;

    if (!title || !link || !description || !tags.length) {
      toast.error(
        <ToastContentError>
          You need to fill in all the fields!
        </ToastContentError>
      );
    } else {
      await api.post('/tools', tool);

      toast.success(
        <ToastContentSuccess>
          {title} has been successfully added!
        </ToastContentSuccess>
      );
    }

    setSituation(false);
    onClose();

    setTool({ tags: [] });
  };

  return (
    <Overlay modalOpen={situation}>
      <Content>
        <ModalHeader>
          <FaPlus color="#365df0" size={15} />
          <h3>Add new tool</h3>
        </ModalHeader>
        <Form>
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
            onKeyDown={event => handleRemoveForEvent(event)}
            onChange={text => pushTags(text)}
            onClick={index => handleRemove(index)}
          />
          <Actions>
            <CancelButton type="button" onClick={handleClose}>
              Cancelar
            </CancelButton>
            <ConfirmButton type="submit" onClick={handleSubmit}>
              Confirmar
            </ConfirmButton>
          </Actions>
        </Form>
      </Content>
    </Overlay>
  );
}
