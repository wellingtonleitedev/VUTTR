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
import { handleViewModal } from '../../store/modules/modal/actions';

export const ToastNewTool = ({ children, tool }) => {
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
          onClick={() => dispatch(handleViewModal(tool, true))}
        >
          Show
        </Button>
      </Content>
    </Container>
  );
};

ToastNewTool.defaultProps = {
  tool: {},
};

ToastNewTool.propTypes = {
  children: PropTypes.string.isRequired,
  tool: PropTypes.shape(),
};
