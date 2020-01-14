import React from 'react';
import { Container } from '../../style/global';
import { Content } from './styles';
import {
  HeaderActions,
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
        <HeaderActions />
        <List />
      </Content>
      <AddFormModal />
      <ViewModal />
      <RemovedModal />
      <Pagination pages={100} />
    </Container>
  );
}
