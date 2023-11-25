import styled from 'styled-components';

const CircleImg = styled.div<{ size: number; imgUrl: string }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 50%;
  background-image: url(${({ imgUrl }) => imgUrl});
  background-color: ${({ theme }) => theme.COLOR['gray-5']};
  background-size: cover;
`;

export const S = {
  CircleImg,
};
