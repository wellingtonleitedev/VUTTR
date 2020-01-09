import React from 'react';
import { Container, Content } from './styles';
import {
  Header,
  List,
  AddFormModal,
  ViewModal,
  RemovedModal,
  Pagination,
} from '../../components';

export default function Main() {
  return (
    <Container>
      <Content>
        <Header />
        <List />
        <Pagination pages={13} />
      </Content>
      <AddFormModal />
      <ViewModal />
      <RemovedModal />
    </Container>
  );
}
