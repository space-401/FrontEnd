import styled from 'styled-components';
import { flexCenter } from '@/styles/common';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLOR.black};
`;

const Text = styled.div`
  color: ${({ theme }) => theme.COLOR['gray-2']};
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

interface ILoginBox {
  backgroundColor: string;
  color: string;
}

const LoginBox = styled.div<ILoginBox>`
  width: 320px;
  height: 48px;
  cursor: pointer;
  border-radius: 10px;
  font-weight: 500;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  ${flexCenter};
  position: relative;
`;

const LogoBox = styled.div`
  margin-top: 100px;
`;
const Content = styled.div`
  ${flexCenter};
  flex-direction: column;
  color: white;
  gap: 50px;
  margin-top: -100px;
`;

const S = {
  Wrapper,
  Text,
  LoginContainer,
  LoginBox,
  Content,
  LogoBox,
};

export default S;
