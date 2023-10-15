import styled from 'styled-components';

const Wrapper = styled.main`
  position: relative;
  background: #000;
  color: ${({ theme }) => theme.COLOR['gray-7']};
`;

export const S = {
  Wrapper,
};
