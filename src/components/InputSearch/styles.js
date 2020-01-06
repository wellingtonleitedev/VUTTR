import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  button {
    background-color: #f5f4f6;
    border: 0;
    border-radius: 5px 0 0 5px;
    padding: 5px;
  }

  input {
    margin-right: 5px;
  }

  #input-search {
    border: 0;
    border-radius: 0 5px 5px 0;
    margin-right: 10px;
    padding: 6px;
  }
`;
