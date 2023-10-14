import styled from 'styled-components';

const Wrapper = styled.main`
  position: relative;
  overflow: hidden;
  width: 100%;
  background-color: ${({ theme }) => theme.COLOR['gray-7']};
`;

const Container = styled.div<{ index: number }>`
  transform: ${({ index }) =>
    `translateY(${index !== -4 ? 100 * index : 90 * index}vh)`};
  height: 100vh;
  width: 100%;
  transition: transform 0.9s ease 0s;
`;

export const S = {
  Wrapper,
  Container,
};
