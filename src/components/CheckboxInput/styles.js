import styled from 'styled-components';

export const Container = styled.div`
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
