import React from 'react';
import { useSelector } from 'react-redux';
import { FaPlus } from 'react-icons/fa';
import { ModalHeader, Form } from './styles';
import { InputLabel, InputTags, TextareaLabel, Modal } from '..';

export default function ViewModal() {
  const open = useSelector(state => state.modal.openView);

  console.log(open);

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
      <Form>
        <InputLabel id="title" type="text" disabled onChange={() => {}} />
        <InputLabel id="link" type="text" disabled onChange={() => {}} />
        <TextareaLabel id="description" rows="5" disabled onChange={() => {}} />
        <InputTags id="tags" disabled onChange={() => {}} />
      </Form>
    </Modal>
  );
}
