import styled from 'styled-components';
import { flexCenter } from '@/styles/common';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLOR['gray-7']};
  min-height: 100vh;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: fit-content;
`;

const IconGroup = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 28px;
`;

const IconBox = styled.div<{ padding?: number }>`
  background-color: ${({ theme }) => theme.COLOR['gray-6']};
  justify-content: center;
  height: inherit;
  width: 120px;
  display: flex;
  align-items: center;
  border-radius: 10px;

  svg {
    cursor: pointer;
  }
`;

const SpaceBox = styled.div`
  width: 100%;
  max-width: calc(100% - 256px);
  height: inherit;
  background-color: ${({ theme }) => theme.COLOR['gray-6']};
  ${flexCenter};
  border-radius: 10px;
`;

const Container = styled.div`
  margin: 16px 32px 8px 32px;
  width: 100%;
  height: 48px;
  max-width: 1856px;
  display: flex;
  justify-content: space-between;
  gap: 8px;
  @media ${({ theme }) => theme.DEVICE.tablet} {
    ${flexCenter};
  }
`;

const ContentWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: center;
  border-radius: 30px;
`;
const SpaceIconBox = styled.div`
  display: flex;
  gap: 16px;
`;

const SpaceIcon = styled.div<{ img_url: string; isCurrentSpace: boolean }>`
  width: 24px;
  border-radius: 8px;
  aspect-ratio: 1/1;
  background-image: url(${({ img_url }) => img_url});
  cursor: pointer;
  background-size: cover;
  border: ${({ isCurrentSpace, theme }) =>
    isCurrentSpace ? `1.2px solid ${theme.COLOR.skyblue}` : ''};
`;

const ContentLayOut = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;

  @media ${({ theme }) => theme.DEVICE.tablet} {
    ${flexCenter};
    width: 95%;
  }
`;

const Footer = styled.footer`
  height: 32px;
`;

const S = {
  SpaceIcon,
  SpaceIconBox,
  HeaderWrapper,
  Wrapper,
  IconBox,
  IconGroup,
  SpaceBox,
  ContentWrapper,
  Container,
  ContentLayOut,
  Footer,
};

export default S;
