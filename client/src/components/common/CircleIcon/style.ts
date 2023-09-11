import styled from 'styled-components';

const CircleImg = styled.img<{ size?: number }>`
  width: ${({ size }) => size || 48}px;
  height: ${({ size }) => size || 48}px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.COLOR['gray-5']};
`;

const S = {
  CircleImg,
};

export default S;
