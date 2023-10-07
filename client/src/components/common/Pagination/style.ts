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
  width: ${({ width }) => (width ? width : '')}px;
  min-width: 16px;
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

const S = {
  PaginationBox,
  Button,
  Select,
};

export default S;
