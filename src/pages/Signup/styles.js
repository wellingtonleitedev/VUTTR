import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Content = styled.main`
  max-width: 400px;
  padding-top: 14vh;
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  input {
    margin-bottom: 10px;
    padding: 10px;
  }
`;

export const Redirect = styled(Link)`
  color: #fff;
  font-weight: bold;
  text-align: center;
`;

export const Button = styled.button`
  background-color: #365df0;
  color: #fff;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 20px;
  padding: 10px 10px;
  text-align: center;
`;
