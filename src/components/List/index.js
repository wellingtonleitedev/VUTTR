/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Item, HeaderList, Description, Tags, Tag } from './styles';
import { IconButton } from '..';
import {
  fetchToolsRequest,
  removeToolRequest,
} from '../../store/modules/tools/actions';

export function List() {
  const tools = useSelector(state => state.tools.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchToolsRequest());
  }, [dispatch]);

  const handleRemove = tool => {
    const { id, title, link, description, tags } = tool;
    dispatch(removeToolRequest(id, title, link, description, tags));
  };

  return (
    <Container>
      {tools.map(tool => (
        <Item key={tool._id}>
          <HeaderList className="header-list">
            <a href={tool.link} target="_blank" rel="noopener noreferrer">
              <h3>{tool.title}</h3>
            </a>
            <IconButton
              onClick={() => handleRemove(tool)}
              color="#f95e5a"
              icon={<FaTimes color="#FFF" size={13} />}
            >
              Remove
            </IconButton>
          </HeaderList>
          <Description>
            <p>{tool.description}</p>
          </Description>
          <Tags>
            {tool.tags.map((tag, index) => (
              <Tag key={String(index)}>
                <small>#{tag}</small>
              </Tag>
            ))}
          </Tags>
        </Item>
      ))}
    </Container>
  );
}
