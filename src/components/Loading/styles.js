import styled from 'styled-components';

export const Overlay = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  display: ${props => (props.loading ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
`;

export const Content = styled.div`
  align-items: center;
  background-color: transparent;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  max-width: 600px;
  padding: 20px;
  width: 100%;
`;
