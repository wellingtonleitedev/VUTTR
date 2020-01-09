import styled from 'styled-components';

export const Container = styled.div`
  color: #fff;
  display: flex;
  font-weight: bold;
  justify-content: center;
  max-width: 100%;
`;

export const Button = styled.button`
  background-color: transparent;
  border: 0;

  svg {
    margin: 0 5px;
    vertical-align: middle;
  }
`;

export const List = styled.ul`
  display: flex;
  padding: 15px;
`;

export const Item = styled.li`
  background-color: ${props => (props.actived ? '#ebeaed' : 'transparent')};
  border-radius: 50%;
  color: ${props => (props.actived ? '#170c3a' : '#fff')};
  align-items: center;
  display: flex;
  height: 25px;
  justify-content: center;
  padding: 15px 15px;
  width: 25px;
`;
