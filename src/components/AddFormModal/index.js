/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useRef, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { FaPlus } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { ModalHeader, Form, Actions } from './styles';
import { ConfirmButton, InputTags, Modal } from '..';
import { addToolRequest } from '../../store/modules/tools/actions';

export default function AddFormModal({ open, onClose }) {
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const [tool, setTool] = useState({ tags: [] });
  const [situation, setSituation] = useState(open);

  useMemo(() => {
    setSituation(open);
  }, [open]);

  const handleSubmit = async e => {
    e.preventDefault();

    dispatch(addToolRequest(tool));

    formRef.current.reset();

    setTool({ tags: [] });
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
      <Form onSubmit={handleSubmit} ref={formRef}>
        <label htmlFor="name">Tool Name</label>
        <input
          id="name"
          type="text"
          onChange={e => setTool({ ...tool, title: e.target.value })}
        />
        <label htmlFor="link">Tool Link</label>
        <input
          id="link"
          type="text"
          onChange={e => setTool({ ...tool, link: e.target.value })}
        />
        <label htmlFor="description">Tool Description</label>
        <textarea
          id="description"
          rows="5"
          onChange={e => setTool({ ...tool, description: e.target.value })}
        />
        <label htmlFor="tags">Tool Tags</label>
        <InputTags
          id="tags"
          onChange={text => setTool({ ...tool, tags: text })}
        />
        <Actions>
          <ConfirmButton type="submit">Add Tool</ConfirmButton>
        </Actions>
      </Form>
    </Modal>
  );
}

AddFormModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
