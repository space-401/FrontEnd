import { css } from 'styled-components';

const resetStyle = css`
  * {
    margin: 0;
    padding: 0;
  
    box-sizing: border-box;
    color: white;
  }

  input {
    box-shadow: none;
    outline: none;
    border: none;
  }

  textarea {
    box-shadow: none;
    outline: none;
    border: none;
    resize: none;
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
    margin: 0;
    padding: 0;
  }
`;

export default resetStyle;
