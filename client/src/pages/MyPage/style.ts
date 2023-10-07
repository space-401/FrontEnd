import styled from 'styled-components';

const MyPageWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  min-height: calc(100vh - 82px);
  padding-bottom: 16px;
  display: flex;
  gap: 7px;
`;

const Container = styled.section`
  width: calc(100% - 201px);
  height: 100%;
  background: ${({ theme }) => theme.COLOR['gray-6']};
  border-radius: 30px;
  padding: 80px 150px 0;
`;

const Wrapper = styled.nav`
  width: 194px;
  height: 100%;
  background: ${({ theme }) => theme.COLOR['gray-6']};
  border-radius: 30px;
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
  gap: 16px;
  border-radius: 15px;
  background: ${({ theme, select }) => (select ? theme.COLOR['gray-5'] : '')};
  
  svg{
    margin-left: 10px; 
  }
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
