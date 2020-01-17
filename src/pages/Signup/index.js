import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from '../../style/global';
import { Content, Form, Button, Redirect } from './styles';
import { InputLabel, Header } from '../../components';
import { signupRequest } from '../../store/modules/auth/actions';

export default function Signup() {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const formRef = useRef();

  const signup = e => {
    e.preventDefault();
    dispatch(signupRequest(user));
    setUser({});
    formRef.current.reset();
  };

  return (
    <Container>
      <Content>
        <Header />
        <Form ref={formRef} onSubmit={signup}>
          <InputLabel
            id="name"
            type="text"
            placeholder="Type your name"
            onChange={name => setUser({ ...user, name })}
          />
          <InputLabel
            id="email"
            type="email"
            placeholder="Type your e-mail"
            onChange={email => setUser({ ...user, email })}
          />
          <InputLabel
            id="password"
            type="password"
            placeholder="Type your password"
            onChange={password => setUser({ ...user, password })}
          />
          <Button>SIGN UP</Button>
          <Redirect to="/">Already have an account? Sign in</Redirect>
        </Form>
      </Content>
    </Container>
  );
}