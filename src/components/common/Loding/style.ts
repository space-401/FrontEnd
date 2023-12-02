import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;

  .loader {
    font-size: 48px;
    font-weight: bold;
    letter-spacing: 2px;
    font-family: Arial, Helvetica, sans-serif;
    color: #fff;
    animation: smokeOut 1s ease-in-out infinite alternate;
    text-shadow: 0 0 1px white;
  }
  .loader:before {
    content: 'Loading';
  }

  @keyframes smokeOut {
    100% {
      opacity: 0.08;
      filter: blur(5px);
      letter-spacing: 4px;
    }
  }
`;

export const S = {
  Wrapper,
};
