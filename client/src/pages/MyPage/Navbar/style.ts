import styled from 'styled-components';

const Wrapper = styled.nav`
  width: 303px;
  height: 100%;
  background: ${({ theme }) => theme.COLOR['gray-6']};
  border-radius: 30px;
  display: flex;
  padding: 80px 24px;
`;
const NavGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const NavButton = styled.div<{ select: boolean }>`
  cursor: pointer;
  height: 56px;
  display: flex;
  width: 255px;
  padding: 16px;
  align-items: flex-start;
  gap: 16px;
  border-radius: 15px;
  background: ${({ theme, select }) => (select ? theme.COLOR['gray-5'] : '')};
`;

const NavSpan = styled.span`
  color: ${({ theme }) => theme.COLOR.white};
  font-family: ${({ theme }) => theme.FONT_FAMILY.Pretendard};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-20']};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-500']};
`;

const S = {
  Wrapper,
  NavGroup,
  NavButton,
  NavSpan,
};

export default S;
