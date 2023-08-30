// reset css
import { createGlobalStyle } from 'styled-components';
import resetStyle from './reset';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR&display=swap');

${resetStyle}
  * {
    box-sizing: border-box;
    font-family: 'IBM Plex Sans KR', sans-serif;
  }
`;

export default GlobalStyles;
