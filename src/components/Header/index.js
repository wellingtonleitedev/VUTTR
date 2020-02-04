import React from 'react';
import { MdExitToApp } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Content } from './styles';
import { IconButton } from '../IconButton';
import { logoutRequest } from '../../store/modules/auth/actions';

export const Header = () => {
  const dispatch = useDispatch();
  const { signed } = useSelector(state => state.auth);

  return (
    <Container>
      <Content>
        <h1>VUTTR</h1>
        <h3>Very Useful Tools to Remember</h3>
      </Content>
      {signed && (
        <IconButton
          icon={<MdExitToApp size={14} color="#FFF" />}
          onClick={() => dispatch(logoutRequest())}
        >
          Logout
        </IconButton>
      )}
    </Container>
  );
};
