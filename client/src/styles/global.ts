// reset css

import { createGlobalStyle } from 'styled-components';
import resetStyle from './reset';

const GlobalStyles = createGlobalStyle`

${resetStyle}
  * {
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  
  html {
    font-family: 'Poppins', sans-serif;
  }

  body {
    /* background-color: #1A1B1E; */
    background-color:white;
  }
`;

export default GlobalStyles;

///* @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR&display=swap'); */
