import styled from 'styled-components';

const Wrapper = styled.div<{ $isSearch: boolean; minWidth: number }>`
  position: relative;
  display: flex;
  min-width: ${({ minWidth }) => minWidth}px;
  padding: 12px 12px 12px 16px;
  justify-content: space-between;
  align-items: center;

  border-radius: 5px;
  background-color: ${({ theme, $isSearch }) =>
    !$isSearch ? theme.COLOR['gray-4'] : theme.COLOR['gray-5']};
  color: ${({ theme }) => theme.COLOR.inputColor};

  transition: background-color 0.5s;

  .user-title {
    width: ${({ minWidth }) => minWidth - 80}px;
  }
  .tag-title {
    max-width: ${({ minWidth }) => minWidth - 45}px;
  }
`;

const LabelTitle = styled.div``;

const ModalButton = styled.div``;

const SearchInput = styled.input`
  background: inherit;
  width: 80%;
  color: ${({ theme }) => theme.COLOR.white};
`;

const MenuList = styled.ul<{ $isOpen: boolean }>`
  padding: 10px;
  background: ${({ theme }) => theme.COLOR['gray-4']};
  border-radius: 5px;
  transition: height 0.5s;
  display: flex;
  height: ${({ $isOpen }) => ($isOpen ? '200' : '0')}px;
  max-height: 300px;
  gap: 5px;
  flex-direction: column;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    height: 10%;
    background: ${({ theme }) => theme.COLOR['gray-3']};
    border-radius: 5px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.COLOR['gray-4']};
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
`;

const S = {
  Wrapper,
  LabelTitle,
  ModalButton,
  SearchInput,
  MenuList,
  Container,
};

export default S;
