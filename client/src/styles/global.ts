import { createGlobalStyle } from 'styled-components';
import resetStyle from './reset';
import {theme} from "@styles/theme/theme";

const GlobalStyles = createGlobalStyle`
  ${resetStyle}

  @font-face {
    font-family: 'IBM Plex Sans KR';
    src: url('/src/styles/fonts/IBMPlexSansKR-ExtraLight.woff') format('woff');
    font-weight: ${theme.FONT_WEIGHT["WEIGHT-200"]};
    font-style: normal;
  }

  @font-face {
    font-family: 'IBM Plex Sans KR';
    src: url('/src/styles/fonts/IBMPlexSansKR-Light.woff') format('woff');
    font-weight: ${theme.FONT_WEIGHT["WEIGHT-300"]};
    font-style: normal;
  }

  @font-face {
    font-family: 'IBM Plex Sans KR';
    src: url('/src/styles/fonts/IBMPlexSansKR-Regular.woff') format('woff');
    font-weight: ${theme.FONT_WEIGHT["WEIGHT-400"]};
    font-style: normal;
  }

  @font-face {
    font-family: 'IBM Plex Sans KR';
    src: url('/src/styles/fonts/IBMPlexSansKR-Medium.woff') format('woff');
    font-weight: ${theme.FONT_WEIGHT["WEIGHT-500"]};
    font-style: normal;
  }

  @font-face {
    font-family: 'IBM Plex Sans KR';
    src: url('/src/styles/fonts/IBMPlexSansKR-SemiBold.woff') format('woff');
    font-weight: ${theme.FONT_WEIGHT["WEIGHT-600"]};
    font-style: normal;
  }

  @font-face {
    font-family: 'IBM Plex Sans KR';
    src: url('/src/styles/fonts/IBMPlexSansKR-Bold.woff') format('woff');
    font-weight: ${theme.FONT_WEIGHT["WEIGHT-700"]};
    font-style: normal;
  }

  @font-face {
    font-family: 'IBM Plex Sans KR';
    src: url('/src/styles/fonts/IBMPlexSansKR-Thin.woff') format('woff');
    font-weight: ${theme.FONT_WEIGHT["WEIGHT-100"]};
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('./fonts/Pretendard-ExtraLight.ttf') format('truetype'), url('./fonts/Pretendard-ExtraLight.woff') format('woff');
    font-weight: ${theme.FONT_WEIGHT["WEIGHT-200"]};
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('/src/styles/fonts/Pretendard-Light.ttf') format('truetype'), url('/src/styles/fonts/Pretendard-Light.woff') format('woff');
    font-weight: ${theme.FONT_WEIGHT["WEIGHT-300"]};
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('/src/styles/fonts/Pretendard-Regular.ttf') format('truetype'), url('/src/styles/fonts/Pretendard-Regular.woff') format('woff');
    font-weight: ${theme.FONT_WEIGHT["WEIGHT-400"]};
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('/src/styles/fonts/Pretendard-Medium.ttf') format('truetype'), url('/src/styles/fonts/Pretendard-Medium.woff') format('woff');
    font-weight: ${theme.FONT_WEIGHT["WEIGHT-500"]};
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('/src/styles/fonts/Pretendard-SemiBold.ttf') format('truetype'), url('/src/styles/fonts/Pretendard-SemiBold.woff') format('woff');
    font-weight: ${theme.FONT_WEIGHT["WEIGHT-600"]};
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('./fonts/Pretendard-Bold.ttf') format('truetype'), url('./fonts/Pretendard-Bold.woff') format('woff');
    font-weight: ${theme.FONT_WEIGHT["WEIGHT-700"]};
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('/src/styles/fonts/Pretendard-Thin.ttf') format('truetype'), url('/src/styles/fonts/Pretendard-Thin.woff') format('woff');
    font-weight: ${theme.FONT_WEIGHT["WEIGHT-100"]};
    font-style: normal;
  }
`;

export default GlobalStyles;
