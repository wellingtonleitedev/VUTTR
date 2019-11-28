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

export const ToastContentError = ({ children, func, params }) => {
  const dispatch = useDispatch();
  const actions = {
    handleFormModal: () => {
      dispatch(handleFormModal(...params));
    },
  };

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
        {actions[func] && (
          <Button type="button" onClick={() => actions[func]()}>
            Try Again
          </Button>
        )}
      </Content>
    </Container>
  );
};

ToastContentError.defaultProps = {
  func: undefined,
  params: undefined,
};

ToastContentError.propTypes = {
  children: PropTypes.string.isRequired,
  func: PropTypes.string,
  params: PropTypes.arrayOf(PropTypes.any),
};
