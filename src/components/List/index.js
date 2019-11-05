import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { Container, Item, HeaderList, Description, Tags, Tag } from './styles';
import { IconButton } from '../IconButton';

export const List = ({ tools, onClick }) => {
  return (
    <Container>
      {tools.map(tool => (
        <Item key={tool.id}>
          <HeaderList className="header-list">
            <a href={tool.link}>
              <h3>{tool.title}</h3>
            </a>
            <IconButton
              onClick={() => onClick(tool.id)}
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
            {tool.tags.map(tag => (
              <Tag key={tag}>
                <small>#{tag}</small>
              </Tag>
            ))}
          </Tags>
        </Item>
      ))}
    </Container>
  );
};
