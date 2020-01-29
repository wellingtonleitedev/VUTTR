import React, { useState, useRef, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaPlus } from 'react-icons/fa';
import { ModalHeader, Form, Actions, Button } from './styles';
import { InputLabel, InputTags, TextareaLabel, Modal } from '..';
import { addToolRequest } from '../../store/modules/tools/actions';
import { handleFormModal } from '../../store/modules/modal/actions';

export function AddFormModal() {
  const formRef = useRef(null);
  const open = useSelector(state => state.modal.openForm);
  const value = useSelector(state => state.modal.tool);
  const dispatch = useDispatch();
  const [tool, setTool] = useState({});

  useMemo(() => {
    if (value) {
      setTool(value);
    }
  }, [value]);

  const handleSubmit = async e => {
    e.preventDefault();
    const { title, link, description, tags } = tool;
    dispatch(addToolRequest(title, link, description, tags));
    dispatch(handleFormModal({}, false));

    formRef.current.reset();

    setTool({});
  };

  return (
    <Modal
      open={open}
      header={
        <ModalHeader>
          <FaPlus color="#365df0" size={15} />
          <h3>Add new tool</h3>
        </ModalHeader>
      }
    >
      <Form onSubmit={handleSubmit} ref={formRef}>
        <InputLabel
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
          type="text"
          onChange={text => setTool({ ...tool, link: text })}
        >
          Tool Link
        </InputLabel>
        <TextareaLabel
          value={tool.description}
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
