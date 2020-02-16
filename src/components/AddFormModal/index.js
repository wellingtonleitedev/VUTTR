import React, { useState, useRef, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaPlus, FaPencilAlt } from 'react-icons/fa';
import { ModalHeader, Form, Actions, Button } from './styles';
import { InputLabel, InputTags, TextareaLabel, Modal } from '..';
import {
  addToolRequest,
  updateToolRequest,
} from '../../store/modules/tools/actions';
import { handleFormModal } from '../../store/modules/modal/actions';

export function AddFormModal() {
  const formRef = useRef(null);
  const open = useSelector(state => state.modal.openForm);
  const tryAgain = useSelector(state => state.modal.tryAgain);
  const isUpdate = useSelector(state => state.modal.isUpdate);
  const value = useSelector(state => state.modal.tool);
  const dispatch = useDispatch();
  const [tool, setTool] = useState({});

  useMemo(() => {
    if ((value && tryAgain) || (value && isUpdate)) {
      setTool(value);
    }
  }, [value, tryAgain, isUpdate]);

  const handleSubmit = async e => {
    e.preventDefault();
    const { _id, title, link, description, tags } = tool;

    if (isUpdate) {
      dispatch(updateToolRequest(_id, title, link, description, tags));
    } else {
      dispatch(addToolRequest(title, link, description, tags));
    }

    dispatch(handleFormModal());

    setTool({});
    formRef.current.reset();
  };

  return (
    <Modal
      open={open}
      header={
        isUpdate ? (
          <ModalHeader>
            <FaPencilAlt color="#365df0" size={15} />
            <h3>Update tool</h3>
          </ModalHeader>
        ) : (
          <ModalHeader>
            <FaPlus color="#365df0" size={15} />
            <h3>Add new tool</h3>
          </ModalHeader>
        )
      }
    >
      <Form ref={formRef}>
        <InputLabel
          required
          value={tool.title}
          id="title"
          type="text"
          onChange={text => setTool({ ...tool, title: text })}
        >
          Tool Name
        </InputLabel>
        <InputLabel
          value={tool.link}
          id="link"
          type="url"
          onChange={text => setTool({ ...tool, link: text })}
        >
          Tool Link
        </InputLabel>
        <TextareaLabel
          required
          value={tool.description}
          id="description"
          rows="5"
          onChange={text => setTool({ ...tool, description: text })}
        >
          Tool Description
        </TextareaLabel>
        <InputTags
          required
          id="tags"
          value={tool.tags}
          onChange={text => setTool({ ...tool, tags: text })}
        >
          Tool Tags
        </InputTags>
        <Actions>
          <Button type="button" onClick={e => handleSubmit(e)}>
            {isUpdate ? `Update Tool` : `Add Tool`}
          </Button>
        </Actions>
      </Form>
    </Modal>
  );
}
