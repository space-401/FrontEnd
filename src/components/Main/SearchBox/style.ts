import styled from 'styled-components';

const Wrapper = styled.form`
  position: relative;
  height: 28px;
`;

const SearchInput = styled.input`
  width: 105px;
  height: inherit;
  border-radius: 5px;
  padding: 8px 20px 8px 8px;
  background: ${({ theme }) => theme.COLOR['gray-5']};
  color: ${({ theme }) => theme.COLOR.white};
  font-family: ${({ theme }) => theme.FONT_FAMILY.Pretendard};
  font-size: 10px;
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
