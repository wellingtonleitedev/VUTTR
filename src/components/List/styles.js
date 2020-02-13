import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0;
  width: 100%;
`;

export const NoRecords = styled.h3`
  padding-top: 100px;
  text-align: center;
`;

export const Content = styled.ul`
  display: flex;
  flex-direction: column;
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

  button {
    align-self: flex-start;
  }
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
