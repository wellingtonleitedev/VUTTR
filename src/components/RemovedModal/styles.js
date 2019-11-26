import styled from 'styled-components';

export const ModalHeader = styled.div`
  align-items: center;
  display: flex;

  svg {
    margin-right: 5px;
  }
`;

export const Content = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Description = styled.div`
  margin-bottom: 10px;
`;

export const Tags = styled.ul`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
`;

export const Tag = styled.li`
  background-color: #ebeaed;
  border: 1px solid #dedce1;
  border-radius: 5px;
  margin-right: 5px;
  padding: 5px;
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
