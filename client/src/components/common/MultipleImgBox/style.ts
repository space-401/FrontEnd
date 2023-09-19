import styled from 'styled-components';
import { flexCenter } from '@/styles/common';

const Wrapper = styled.div`
  display: flex;
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
  height: 100vh; /* 화면 높이를 100%로 설정하여 전체 화면으로 확장 */
`;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: fit-content;
  gap: 8px;
  position: absolute;
  bottom: 100px;
  padding: '8px';
  ${flexCenter}
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
  Wrapper,
  Container,
  SmallPhotoBox,
  Modal,
  DeleteIcon,
};

export default S;
