import styled from 'styled-components';

export const Container = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: space-around;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

export const Figure = styled.div`
  height: 20px;
  width: 20px;
`;

export const Description = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Title = styled.h4`
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  font-size: 13px;
`;

export const Button = styled.button`
  align-self: flex-start;
  background-color: #fff;
  color: #07bc0c;
  letter-spacing: 0.36px;
  margin-top: 20px;
  padding: 10px 10px;
`;
