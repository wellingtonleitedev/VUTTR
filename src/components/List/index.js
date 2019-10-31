import React from 'react';
import { FaTimes } from 'react-icons/fa';
import {
  Container,
  Item,
  HeaderList,
  Description,
  Tags,
  Tag,
  Button,
} from './styles';

export default function List({ tools }) {
  return (
    <Container>
      {tools.map(tool => (
        <Item key={tool.id}>
          <HeaderList className="header-list">
            <a href={tool.link} target="_blank">
              <h3>{tool.title}</h3>
            </a>
            <Button>
              <FaTimes color="#FFF" size={13} />
              Remove
            </Button>
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
}
