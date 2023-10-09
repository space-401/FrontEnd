import styled from 'styled-components';

const Wrapper = styled.div<{ fontSize: number }>`
  .MuiAvatar-root {
    font-size: ${({ fontSize }) => fontSize}px !important;
    font-family: ${({ theme }) => theme.FONT_FAMILY.Pretendard} !important;
  }

  div div {
    border: none !important;
  }
`;

const S = {
  Wrapper,
};

export default S;
