import React from 'react';
import { Container, Input, Tags, Tag } from './styles';
import { FaTimes } from 'react-icons/fa';

export const InputTags = ({ inputRef, onChange, onClick, tags }) => {
  return (
    <Container>
      <Tags>
        {tags.map(tag => (
          <Tag key={tag}>
            <small>{tag}</small>
            <button type="button" onClick={() => onClick(tag)}>
              <FaTimes size={13} color="#FFF" />
            </button>
          </Tag>
        ))}
        <Input ref={inputRef} onChange={e => onChange(e.target.value)} />
      </Tags>
    </Container>
  );
};
