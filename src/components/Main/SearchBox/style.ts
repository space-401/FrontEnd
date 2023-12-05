import styled from 'styled-components';

const Wrapper = styled.form<{ height: number }>`
  position: relative;
  height: ${({ height }) => height}px;
`;

const SearchInput = styled.input<{ width: number; isValue: boolean }>`
  width: ${({ width }) => width}px;
  height: inherit;
  border-radius: 5px;
  padding: 12px 8px 12px 10px;
  background: ${({ theme, isValue }) =>
    isValue ? theme.COLOR['gray-4'] : theme.COLOR['gray-5']};
  color: ${({ theme }) => theme.COLOR.white};
  font-family: ${({ theme }) => theme.FONT_FAMILY.Pretendard};
  font-size: 12px;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-400']};

  &:focus {
    background: ${({ theme }) => theme.COLOR['gray-7']};
  }

  &::placeholder {
    color: ${({ theme }) => theme.COLOR.white};
  }

  transition: background 0.5s;
`;
const IconBox = styled.button`
  position: absolute;
  top: 50%;
  transform: translate(50%, -50%);
  right: 10%;
  cursor: pointer;
`;

const S = {
  Wrapper,
  SearchInput,
  IconBox,
};

export default S;
