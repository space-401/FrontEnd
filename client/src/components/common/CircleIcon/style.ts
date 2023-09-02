import styled from 'styled-components';

const CircleImg = styled.img<{ size?: number }>`
  width: ${({ size }) => size || 48}px;
  height: ${({ size }) => size || 48}px;
  border-radius: 50%;
  background-color: #d9d9d9;
`;

const S = {
  CircleImg,
};

export default S;
