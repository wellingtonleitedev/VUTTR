import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    /* background-image: linear-gradient(to bottom, #365df0, #4a5ae4, #5658d7, #5f56cc, #6554c0); */
    font-family: 'Source Sans Pro', sans-serif;
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

  input {
    background-color: #F5F4F6;
    border: 1px solid #EBEAED;
    border-radius: 5px;
    padding: 5px;
  }
`;
