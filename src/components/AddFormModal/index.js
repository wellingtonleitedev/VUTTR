/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useRef, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { FaPlus } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { ModalHeader, Form, Actions, Button } from './styles';
import { InputLabel, InputTags, TextareaLabel, Modal } from '..';
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
        <InputLabel
          id="title"
          type="text"
          onChange={text => setTool({ ...tool, title: text })}
        >
          Tool Name
        </InputLabel>
        <InputLabel
          id="link"
          type="text"
          onChange={text => setTool({ ...tool, link: text })}
        >
          Tool Link
        </InputLabel>
        <TextareaLabel
          id="description"
          rows="5"
          onChange={text => setTool({ ...tool, description: text })}
        >
          Tool Description
        </TextareaLabel>
        <InputTags
          id="tags"
          value={tool.tags}
          onChange={text => setTool({ ...tool, tags: text })}
        >
          Tool Tags
        </InputTags>
        <Actions>
          <Button type="submit">Add Tool</Button>
        </Actions>
      </Form>
    </Modal>
  );
}

AddFormModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
