import styled from 'styled-components';
import { flexCenter } from '@/styles';

const Wrapper = styled.div<{ width: number }>`
  position: absolute;
  width: ${({ width }) => width}px;
  height: 100px;
  bottom: 0;
  z-index: 100000;
  ${flexCenter};
`;

const Container = styled.div`
  display: flex;
  width: fit-content;

  ${flexCenter};
  margin: 8px;
  padding: 8px;
  background-color: ${({ theme }) => theme.COLOR['gray-5']};
  border-radius: 10px;
  z-index: ${({ theme }) => theme.Z_INDEX['LEVEL-6']};
  position: absolute;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: ${({ theme }) => theme.Z_INDEX['LEVEL-4']};
`;

const SmallPhotoBox = styled.div<{ image?: string }>`
  z-index: ${({ theme }) => theme.Z_INDEX['LEVEL-6']};
  background-position: center;
  width: 64px;
  height: 64px;
  border-radius: 5px;
  background-image: url(${({ image }) => image});
  background-size: cover;
  ${flexCenter};
`;

const DeleteIcon = styled.div`
  z-index: ${({ theme }) => theme.Z_INDEX['LEVEL-5']};
  position: absolute;
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
