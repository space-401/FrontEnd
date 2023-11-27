import { flexCenter } from '@/styles';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.COLOR.black};
  display: flex;
  align-items: center;
  position: relative;
  flex-direction: column;
  @media ${({ theme }) => theme.DEVICE.tablet} {
    width: 100vw;
  }
`;

const IconWrapper = styled.div`
  width: 100%;
  height: 50px;
`;

const IconContainer = styled.div`
  padding-top: 24px;
  padding-left: 24px;
`;
const ContentWrapper = styled.div`
  width: 1200px;
  ${flexCenter};
  flex-direction: column;
`;

export const S = {
  Wrapper,
  IconWrapper,
  IconContainer,
  ContentWrapper,
};
