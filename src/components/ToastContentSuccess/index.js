import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
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
import {
  handleViewModal,
  handleRemovedModal,
} from '../../store/modules/modal/actions';

export const ToastContentSuccess = ({ children, func, params }) => {
  const dispatch = useDispatch();
  const actions = {
    handleViewModal: () => {
      dispatch(handleViewModal(...params));
    },
    handleRemovedModal: () => {
      dispatch(handleRemovedModal(...params));
    },
  };

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
        {actions[func] && (
          <Button type="button" onClick={() => actions[func]()}>
            Show
          </Button>
        )}
      </Content>
    </Container>
  );
};

ToastContentSuccess.defaultProps = {
  func: undefined,
  params: undefined,
};

ToastContentSuccess.propTypes = {
  children: PropTypes.string.isRequired,
  func: PropTypes.string,
  params: PropTypes.arrayOf(PropTypes.any),
};
