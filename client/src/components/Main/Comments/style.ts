import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;
const PaginationButton = styled.div<{ select: boolean }>`
  display: flex;
  width: 20px;
  height: 20px;
  overflow: hidden;
  cursor: pointer;
  background: ${({ select, theme }) => (select ? theme.COLOR['gray-5'] : '')};
  color: ${({ theme }) => theme.COLOR.white};
  font-family: ${({ theme }) => theme.FONT_FAMILY.Pretendard};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-14']};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-700']};
  line-height: ${({ theme }) => theme.TEXT_SIZE['text-16']};
  align-items: center;
  justify-content: center;
`;
const CommentList = styled.div<{ isOpen: boolean }>`
  height: ${({ isOpen }) => (isOpen ? 'fit-content' : 0)};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const PaginationGroup = styled.div`
  justify-content: center;
  gap: 10px;
  display: flex;
`;

const S = {
  Wrapper,
  PaginationButton,
  CommentList,
  PaginationGroup,
};

export default S;
