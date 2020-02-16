/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { FaTimes, FaPencilAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  NoRecords,
  Content,
  Item,
  Buttons,
  HeaderList,
  Description,
  Tags,
  Tag,
} from './styles';
import { IconButton } from '..';
import {
  fetchToolsRequest,
  removeToolRequest,
} from '../../store/modules/tools/actions';
import { handleFormModal } from '../../store/modules/modal/actions';
import { Loading } from '../Loading';

export function List() {
  const tools = useSelector(state => state.tools.data);
  const loading = useSelector(state => state.tools.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchToolsRequest());
  }, [dispatch]);

  const handleRemove = tool => {
    const { _id, title, link, description, tags } = tool;
    dispatch(removeToolRequest(_id, title, link, description, tags));
  };

  const handleUpdate = tool => {
    dispatch(handleFormModal(tool, true, false, true));
  };

  return (
    <Container>
      <Loading show={loading} />
      {!tools.length ? (
        <NoRecords>No tools registered</NoRecords>
      ) : (
        <Content>
          {tools.map(tool => (
            <Item key={tool._id}>
              <HeaderList className="header-list">
                <a href={tool.link} target="_blank" rel="noopener noreferrer">
                  <h3>{tool.title}</h3>
                </a>
                <Buttons>
                  <IconButton
                    onClick={() => handleUpdate(tool)}
                    color="#365df0"
                    icon={<FaPencilAlt color="#FFF" size={13} />}
                  >
                    Update
                  </IconButton>
                  <IconButton
                    onClick={() => handleRemove(tool)}
                    color="#f95e5a"
                    icon={<FaTimes color="#FFF" size={13} />}
                  >
                    Remove
                  </IconButton>
                </Buttons>
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
        </Content>
      )}
    </Container>
  );
}
