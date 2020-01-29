import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from '../../style/global';
import { Content, Form, Button, Redirect } from './styles';
import { InputLabel, Header } from '../../components';
import { signinRequest } from '../../store/modules/auth/actions';

export default function Signin() {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const formRef = useRef();

  const handleSubmit = e => {
    e.preventDefault();

    const { email, password } = user;

    dispatch(signinRequest(email, password));
    setUser({});
    formRef.current.reset();
  };

  return (
    <Container>
      <Content>
        <Header />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <InputLabel
            required
            id="email"
            type="email"
            placeholder="Type your e-mail"
            onChange={email => setUser({ ...user, email })}
          />
          <InputLabel
            required
            id="password"
            type="password"
            placeholder="Type your password"
            onChange={password => setUser({ ...user, password })}
          />
          <Button>SIGN IN</Button>
          <Redirect to="/signup">Don&apos;t have an account? Sign up</Redirect>
        </Form>
      </Content>
    </Container>
  );
}
