import styled from 'styled-components';

const Container = styled.div<{ isOpen: boolean }>`
  position: fixed;
  right: 0;
  width: ${({ isOpen }) => (isOpen ? '392px' : '0px')};
  height: 100vh;
  background: ${({ theme }) => theme.COLOR['gray-6']};
  transition: 0.5s width;
`;

const SettingTop = styled.div`
  display: flex;
  width: 392px;
  height: 72px;
  padding: 24px;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;

  color: ${({ theme }) => theme.COLOR.white};
  font-family: ${({ theme }) => theme.FONT_FAMILY.Pretendard};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-20']};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-500']};

  border-bottom: 1px solid ${({ theme }) => theme.COLOR['gray-5']};
`;

const SettingCenter = styled.ul`
  display: flex;
  padding: 32px 16px;
  flex-direction: column;
  gap: 8px;
`;

const SettingBottom = styled.div`
  position: absolute;
  width: 100%;
  padding: 24px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  bottom: 0;
  display: flex;
`;

const UserCount = styled.div`
  display: inline-flex;
  padding: 0 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border-radius: 5px;
  background: ${({ theme }) => theme.COLOR['gray-5']};
  color: ${({ theme }) => theme.COLOR.white};
  font-family: ${({ theme }) => theme.FONT_FAMILY['IBM Plex Sans KR']};
  font-size: 17px;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-500']};
`;

const DeleteButton = styled.div`
  cursor: pointer;
  position: absolute;
  right: 24px;
`;

const SpaceOutBox = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 10px;
  background: ${({ theme }) => theme.COLOR['gray-4']};
`;

const InviteUserBox = styled.div`
  cursor: pointer;
  display: flex;
  padding: 14px 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 10px;
  background: ${({ theme }) => theme.COLOR.skyblue};

  color: ${({ theme }) => theme.COLOR.black};
  text-align: center;
  font-family: ${({ theme }) => theme.FONT_FAMILY.Pretendard};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-16']};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-400']};
  width: 280px;
  height: 100%;
`;
const S = {
  UserCount,
  Container,
  SettingTop,
  SettingCenter,
  SettingBottom,
  DeleteButton,
  SpaceOutBox,
  InviteUserBox,
};

export default S;
