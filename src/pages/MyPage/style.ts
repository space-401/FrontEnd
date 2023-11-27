import { flexCenter } from '@/styles';
import styled from 'styled-components';

const MyPageWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  min-height: 80vh;
  padding-bottom: 16px;
  display: flex;
  gap: 7px;

  @media ${({ theme }) => theme.DEVICE.tablet} {
    ${flexCenter};
    width: 100vw;
    flex-wrap: wrap;
  }
`;

const Container = styled.section`
  width: calc(100% - 201px);
  min-height: 100%;
  background: ${({ theme }) => theme.COLOR['gray-6']};
  border-radius: 15px;
  padding: 48px 105px 0;
  margin-bottom: 16px;

  @media ${({ theme }) => theme.DEVICE.tablet} {
    ${flexCenter};
    flex-wrap: wrap;
    flex-direction: column;
    padding: 30px;
    width: 95%;
    min-height: 0;
  }
`;

const Wrapper = styled.nav`
  width: 194px;
  height: 100%;
  background: ${({ theme }) => theme.COLOR['gray-6']};
  border-radius: 15px;
  display: flex;
  padding: 80px 15px;

  @media ${({ theme }) => theme.DEVICE.tablet} {
    ${flexCenter};
    flex-wrap: wrap;
    height: 80px;
    width: 95%;
    padding: 0;
  }
`;
const NavGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media ${({ theme }) => theme.DEVICE.tablet || theme.DEVICE.mobile} {
    width: 95%;
    ${flexCenter};
    flex-direction: row;
  }
`;

const NavButton = styled.div<{ select: boolean }>`
  cursor: pointer;
  height: 36px;
  display: flex;
  width: 163px;
  align-items: center;
  padding: 10px 16px;
  gap: 8px;
  border-radius: 10px;
  background: ${({ theme, select }) => (select ? theme.COLOR['gray-5'] : '')};
  @media ${({ theme }) => theme.DEVICE.tablet} {
    height: 100%;
    ${flexCenter};
    flex-direction: column;
  }
  @media ${({ theme }) => theme.DEVICE.mobile} {
    height: 100%;
    width: 7rem;
    ${flexCenter};
    flex-direction: column;
  }
`;

const NavSpan = styled.span`
  color: ${({ theme }) => theme.COLOR.white};
  font-size: 13px;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-500']};
`;

export const S = {
  MyPageWrapper,
  Container,
  Wrapper,
  NavGroup,
  NavButton,
  NavSpan,
};
