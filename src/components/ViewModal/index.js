import React from 'react';
import { useSelector } from 'react-redux';
import { FaTools } from 'react-icons/fa';
import { ModalHeader, Content, Description, Tags, Tag } from './styles';
import { Modal } from '..';

export function ViewModal() {
  const open = useSelector(state => state.modal.openView);
  const tool = useSelector(state => state.modal.tool);

  return (
    <Modal
      open={open}
      header={
        <ModalHeader>
          <FaTools color="#365df0" size={15} />
          <h3>New Tool</h3>
        </ModalHeader>
      }
    >
      <Content>
        <a href={tool && tool.link} target="_blank" rel="noopener noreferrer">
          <h3>{tool && tool.title}</h3>
        </a>
        <Description>{tool && tool.description}</Description>
        <Tags>
          {tool &&
            tool.tags &&
            tool.tags.map((tag, index) => <Tag key={String(index)}>{tag}</Tag>)}
        </Tags>
      </Content>
    </Modal>
  );
}
