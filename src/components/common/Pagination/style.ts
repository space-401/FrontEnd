import styled from 'styled-components';

const PaginationBox = styled.div`
  margin-top: 6px;
  display: flex;
  justify-content: space-evenly;

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
  width: ${({ width }) => (width ? width + 'px' : '')};
  min-width: 16px;
  height: 20px;
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-14']};
  font-family: ${({ theme }) => theme.FONT_FAMILY.Pretendard};
  justify-content: center;
  cursor: pointer;
  color: ${({ theme }) => theme.COLOR.white};
  padding-bottom: ${({ select }) => (select ? '' : '3px')};
  border-bottom: ${({ select, theme }) =>
    select ? `3px solid ${theme.COLOR.skyblue}` : ''};

  div {
    display: ${({ select }) => (select ? 'block' : 'none')};
  }
`;

const S = {
  PaginationBox,
  Button,
};

export default S;
