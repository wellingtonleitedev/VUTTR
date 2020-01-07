import styled from 'styled-components';

export const Container = styled.div`
  .pagination {
    color: #fff;
    display: flex;
    justify-content: center;
    max-width: 100%;

    ul {
      display: flex;
      overflow: hidden;

      li {
        padding: 5px 10px;
      }

      .active {
        background-color: rgba(255, 255, 255, 0.5);
        border-radius: 50%;
      }
    }
  }
`;
