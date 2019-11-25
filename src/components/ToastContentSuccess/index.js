import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../assets/images/check-circle.svg';
import {
  Container,
  Content,
  Figure,
  Description,
  Title,
  Text,
  Button,
} from './styles';

export const ToastContentSuccess = ({ children }) => {
  return (
    <Container>
      <Figure>
        <img className="img-responsive" src={Icon} alt="Icon Check" />
      </Figure>
      <Content>
        <Description>
          <Title>This was a complete success!</Title>
          <Text>{children}</Text>
        </Description>
        <Button type="button">Show</Button>
      </Content>
    </Container>
  );
};

ToastContentSuccess.propTypes = {
  children: PropTypes.string.isRequired,
};
