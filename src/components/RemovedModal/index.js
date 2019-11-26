import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaTools } from 'react-icons/fa';
import { ModalHeader, Content, Description, Tags, Tag } from './styles';
import { Modal } from '..';
import { Button } from '../AddFormModal/styles';
import { addToolRequest } from '../../store/modules/tools/actions';

export function RemovedModal() {
  const dispatch = useDispatch();
  const open = useSelector(state => state.modal.openRemoved);
  const tool = useSelector(state => state.modal.tool);

  return (
    <Modal
      open={open}
      header={
        <ModalHeader>
          <FaTools color="#365df0" size={15} />
          <h3>Removed Tool</h3>
        </ModalHeader>
      }
    >
      <Content>
        <a href={tool && tool.link}>
          <h3>{tool && tool.title}</h3>
        </a>
        <Description>{tool && tool.description}</Description>
        <Tags>
          {tool &&
            tool.tags.map((tag, index) => <Tag key={String(index)}>{tag}</Tag>)}
        </Tags>
        <Button onClick={() => dispatch(addToolRequest(tool))}>Undo</Button>
      </Content>
    </Modal>
  );
}
