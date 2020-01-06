import React from 'react';
import { Container, Content } from './styles';
import {
  Header,
  List,
  AddFormModal,
  ViewModal,
  RemovedModal,
} from '../../components';

export default function Main() {
  return (
    <Container>
      <Content>
        <Header />
        <List />
      </Content>
      <AddFormModal />
      <ViewModal />
      <RemovedModal />
    </Container>
  );
}
