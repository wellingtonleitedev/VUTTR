import React from 'react';
import { Container, Content } from './styles';
import { Header, List } from '../../components';
import AddFormModal from '../../components/AddFormModal';

export default function Main() {
  return (
    <Container>
      <Content>
        <Header />
        <List />
      </Content>
      <AddFormModal />
    </Container>
  );
}
