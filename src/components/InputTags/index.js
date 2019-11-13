import React from 'react';
import { Container, Input, Tags, Tag } from './styles';
import { FaTimes } from 'react-icons/fa';

export const InputTags = ({ inputRef, onChange, onClick, onKeyDown, tags }) => {
  return (
    <Container>
      <Tags>
        {tags.map((tag, index) => (
          <Tag key={index}>
            <small>{tag}</small>
            <button type="button" onClick={() => onClick(index)}>
              <FaTimes size={13} color="#FFF" />
            </button>
          </Tag>
        ))}
        <Input
          ref={inputRef}
          onKeyUp={onKeyDown}
          onChange={e => onChange(e.target.value)}
        />
      </Tags>
    </Container>
  );
};
