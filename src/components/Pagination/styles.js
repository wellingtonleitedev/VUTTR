import styled from 'styled-components';

export const Container = styled.div`
  .pagination {
    color: #fff;
    display: flex;
    font-weight: bold;
    justify-content: center;
    max-width: 100%;

    ul {
      display: flex;
      padding: 15px;
      overflow: hidden;

      li {
        align-items: center;
        display: flex;
        height: 25px;
        justify-content: center;
        padding: 15px 15px;
        width: 25px;
      }

      .active {
        background-color: #ebeaed;
        border-radius: 50%;
        color: #170c3a;
      }
    }
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: 0;

  svg {
    margin: 0 5px;
    vertical-align: middle;
  }
`;
