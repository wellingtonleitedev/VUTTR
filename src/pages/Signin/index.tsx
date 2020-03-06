import React, { useState, useRef, MutableRefObject } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaSpinner } from "react-icons/fa";
import { Container } from "../../style/global";
import { Content, Form, Button, Redirect } from "./styles";
import { InputLabel, Header } from "../../components";
import { signinRequest } from "../../store/modules/auth/actions";

interface User {
  email?: string;
  password?: string;
}

interface Auth {
  auth: {
    loading: boolean;
  };
}

export function Signin(): React.ReactElement {
  const [user, setUser] = useState<User>({});
  const loading = useSelector<Auth>(state => state.auth.loading);
  const dispatch = useDispatch();
  const formRef = useRef<HTMLFormElement>();

  const handleSubmit = (e: Event): void => {
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
            onChange={(email: string) => setUser({ ...user, email })}
          />
          <InputLabel
            required
            id="password"
            type="password"
            placeholder="Type your password"
            onChange={(password: string) => setUser({ ...user, password })}
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
