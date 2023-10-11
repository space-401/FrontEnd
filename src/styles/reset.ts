import { css } from 'styled-components';

const resetStyle = css`
  * {
    margin: 0;
    padding: 0;
    font-family: Pretendard;
  }

  body {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  body::-webkit-scrollbar {
    display: none;
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

  .progress-bar {
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    right: 0;
    height: 8px;
    background: linear-gradient(90deg, #000 4.9%, #56c9cc 68.68%);
    transform-origin: 0;
  }
`;

export default resetStyle;
