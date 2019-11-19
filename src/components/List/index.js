import React, { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Item, HeaderList, Description, Tags, Tag } from './styles';
import { IconButton, ToastContentSuccess } from '../';
import api from '../../services/api';

export function List() {
  const tools = useSelector(state => state.tools.data);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchTools();
  }, []);

  const fetchTools = async () => {
    const { data } = await api.get('/tools');
    dispatch({ type: 'REQUEST_TOOLS', payload: data });
  };

  const handleRemove = async tool => {
    await api.delete(`/tools/${tool.id}`);
    fetchTools();

    toast.success(
      <ToastContentSuccess>
        {tool.title} has been successfully removed!
      </ToastContentSuccess>
    );
  };

  return (
    <Container>
      {tools.map(tool => (
        <Item key={tool.id}>
          <HeaderList className="header-list">
            <a href={tool.link}>
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
              <Tag key={index}>
                <small>#{tag}</small>
              </Tag>
            ))}
          </Tags>
        </Item>
      ))}
    </Container>
  );
}
