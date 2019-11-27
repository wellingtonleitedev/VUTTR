import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Icon from '../../assets/images/danger.svg';
import {
  Container,
  Content,
  Figure,
  Description,
  Title,
  Text,
  Button,
} from './styles';
import { handleFormModal } from '../../store/modules/modal/actions';

export const ToastNewToolError = ({ children, tool }) => {
  const dispatch = useDispatch();

  return (
    <Container>
      <Figure>
        <img className="img-responsive" src={Icon} alt="Icon Check" />
      </Figure>
      <Content>
        <Description>
          <Title>An error just happened!</Title>
          <Text>{children}</Text>
        </Description>
        <Button
          type="button"
          onClick={() => dispatch(handleFormModal(tool, true))}
        >
          Try Again
        </Button>
      </Content>
    </Container>
  );
};

ToastNewToolError.defaultProps = {
  tool: {},
};

ToastNewToolError.propTypes = {
  children: PropTypes.string.isRequired,
  tool: PropTypes.shape(),
};
