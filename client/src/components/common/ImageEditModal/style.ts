import { flexCenter } from '@/styles/common';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;

const Form = styled.form`
  ${flexCenter}
  flex-direction: column;

  width: 45rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLOR['gray-5']};
  border-radius: 15px;
`;

const PhotoContainer = styled.div`
  width: 45rem;
  height: 45rem;
  background-color: ${({ theme }) => theme.COLOR.black};
`;

const CropperWrapper = styled.div`
  width: 45rem;
  height: 45rem;
  background-color: black;
  position: relative;
`;

const Header = styled.div`
  height: 4rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  text-align: center;

  button {
    color: ${({ theme }) => theme.COLOR.white};
    font-size: ${({ theme }) => theme.TEXT_SIZE['text-20']};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-400']};
  }
  :nth-child(1),
  :nth-child(3) {
    padding: 0 2rem 0 2rem;
  }

  :nth-child(2) {
    /* 두 번째 자식 요소 (가운데에 배치) */
    margin: 0 auto;
  }
`;

const Footer = styled.div`
  height: 4rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  :nth-child(1),
  :nth-child(3) {
    padding: 0 2rem 0 2rem;
  }
`;

const SizeController = styled.div`
  width: 160px;
  z-index: 100;
  position: absolute;
  left: 10px;
  bottom: 0;
  align-items: center;
  padding-left: 5px;
  background-color: #413f3f;
  border-radius: 5px;
  margin-bottom: 8px;
  display: flex;
`;
const MultiViewWrapper = styled.div`
  display: flex;
  div {
    margin: 4px;
  }
`;
const SmallPhotoBox = styled.div<{ image?: string }>`
  width: 64px;
  height: 64px;
  border-radius: 5px;
  background-image: url(${({ image }) => image});
  background-size: cover;
  ${flexCenter}
  border:1px solid white;
`;
const S = {
  Wrapper,
  Form,
  PhotoContainer,
  Header,
  Footer,
  SizeController,
  CropperWrapper,
  MultiViewWrapper,
  SmallPhotoBox,
};

export default S;
