import React, { useState, useRef, useMemo, useCallback } from 'react';
import { FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Container, Input, Tags, Tag } from './styles';

export function InputTags({ value, onChange, children }) {
  const inputRef = useRef(null);
  const [inputState, setInputState] = useState({
    almostClean: false,
    totalClean: true,
  });
  const [tags, setTags] = useState([]);

  useCallback(() => {
    if (tags.length) {
      onChange(tags);
    }
  }, [onChange, tags]);

  useMemo(() => {
    if (!value.length) {
      setTags([]);
    } else {
      setTags(value);
    }
  }, [value]);

  const popForkey = array => {
    if (inputRef.current.value) {
      setInputState({ almostClean: false, totalClean: false });
      return array;
    }

    if (!inputState.almostClean) {
      setInputState({ ...inputState, almostClean: true });
    } else {
      setInputState({ almostClean: false, totalClean: true });
      array.length === 1 ? (array = []) : array.pop(); //eslint-disable-line
    }

    return array;
  };

  const pushForKey = array => {
    if (!inputRef.current.value) return array;

    array.push(inputRef.current.value);
    inputRef.current.value = '';

    return array;
  };

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

  const handleActionForEvent = event => {
    let array = tags;

    switch (event.key) {
      case 'Backspace':
        array = popForkey(array);
        break;
      case 'Enter':
        array = pushForKey(array);
        break;
      default:
        return;
    }

    setTags(array);
    onChange(tags);
  };

  const handleRemove = index => {
    const array = tags;

    array.splice(Number(index), 1);
    setTags(array);
    onChange(tags);
  };

  return (
    <>
      <label htmlFor="tags">
        {children}
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
            <Input id="tags" type="hidden" onChange={text => onChange(text)} />
            <Input
              ref={inputRef}
              onKeyUp={event => handleActionForEvent(event)}
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
  value: [],
};

InputTags.propTypes = {
  value: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func.isRequired,
  children: PropTypes.string,
};
