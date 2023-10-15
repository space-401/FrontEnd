import styled from 'styled-components';

const Wrapper = styled.main`
  position: relative;
  background: #000;
  color: ${({ theme }) => theme.COLOR['gray-7']};
  padding: 56px 0;
  min-height: 100vh;
`;

export const S = {
  Wrapper,
};
