import styled from 'styled-components';

export const Overlay = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  display: ${props => (props.modalOpen ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
`;

export const Content = styled.div`
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
  justify-content: space-between;
  margin-bottom: 20px;
`;
