import styled from 'styled-components';

const Container = styled.div<{ isOpen: boolean }>`
  position: fixed;
  right: 0;
  width: 392px;
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

const SettingBottom = styled.div``;

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

const S = {
  UserCount,
  Container,
  SettingTop,
  SettingCenter,
  SettingBottom,
  DeleteButton,
};

export default S;
