import React, { useState, useRef, useMemo } from 'react';
import { ModalHeader, Form, Actions } from './styles';
import { CancelButton, ConfirmButton, InputTags, Modal } from '../';
import { useDispatch } from 'react-redux';
import { FaPlus } from 'react-icons/fa';
import { addToolRequest } from '../../store/modules/tools/actions';

export default function AddFormModal({ open, onClose }) {
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const [tool, setTool] = useState({});
  const [situation, setSituation] = useState(open);

  useMemo(() => {
    setSituation(open);
  }, [open]);

  const handleModal = e => {
    e.preventDefault();

    setSituation(!open);
    onClose();
  };

  const handleSubmit = async e => {
    e.preventDefault();

    dispatch(addToolRequest(tool));

    setTool({});
    setSituation(false);
    onClose();
  };

  return (
    <Modal
      open={situation}
      onClose={onClose}
      header={
        <ModalHeader>
          <FaPlus color="#365df0" size={15} />
          <h3>Add new tool</h3>
        </ModalHeader>
      }
    >
      <Form ref={formRef}>
        <label>Tool Name</label>
        <input
          value={tool.title}
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
        <InputTags onChange={text => setTool({ ...tool, tags: text })} />
        <Actions>
          <CancelButton type="button" onClick={handleModal}>
            Cancelar
          </CancelButton>
          <ConfirmButton type="submit" onClick={handleSubmit}>
            Confirmar
          </ConfirmButton>
        </Actions>
      </Form>
    </Modal>
  );
}
