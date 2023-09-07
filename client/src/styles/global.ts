import { createGlobalStyle } from 'styled-components';
import resetStyle from './reset';
import fontStyle from './theme/font';
const GlobalStyles = createGlobalStyle`
  ${resetStyle}

  ${fontStyle}
`;

export default GlobalStyles;
