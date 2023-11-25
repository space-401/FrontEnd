import { omitText } from '@/styles';
import styled from 'styled-components';

const Wrapper = styled.div<{
  isOpen: boolean;
  width: number;
  height: number;
  isSelect: boolean;
}>`
  position: relative;
  display: flex;
  border-radius: 5px;
  background-color: ${({ theme, isSelect }) =>
    isSelect ? theme.COLOR['gray-5'] : theme.COLOR['gray-4']};
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  transition: background-color 0.5s;
  align-items: center;
  justify-content: space-between;
  padding: 12px 8px 12px 10px;
  cursor: pointer;

  .user-title {
    max-width: ${({ width }) => width / 2 + 20}px;
  }
`;

const LabelTitle = styled.div`
  font-size: 12px;
  ${omitText};
  width: 120px;
`;

const ModalButton = styled.div``;

const SearchInput = styled.input`
  color: ${({ theme }) => theme.COLOR.white};
  font-size: 12px;
  background-color: inherit;
  padding: 5px 8px;

  &::placeholder {
    color: ${({ theme }) => theme.COLOR['gray-2']};
  }
`;

const MenuList = styled.ul<{
  grid: boolean;
  menuWidth: number;
  $isOpen: boolean;
  maxHeight: number;
  row: number;
}>`
  position: relative;
  width: ${({ menuWidth }) => menuWidth + 4}px;
  padding: 8px;
  background: ${({ theme }) => theme.COLOR['gray-5']};
  border-radius: 5px;
  max-height: ${({ grid, maxHeight }) => (grid ? '' : maxHeight + 'px')};
  transition: height 0.5s;
  ${({ grid, menuWidth }) =>
    grid
      ? `display: grid; grid-template-columns: ${
          Math.floor(menuWidth / 2) - 10
        }px ${Math.floor(menuWidth / 2) - 10}px; gap : 2px 8px;`
      : 'display:flex; gap: 2px;'}

  flex-direction: column;
  overflow-y: auto;

  li {
    height: 32px;
  }

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
  top: 45px;
  width: 100%;
  height: 0;
  overflow: ${({ $isOpen }) => ($isOpen ? '' : 'hidden')};
  opacity: ${({ $isOpen }) => (!$isOpen ? 0 : 1)};
  border-radius: 5px;
  transition:
    height,
    opacity 0.5s;
`;

const InputContainer = styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  overflow: hidden;
  background: ${({ theme }) => theme.COLOR['gray-4']};
  border: 1px solid ${({ theme }) => theme.COLOR['gray-3']};
  margin-bottom: 12px;
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

const SelectLayOut = styled.div`
  position: relative;
  color: ${({ theme }) => theme.COLOR['gray-1']};
`;

const S = {
  SelectLayOut,
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
