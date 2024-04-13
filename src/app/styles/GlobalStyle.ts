import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  body {
    height: 100%;
  }
  button {
    cursor: pointer;
    background-color: inherit;
  }
  a {
    text-decoration:none;
    color:inherit;
  }
`;
export default GlobalStyle;
