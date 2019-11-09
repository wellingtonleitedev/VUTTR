import React from 'react';
import Icon from '../../assets/images/danger.svg';
import { Container, Figure, Description, Title, Text } from './styles';

export const ToastContentError = ({ children }) => {
  return (
    <Container>
      <Figure>
        <img className="img-responsive" src={Icon} alt="Icon Check" />
      </Figure>
      <Description>
        <Title>An error just happened!</Title>
        <Text>{children}</Text>
      </Description>
    </Container>
  );
};
