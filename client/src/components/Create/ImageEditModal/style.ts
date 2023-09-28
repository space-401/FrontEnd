import { flexCenter } from '@/styles/common';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
`;

const Form = styled.form<{ width: number }>`
  z-index: ${({ theme }) => theme.Z_INDEX['LEVEL-6']};
  ${flexCenter}
  flex-direction: column;
  ${flexCenter}
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${({ width }) => width};
  border-radius: 8px;
  background: ${({ theme }) => theme.COLOR['gray-6']};
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  border-radius: 15px;
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
  ${flexCenter}
  position: 'relative';
  height: 4rem;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
const SizeController = styled.div`
  width: 160px;
  z-index: ${({ theme }) => theme.Z_INDEX['LEVEL-2']};
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

const PhotoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 60px;
  justify-content: space-evenly;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const S = {
  Wrapper,
  Form,
  Header,
  Footer,
  SizeController,
  MultiViewWrapper,
  SmallPhotoBox,
  PhotoContainer,
  FlexContainer,
};

export default S;
