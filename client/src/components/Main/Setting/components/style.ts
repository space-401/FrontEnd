import styled from 'styled-components';

const UserContainer = styled.div`
  position: relative;
  display: flex;
  width: 360px;
  padding: 8px 16px 8px 8px;
  align-items: center;
  gap: 8px;
  border-radius: 10px;
  background: inherit;
  transition: 0.5s;

  &:hover {
    background: ${({ theme }) => theme.COLOR['gray-5']};
  }
`;

const UserProfile = styled.div``;

const UserName = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  color: ${({ theme }) => theme.COLOR.white};
  font-family: ${({ theme }) => theme.FONT_FAMILY.Pretendard};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-18']};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-500']};
`;

const SettingIconBox = styled.div`
  position: absolute;
  cursor: pointer;
  right: 10px;
  border-radius: 5px;
  transition: 0.5s;
  &:hover {
    background: ${({ theme }) => theme.COLOR['gray-4']};
  }
`;

const BackClickBlock = styled.div<{ isOpen: boolean }>`
  position: fixed;
  width: 100%;
  height: 100%;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${({ theme }) => theme.Z_INDEX['LEVEL-4']};
  content: ' ';
  background: transparent;
`;

const MenuGroup = styled.div<{ isOpen: boolean }>`
  right: 30px;
  top: 10px;
  position: absolute;
  width: 192px;
  display: ${({ isOpen }) => (isOpen ? 'inline-flex' : 'none')};
  padding: 8px;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  border-radius: 10px;
  z-index: ${({ theme }) => theme.Z_INDEX['LEVEL-5']};
  background: ${({ theme }) => theme.COLOR['gray-4']};
  box-shadow: ${({ theme }) => theme.SHADOW['shadow-sm']};
`;
const MenuButton = styled.div`
  justify-content: flex-start;
  width: 100%;
  position: relative;
  z-index: ${({ theme }) => theme.Z_INDEX['LEVEL-5']};
  cursor: pointer;
  display: flex;
  padding: 4px 16px;
  align-items: center;
  gap: 8px;

  color: ${({ theme }) => theme.COLOR.white};
  font-family: ${({ theme }) => theme.FONT_FAMILY.Pretendard};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-14']};
  font-size: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-400']};

  border-radius: 5px;

  &:hover {
    background: ${({ theme }) => theme.COLOR['gray-6']};
  }

  transition: background 0.2s;
`;

export const S = {
  UserContainer,
  UserName,
  UserProfile,
  SettingIconBox,
  BackClickBlock,
  MenuGroup,
  MenuButton,
};

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-flex;
  width: 526px;
  padding: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border-radius: 10px;
  background: ${({ theme }) => theme.COLOR['gray-6']};
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
`;

export const M = {
  Container,
};
