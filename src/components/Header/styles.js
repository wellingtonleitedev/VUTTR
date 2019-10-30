import styled from 'styled-components';

export const Container = styled.header`
  /* color: #fff; */
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;
`;

export const Actions = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;

export const Inputs = styled.div`
  display: flex;
  align-items: center;

  input {
    margin-right: 5px;
  }

  #input-search {
    margin-right: 10px;
  }

  #input-check {
    display: none;

    &:checked + label::before {
      border: 4px solid #365df0;
    }
  }

  label {
    cursor: pointer;
    padding-left: 20px;
    position: relative;

    &::before {
      content: '';
      border: 4px double #a2a2a2;
      border-radius: 50%;
      box-sizing: border-box;
      display: inline-block;
      height: 16px;
      left: 0;
      position: absolute;
      top: 1px;
      width: 16px;
    }
  }
`;

export const Button = styled.button`
  align-items: center;
  background-color: #365df0;
  color: #fff;
  display: flex;
  letter-spacing: 0.36px;
  padding: 5px 10px;

  svg {
    margin-right: 2px;
  }
`;
