import React from 'react';
import PropTypes from 'prop-types';
import { Container, Content } from './styles';
import {
  Header,
  List,
  AddFormModal,
  ViewModal,
  RemovedModal,
  Pagination,
} from '../../components';

export default function Main({ match }) {
  return (
    <Container>
      <Content>
        <Header />
        <List />
        <Pagination page={match.params.page} pages={11} />
      </Content>
      <AddFormModal />
      <ViewModal />
      <RemovedModal />
    </Container>
  );
}

Main.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      page: PropTypes.string,
    }),
  }).isRequired,
};
