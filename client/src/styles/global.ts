// reset css
import { createGlobalStyle, css } from 'styled-components';
import resetStyle from './reset';

/*폰트 import*/
css`
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR&display=swap');
`;

const GlobalStyles = createGlobalStyle`

${resetStyle}

  * {
    box-sizing: border-box;
    font-family: 'IBM Plex Sans KR', sans-serif;
  }
  body{
    background-color: #1a1b1e; 
    color:white;
    line-height: 1.5; /* 비율로 설정 (1.5배 글꼴 크기만큼의 줄 간격) */
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none
  }
`;

export default GlobalStyles;
