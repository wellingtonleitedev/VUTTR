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
import { handleRemovedModal } from '../../store/modules/modal/actions';

export const ToastRemovedTool = ({ children, tool }) => {
  const dispatch = useDispatch();

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
        <Button
          type="button"
          onClick={() => dispatch(handleRemovedModal(tool, true))}
        >
          Show
        </Button>
      </Content>
    </Container>
  );
};

ToastRemovedTool.defaultProps = {
  tool: {},
};

ToastRemovedTool.propTypes = {
  children: PropTypes.string.isRequired,
  tool: PropTypes.shape(),
};
