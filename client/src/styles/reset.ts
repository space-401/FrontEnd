import { css } from 'styled-components';

const resetStyle = css`
  * {
    margin: 0;
    padding: 0;
    font: inherit; //부모 상속
    color: inherit;
  }

  *,
  :after,
  :before {
    box-sizing: border-box;
    flex-shrink: 0;
  }

  :root {
    cursor: default;
  }

  html,
  body {
    height: 100%;
  }

  img,
  picture,
  video,
  svg {
    display: block;
    max-width: 100%;
  }

  button {
    background: none;
    border: 0;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  ol,
  ul {
    list-style: none;
    margin: 0px;
    padding: 0px;
  }
`;

export default resetStyle;
