import styled, { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: linear-gradient(to right, #365df0, #0072f4, #0084f3, #0093ee, #00a0e6, #009ddf, #009ad9, #0097d2, #0085cb, #0072c2, #005eb6, #244aa8);
    font-family: 'Source Sans Pro', sans-serif;
    padding: 0 !important;
  }

  li {
    list-style: none;
  }

  a, a:hover {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: 0;
    border-radius: 5px;
    cursor: pointer;
  }

  input, textarea {
    background-color: #F5F4F6;
    border: 1px solid #EBEAED;
    border-radius: 5px;
    padding: 5px;
  }

  textarea {
    resize: none;
  }

  .img-responsive {
    max-width: 100%;
    height: auto;
  }

  .toast-container > div {
    border-radius: 5px !important;
    padding: 15px;
  }
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100%;
  padding: 50px 20px;
  position: relative;
  height: 100%;
`;
