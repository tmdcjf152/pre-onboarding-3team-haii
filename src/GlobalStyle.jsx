import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
  }

  a {
    text-decoration: none;
  }

  body {
    min-width:375px;
    font-family: 'Noto Sans KR', sans-serif;
    background: linear-gradient(to right, #b993d6, #8ca6db);
  }  
`;

export default GlobalStyle;
