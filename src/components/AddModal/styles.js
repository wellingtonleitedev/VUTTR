import styled from 'styled-components';

export const ModalContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
  margin-right: 20px;
  height: 100%;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  max-width: 600px;
  padding: 20px;
  width: 100%;
`;

export const ModalHeader = styled.div`
  align-items: center;
  color: #365df0;
  display: flex;
  margin-bottom: 20px;

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

  button {
    align-self: flex-end;
    margin-top: 20px;
    padding: 10px;
  }
`;
export const Actions = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: flex-end;

  button {
    &:first-child {
      background-color: #f95e5a;
    }
  }
`;
