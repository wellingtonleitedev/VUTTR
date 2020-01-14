import styled from 'styled-components';

export const ModalHeader = styled.div`
  align-items: center;
  display: flex;

  svg {
    margin-right: 5px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  input,
  textarea {
    margin-bottom: 10px;
  }
`;

export const Actions = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  align-items: center;
  background-color: #365df0;
  color: #fff;
  display: flex;
  letter-spacing: 0.36px;
  margin-left: 5px;
  margin-top: 20px;
  padding: 10px 10px;
`;
