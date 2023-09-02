import styled from 'styled-components';

interface ICirCleImg {
  size?: number;
}
const CircleImg = styled.img<ICirCleImg>`
  width: ${({ size }) => size || 48}px;
  height: ${({ size }) => size || 48}px;
  border-radius: 50%;
  background-color: #d9d9d9;
`;

const S = {
  CircleImg,
};

export default S;
