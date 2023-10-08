import styled from 'styled-components';
import { flexCenter } from '@/styles/common';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  ${flexCenter}
  flex-direction: column;
  background-color: ${({ theme }) => theme.COLOR.black};
  color: white;
  gap: 50px;
`;

const Text = styled.div`
  color: ${({ theme }) => theme.COLOR['gray-2']};
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
`;

const Image = styled.div`
  width: 800px;
  height: 200px;
  background-color: white;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

interface ILoginBox {
  backgroundColor: string;
  color: 'white' | 'black';
}

const LoginBox = styled.div<ILoginBox>`
  width: 400px;
  height: 56px;
  border-radius: 10px;
  font-weight: 500;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => (color === 'white' ? 'white' : 'black')};
  ${flexCenter}
  position: relative;
`;

const S = {
  Wrapper,
  Text,
  Image,
  LoginContainer,
  LoginBox,
};

export default S;
