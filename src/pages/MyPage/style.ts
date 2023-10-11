import styled from 'styled-components';

const MyPageWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  min-height: 80vh;
  padding-bottom: 16px;
  display: flex;
  gap: 7px;
`;

const Container = styled.section`
  width: calc(100% - 201px);
  height: 100%;
  background: ${({ theme }) => theme.COLOR['gray-6']};
  border-radius: 15px;
  padding: 48px 105px 0;
  margin-bottom: 16px;
`;

const Wrapper = styled.nav`
  width: 194px;
  height: 100%;
  background: ${({ theme }) => theme.COLOR['gray-6']};
  border-radius: 15px;
  display: flex;
  padding: 80px 15px;
`;
const NavGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
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
`;

const NavSpan = styled.span`
  color: ${({ theme }) => theme.COLOR.white};
  font-family: ${({ theme }) => theme.FONT_FAMILY.Pretendard};
  font-size: 13px;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-500']};
`;

const S = {
  MyPageWrapper,
  Container,
  Wrapper,
  NavGroup,
  NavButton,
  NavSpan,
};

export default S;
