// reset css
import { createGlobalStyle } from 'styled-components';
import resetStyle from './reset';

const GlobalStyles = createGlobalStyle`
${resetStyle}
  * {
    font-family: 'IBM Plex Sans';
    color:white;
  }
  body{
    background-color: #1a1b1e; 
  }
`;

export default GlobalStyles;
