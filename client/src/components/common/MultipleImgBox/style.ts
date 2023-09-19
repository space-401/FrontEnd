import styled from 'styled-components';
import { flexCenter } from '@/styles/common';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: fit-content;
  gap: 8px;
  position: absolute;
  bottom: 16%;
  left: 30%;
  padding: '8px';
  background-color: ${({ theme }) => theme.COLOR['gray-5']};
  border-radius: 10px;
  z-index: 100000;
`;
const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 10000;
`;

const SmallPhotoBox = styled.div<{ image?: string }>`
  width: 64px;
  height: 64px;
  border-radius: 5px;
  background-image: url(${({ image }) => image});
  background-size: cover;
  ${flexCenter}
`;

const S = {
  Wrapper,
  SmallPhotoBox,
  Modal,
};

export default S;
