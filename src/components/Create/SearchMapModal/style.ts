import styled from 'styled-components';
import { modalBackGround } from '@/styles/common';

const Wrapper = styled.div`
  position: absolute;
  ${modalBackGround};
  display: grid;
  grid-template-columns: 1fr 2fr;
  min-width: 1200px;
  max-width: 1280px;
  height: 800px;
  padding: 32px 24px;
  border-radius: 10px;
  background: ${({ theme }) => theme.COLOR['gray-6']};
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
`;

const LeftContainer = styled.div`
  padding-top: 10px;
  position: relative;
  height: 100%;
  overflow: hidden;
`;

const RightContainer = styled.div``;

const SearchBox = styled.form`
  width: calc(100% - 20px);
  position: absolute;
  top: 0;
  background: ${({ theme }) => theme.COLOR['gray-5']};
  color: white;
  border: 2px solid ${({ theme }) => theme.COLOR['gray-3']};
  border-radius: 5px;
  overflow: hidden;
`;

const InputBox = styled.input`
  font-family: ${({ theme }) => theme.FONT_FAMILY.Pretendard};
  width: 90%;
  padding: 10px;
  border: none;
  color: white;

  background: ${({ theme }) => theme.COLOR['gray-5']};
`;
const SubmitButton = styled.button`
  font-family: ${({ theme }) => theme.FONT_FAMILY.Pretendard};
  color: ${({ theme }) => theme.COLOR.white};
`;

const SearchList = styled.ul`
  padding-top: 44px;
  padding-right: 24px;
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 10px;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const OneList = styled.li<{ select: boolean }>`
  cursor: pointer;
  border-radius: 5px;
  border: 2px solid
    ${({ select, theme }) =>
      select ? theme.COLOR['gray-4'] : theme.COLOR['gray-5']};
  padding: 16px;
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.COLOR['gray-5']};
`;

const Category = styled.div`
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-14']};
  color: ${({ theme }) => theme.COLOR['gray-2']};
`;

const LeftInfo = styled.div`
  width: 212px;
  display: flex;
  flex-direction: column;
  gap: 7px;
  color: ${({ theme }) => theme.COLOR['gray-1']};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-16']};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-400']};
`;

const RightButton = styled.div`
  display: flex;
  align-items: center;
`;

const SelectButton = styled.div`
  display: flex;
  padding: 12px 24px;
  flex-direction: column;
  gap: 8px;
  border-radius: 10px;
  background: ${({ theme }) => theme.COLOR.skyblue};
`;

const PaginationSticky = styled.div`
  position: sticky;
  bottom: 0;
  background: ${({ theme }) => theme.COLOR['gray-6']};
`;

const StickyInner = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const S = {
  Wrapper,
  LeftContainer,
  RightContainer,
  SearchBox,
  InputBox,
  SubmitButton,
  SearchList,
  OneList,
  Category,
  LeftInfo,
  RightButton,
  SelectButton,
  PaginationSticky,
  StickyInner,
};

const PaginationBox = styled.div`
  margin-top: 6px;
  display: flex;
  gap: 24px;
  justify-content: center;

  :disabled {
    display: none;
  }
`;

const Button = styled.button<{
  width?: number;
  isHidden?: boolean;
  select?: boolean;
}>`
  display: ${({ isHidden }) => (isHidden ? 'none' : 'block')};
  position: relative;
  width: ${({ width }) => (width ? width : '')}px;
  height: 20px;
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-14']};
  font-family: ${({ theme }) => theme.FONT_FAMILY.Pretendard};
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  border-radius: 12px;
  color: ${({ theme }) => theme.COLOR.white};

  div {
    display: ${({ select }) => (select ? 'block' : 'none')};
  }
`;

const Select = styled.div`
  position: absolute;
  transform: translate(-50%, 50%);
  left: 50%;
  bottom: -10px;
  width: 100%;
  height: 3px;
  background: ${({ theme }) => theme.COLOR.skyblue};
  border-radius: 10px;
`;

export const P = {
  PaginationBox,
  Button,
  Select,
};
