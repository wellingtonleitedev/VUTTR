import React from 'react';
import Icon from '../../assets/images/check-circle.svg';
import { Container, Figure, Description, Title, Text } from './styles';

export const ToastContentSuccess = ({ children }) => {
  return (
    <Container>
      <Figure>
        <img className="img-responsive" src={Icon} alt="Icon Check" />
      </Figure>
      <Description>
        <Title>This was a complete success!</Title>
        <Text>{children}</Text>
      </Description>
    </Container>
  );
};
