import { createGlobalStyle } from 'styled-components';
import resetStyle from './reset';
import {theme} from "@styles/theme/theme";

const GlobalStyles = createGlobalStyle`
  ${resetStyle}

  @font-face {
    font-family: 'IBM Plex Sans KR';
    src: url('/src/styles/fonts/IBMPlexSansKR-ExtraLight.woff') format('woff');
    font-weight: ${theme.FONT_WEIGHT["WEIGHT-200"]}
    font-style: normal;
  }

  @font-face {
    font-family: 'IBM Plex Sans KR';
    src: url('/src/styles/fonts/IBMPlexSansKR-Light.woff') format('woff');
    font-weight: ${theme.FONT_WEIGHT["WEIGHT-300"]}
    font-style: normal;
  }

  @font-face {
    font-family: 'IBM Plex Sans KR';
    src: url('/src/styles/fonts/IBMPlexSansKR-Regular.woff') format('woff');
    font-weight: ${theme.FONT_WEIGHT["WEIGHT-400"]}
    font-style: normal;
  }

  @font-face {
    font-family: 'IBM Plex Sans KR';
    src: url('/src/styles/fonts/IBMPlexSansKR-Medium.woff') format('woff');
    font-weight: ${theme.FONT_WEIGHT["WEIGHT-500"]}
    font-style: normal;
  }

  @font-face {
    font-family: 'IBM Plex Sans KR';
    src: url('/src/styles/fonts/IBMPlexSansKR-SemiBold.woff') format('woff');
    font-weight: ${theme.FONT_WEIGHT["WEIGHT-600"]}
    font-style: normal;
  }

  @font-face {
    font-family: 'IBM Plex Sans KR';
    src: url('/src/styles/fonts/IBMPlexSansKR-Bold.woff') format('woff');
    font-weight: ${theme.FONT_WEIGHT["WEIGHT-700"]}
    font-style: normal;
  }

  @font-face {
    font-family: 'IBM Plex Sans KR';
    src: url('/src/styles/fonts/IBMPlexSansKR-Thin.woff') format('woff');
    font-weight: ${theme.FONT_WEIGHT["WEIGHT-100"]}
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('/src/styles/fonts/Pretendard-ExtraLight.woff2') format('woff2'),
    url('./fonts/Pretendard-ExtraLight.woff') format('woff');
    font-weight: ${theme.FONT_WEIGHT["WEIGHT-200"]}
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('/src/styles/fonts/Pretendard-Light.woff2') format('woff2'),
    url('/src/styles/fonts/Pretendard-Light.woff') format('woff');
    font-weight: ${theme.FONT_WEIGHT["WEIGHT-300"]}
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('/src/styles/fonts/Pretendard-Regular.woff2') format('woff2'),
    url('/src/styles/fonts/Pretendard-Regular.woff') format('woff');
    font-weight: ${theme.FONT_WEIGHT["WEIGHT-400"]}
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('/src/styles/fonts/Pretendard-Medium.woff2') format('woff2'),
    url('/src/styles/fonts/Pretendard-Medium.woff') format('woff');
    font-weight: ${theme.FONT_WEIGHT["WEIGHT-500"]}
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('/src/styles/fonts/Pretendard-SemiBold.woff2') format('woff2'),
    url('/src/styles/fonts/Pretendard-SemiBold.woff') format('woff');
    font-weight: ${theme.FONT_WEIGHT["WEIGHT-600"]}
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('./fonts/Pretendard-Bold.woff2') format('woff2'),
    url('./fonts/Pretendard-Bold.woff') format('woff');
    font-weight: ${theme.FONT_WEIGHT["WEIGHT-700"]}
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('/src/styles/fonts/Pretendard-Thin.woff2') format('woff2'),
    url('/src/styles/fonts/Pretendard-Thin.woff') format('woff');
    font-weight: ${theme.FONT_WEIGHT["WEIGHT-100"]}
    font-style: normal;
  }
  
  * {
    box-sizing: border-box;
  }
  body {
    background-color: #1a1b1e; 
    color:white;
    line-height: 1.5; /* 비율로 설정 (1.5배 글꼴 크기만큼의 줄 간격) */
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none
  }
  div {
    background-color: inherit;
  }
`;

export default GlobalStyles;
