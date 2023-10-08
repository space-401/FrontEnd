import { omitText } from '@styles/common';

const Wrapper = styled.div<{ isOpen: boolean; minWidth: number }>`
  position: relative;
  display: flex;
  border-radius: 10px;
  background-color: ${({ theme, isOpen }) =>
    isOpen ? theme.COLOR['gray-6'] : theme.COLOR['gray-5']};
  color: ${({ theme }) => theme.COLOR['gray-1']};
  width: ${({ minWidth }) => minWidth}px;
  height: 60px;
  transition: background-color 0.5s;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  .user-title {
    max-width: ${({ minWidth }) => minWidth / 2 + 20}px;
  }

  [class*='MuiChip-label'] {
    width: 70%;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 2px 8px;
    white-space: nowrap;
  }
`;

import styled from 'styled-components';

const LabelTitle = styled.div`
  width: calc(100% - 20px);
  ${omitText}
`;

const ModalButton = styled.div``;

const SearchInput = styled.input`
  width: 100%;
  color: ${({ theme }) => theme.COLOR.black};
  background-color: inherit;
  padding: 5px 8px;
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-24']};
  &::placeholder {
    color: ${({ theme }) => theme.COLOR['gray-2']};
  }
`;

const MenuList = styled.ul<{
  grid: boolean;
  menuWidth: number;
  $isOpen: boolean;
  maxHeight: number;
}>`
  position: relative;
  width: ${({ menuWidth }) => menuWidth}px;
  padding: 16px;
  background: ${({ theme }) => theme.COLOR['gray-6']};
  border: 1px solid ${({ theme }) => theme.COLOR['gray-5']};
  border-radius: 5px;
  transition: height 0.5s;
  ${({ grid, menuWidth }) =>
    grid
      ? `display: grid; grid-template-columns: ${
          Math.floor(menuWidth / 2) - 24
        }px ${Math.floor(menuWidth / 2) - 24}px; gap: 8px 16px;`
      : 'display:flex; gap: 2px;'}
  height: ${({ $isOpen, maxHeight }) => ($isOpen ? maxHeight : '0')}px;
  flex-direction: column;
  overflow-y: scroll;

  z-index: ${({ theme }) => theme.Z_INDEX['LEVEL-4']};

  ${({ grid }) => grid && '&::-webkit-scrollbar {display: none;}'}
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    height: 10%;
    background: ${({ theme }) => theme.COLOR['gray-4']};
    border-radius: 5px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.COLOR['gray-5']};
    border-radius: 5px;
  }
`;

const Container = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  left: 0;
  top: 60px;
  width: 100%;
  height: 0;
  opacity: ${({ $isOpen }) => (!$isOpen ? 0 : 1)};
  border-radius: 5px;
  transition:
    height,
    opacity 0.5s;
  z-index: ${({ theme }) => theme.Z_INDEX['LEVEL-2']};
`;

const InputContainer = styled.div<{ isOpen: boolean }>`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  overflow: hidden;
  background: ${({ theme }) => theme.COLOR['gray-4']};
  border: 1px solid ${({ theme }) => theme.COLOR['gray-3']};
  margin-bottom: 12px;
  flex-direction: column;
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
  z-index: ${({ theme }) => theme.Z_INDEX['LEVEL-3']};
  cursor: default;
  content: ' ';
  background: transparent;
`;

const S = {
  Wrapper,
  LabelTitle,
  ModalButton,
  SearchInput,
  MenuList,
  Container,
  InputContainer,
  BackClickBlock,
};

export default S;
