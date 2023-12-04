import styled from 'styled-components';
import { flexCenter } from '@/styles/common';

const Wrapper = styled.div`
  width: 100%;
  ${flexCenter};
  flex-direction: column;
`;

const SpaceContainer = styled.div`
  ${flexCenter};
  border-radius: 20px;
  gap: 8px;
  margin-top: 16px;
  position: relative;
  text-align: center !important;
  @media ${({ theme }) => theme.DEVICE.tablet} {
    ${flexCenter};
    flex-wrap: wrap;
  }
`;

const LogoBox = styled.div`
  ${flexCenter};
`;

const Container = styled.div`
  border-radius: 15px;
  background: ${({ theme }) => theme.COLOR['gray-6']};
  height: 670px;
  @media ${({ theme }) => theme.DEVICE.tablet} {
    height: auto;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 3px;
  justify-content: end;
`;

const AddBox = styled.div`
  ${flexCenter};
  cursor: pointer;
  width: 200px;
  height: 200px;
  border-radius: 20px;
  border: 1px solid #4e4f55;
  background: ${({ theme }) => theme.COLOR['gray-4']};
`;

const EmptySpaceBox = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 20px;
  border: 1px solid #57585e;
  background: ${({ theme }) => theme.COLOR['gray-7']};
`;

const Content = styled.div`
  padding: 0 84px;
`;

const SpaceInfoBox = styled.div`
  color: white;
  display: flex;
  padding-left: 10px;
  align-items: center;
`;

const CounterBox = styled.div`
  margin-left: -30px;
`;

export const S = {
  LogoBox,
  Wrapper,
  Container,
  SpaceContainer,
  AddBox,
  ButtonContainer,
  EmptySpaceBox,
  Content,
  SpaceInfoBox,
  CounterBox,
};
