import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  width: 100%;
`;

export const Item = styled.li`
  background-color: #fff;
  border: 1px solid #dedce1;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  list-style: none;
  margin-bottom: 20px;
  padding: 20px;
  width: 100%;
`;

export const HeaderList = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Description = styled.div`
  margin-bottom: 10px;
`;

export const Tags = styled.ul`
  align-items: center;
  display: flex;
`;

export const Tag = styled.li`
  background-color: #f5f4f6;
  border: 1px solid #ebeaed;
  border-radius: 5px;
  margin-right: 5px;
  padding: 5px;
`;

export const Button = styled.button`
  align-items: center;
  background-color: #f95e5a;
  color: #fff;
  display: flex;
  letter-spacing: 0.36px;
  padding: 5px 10px;

  svg {
    margin-right: 2px;
  }
`;
