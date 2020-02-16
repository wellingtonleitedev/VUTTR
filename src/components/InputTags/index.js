import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import 'antd/lib/icon/style/index.css';
import Icon from 'antd/lib/icon';
import { Container, InputNewTag, NewTag, Tag, Tags } from './styles';

export function InputTags({ value, onChange, children }) {
  const [inputValue, setInputValue] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [tags, setTags] = useState([]);

  useMemo(() => {
    let array = [];

    if (value.length) array = value;

    setTags(array);
  }, [value]);

  const handleRemove = key => {
    const array = tags;

    const newArray = array.filter((_, index) => key !== index);

    setTags(newArray);
    onChange(newArray);
  };

  const handleInputConfirm = () => {
    let array = tags;

    if (inputValue) array = [...array, inputValue];

    setTags(array);
    setInputValue('');
    onChange(array);
  };

  const handleInputBlur = () => {
    let array = tags;

    if (inputValue) array = [...array, inputValue];

    setTags(array);
    setShowInput(false);
    setInputValue('');
    onChange(array);
  };

  const handleShowInput = () => {
    setShowInput(true);
  };

  return (
    <>
      <label htmlFor="tags">
        {children}
        <Container>
          <input id="tags" type="hidden" onChange={text => onChange(text)} />
          <Tags>
            {tags.map((tag, index) => (
              <Tag
                key={String(index)}
                closable
                onClose={() => handleRemove(index)}
              >
                {tag}
              </Tag>
            ))}
            {showInput ? (
              <InputNewTag
                type="text"
                size="small"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                onBlur={() => handleInputBlur()}
                onPressEnter={() => handleInputConfirm()}
              />
            ) : (
              <NewTag onClick={handleShowInput}>
                <Icon type="plus" /> New Tag
              </NewTag>
            )}
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
