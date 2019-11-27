import React, { useState, useRef, useMemo, useCallback } from 'react';
import { FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Container, Input, Tags, Tag } from './styles';

export function InputTags({ value, onChange, children }) {
  const inputRef = useRef(null);
  const [tags, setTags] = useState([]);

  useCallback(() => {
    if (tags.length) {
      onChange(tags);
    }
  }, [onChange, tags]);

  useMemo(() => {
    if (!value.length) {
      setTags([]);
    }
  }, [value]);

  const pushTags = text => {
    let tag;

    if (text.match(/^[,]/g) || text.match(/^[ ]/g)) {
      inputRef.current.value = '';
      return;
    }

    if (text.match(/[,]/g) || text.match(/[ ]/g)) {
      tag = text.replace(' ', '');
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
    <>
      <label htmlFor="tags">
        {children}
        <Container>
          <Tags>
            {tags &&
              tags.map((tag, index) => (
                <Tag key={String(index)}>
                  <small>{tag}</small>
                  <button type="button" onClick={() => handleRemove(index)}>
                    <FaTimes size={13} color="#FFF" />
                  </button>
                </Tag>
              ))}
            <Input id="tags" type="hidden" onChange={text => onChange(text)} />
            <Input
              id="tags"
              ref={inputRef}
              onKeyUp={event => handleRemoveForEvent(event)}
              onChange={e => pushTags(e.target.value)}
            />
          </Tags>
        </Container>
      </label>
    </>
  );
}

InputTags.defaultProps = {
  children: '',
  value: '',
};

InputTags.propTypes = {
  value: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func.isRequired,
  children: PropTypes.string,
};
