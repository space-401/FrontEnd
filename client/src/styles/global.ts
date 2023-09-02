import { createGlobalStyle } from 'styled-components';
import resetStyle from './reset';

const GlobalStyles = createGlobalStyle`
  ${resetStyle}

  * {
    box-sizing: border-box;
    font-family: 'IBM Plex Sans KR', sans-serif;
  }
  body {
    background-color: #1a1b1e; 
    color:white;
    line-height: 1.5; /* 비율로 설정 (1.5배 글꼴 크기만큼의 줄 간격) */
  }
  div {
    background-color: inherit;
  }
`;

export default GlobalStyles;
