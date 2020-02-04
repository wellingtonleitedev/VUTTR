import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  bottom: 10px;
  color: #fff;
  display: flex;
  font-weight: bold;
  justify-content: center;
  max-width: 100%;
  position: absolute;
`;

export const Button = styled.button`
  background-color: transparent;
  border: 0;
  font-weight: bold;

  svg {
    margin: 0 5px;
    vertical-align: middle;
  }

  &:not([disabled]) {
    color: #fff;
  }
`;

export const InitialPage = styled.div`
  align-items: inherit;
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  margin-left: 20px;
  margin-right: -15px;
  width: 50px;
`;

export const List = styled.ul`
  display: flex;
  padding: 15px;
`;

export const Item = styled.li`
  background-color: ${props => (props.actived ? '#ebeaed' : 'transparent')};
  border-radius: 50%;
  color: ${props => (props.actived ? '#170c3a' : '#fff')};
  cursor: pointer;
  align-items: center;
  display: flex;
  height: 25px;
  justify-content: center;
  padding: 15px 15px;
  width: 25px;
`;

export const LastPage = styled.div`
  align-items: inherit;
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  margin-left: -15px;
  margin-right: 20px;
  width: 50px;
`;
