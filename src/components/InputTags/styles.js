import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
`;

export const Input = styled.input`
  background-color: transparent;
  border: 0;
  flex: 1;
  margin: 0 !important;
  padding: 0 !important;
`;

export const Tags = styled.ul`
  background-color: #f5f4f6;
  border: 1px solid #ebeaed;
  border-radius: 5px;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  margin-bottom: 10px;
  padding: 5px;
`;

export const Tag = styled.li`
  align-items: center;
  background-color: #365df0;
  border-radius: 5px;
  color: #fff;
  display: flex;
  margin-bottom: 2px;
  margin-right: 2px;
  padding: 2px 10px;

  button {
    background: transparent;
    margin: 0 !important;
    padding: 0 !important;

    svg {
      margin-left: 5px;
      vertical-align: middle;
    }
  }
`;
