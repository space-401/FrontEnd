import styled from 'styled-components';
import { flexCenter } from '@/styles/common';

const Wrapper = styled.div`
  flex-direction: column;
  ${flexCenter}
  position: absolute;
  top: 50%;
  left: 50%;
  width: 812px;
  height: 324px;
  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme.COLOR['gray-5']};
  border-radius: 10px;
  color: ${({ theme }) => theme.COLOR.white};
  gap: 30px;
`;

const IconBoxWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 70px;
`;

const IconBox = styled.div<{ backImg: string; isSelected: boolean }>`
  width: 140px;
  height: 140px;
  background-color: ${({ theme }) => theme.COLOR['gray-3']};
  border-radius: 10px;
  background-image: url(${({ backImg }) => backImg});
  background-size: cover;
  opacity: ${({ isSelected }) => (isSelected ? 1 : 0.5)};
  transition: opacity 0.3s ease-in-out;
`;

const Text = styled.div`
  text-align: center;
  font-family: Pretendard;
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-24']};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const SubmitBtnWrapper = styled.div`
  position: absolute;
  right: 20px;
  bottom: 24.5px;
`;

const S = {
  Wrapper,
  IconBox,
  Text,
  IconBoxWrapper,
  SubmitBtnWrapper,
};

export default S;
