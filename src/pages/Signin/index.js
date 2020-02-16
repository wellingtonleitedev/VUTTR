import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaSpinner } from 'react-icons/fa';
import { Container } from '../../style/global';
import { Content, Form, Button, Redirect } from './styles';
import { InputLabel, Header } from '../../components';
import { signinRequest } from '../../store/modules/auth/actions';

export default function Signin() {
  const [user, setUser] = useState({});
  const loading = useSelector(state => state.auth.loading);
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
          <Button>
            {loading ? (
              <FaSpinner className="pulse" size={15} color="#FFF" />
            ) : (
              `SIGN IN`
            )}
          </Button>
          <Redirect to="/signup">Don&apos;t have an account? Sign up</Redirect>
        </Form>
      </Content>
    </Container>
  );
}
