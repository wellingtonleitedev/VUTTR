import React, { useState, useRef, useMemo } from 'react';
import { FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Container, Input, Tags, Tag } from './styles';

export function InputTags({ onChange }) {
  const inputRef = useRef(null);
  const inputHiddenRef = useRef(null);
  const [tags, setTags] = useState([]);

  useMemo(() => {
    if (tags.length) {
      onChange(tags);
    }
  }, [tags]);

  const pushTags = value => {
    let tag;

    if (value.match(/^[,]/g) || value.match(/^[ ]/g)) {
      inputRef.current.value = '';
      return;
    }

    if (value.match(/[,]/g) || value.match(/[ ]/g)) {
      tag = value.replace(' ', '');
      tag = tag.replace(',', '');

      inputRef.current.value = '';
      setTags([...tags, tag]);
    }
  };

  const handleRemoveForEvent = event => {
    const array = tags;

    if (!inputRef.current.value && event.key === 'Backspace') array.pop();

    setTags(array);
    onChange(tags);
  };

  const handleRemove = index => {
    const array = tags;

    array.splice(index, 1);
    setTags(array);
    onChange(tags);
  };

  return (
    <Container>
      <Tags>
        {tags.map((tag, index) => (
          <Tag key={String(index)}>
            <small>{tag}</small>
            <button type="button" onClick={() => handleRemove(index)}>
              <FaTimes size={13} color="#FFF" />
            </button>
          </Tag>
        ))}
        <Input
          ref={inputHiddenRef}
          type="hidden"
          onChange={text => onChange(text)}
        />
        <Input
          ref={inputRef}
          onKeyUp={event => handleRemoveForEvent(event)}
          onChange={e => pushTags(e.target.value)}
        />
      </Tags>
    </Container>
  );
}

InputTags.propTypes = {
  onChange: PropTypes.func.isRequired,
};