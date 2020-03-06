import React from "react";
import { Container } from "../../style/global";
import { Content } from "./styles";
import {
  HeaderActions,
  List,
  AddFormModal,
  ViewModal,
  RemovedModal,
  Pagination
} from "../../components";

export const Main: React.FC = () => {
  return (
    <Container>
      <Content>
        <HeaderActions />
        <List />
      </Content>
      <Pagination />
      <AddFormModal />
      <ViewModal />
      <RemovedModal />
    </Container>
  );
};
