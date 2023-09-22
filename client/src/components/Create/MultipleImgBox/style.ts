import styled from 'styled-components';
import { flexCenter } from '@/styles/common';

const Wrapper = styled.div`
  position: absolute;
  right: 30%;
  bottom: 15%;
`;
const Container = styled.div`
  display: flex;
  width: fit-content;
  position: absolute;
  bottom: 100%;
  right: 0;
  ${flexCenter}
  margin:8px;
  padding: 8px;
  background-color: ${({ theme }) => theme.COLOR['gray-5']};
  border-radius: 10px;
  z-index: 100000;
  position: absolute;
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
  ${flexCenter};
`;

const DeleteIcon = styled.div`
  z-index: 1000000;
  position: 'absolute';
  top: 0;
  right: 0;
  &:hover {
    transform: scale(1.2);
  }
`;

const S = {
  Container,
  SmallPhotoBox,
  Modal,
  DeleteIcon,
  Wrapper,
};

export default S;
