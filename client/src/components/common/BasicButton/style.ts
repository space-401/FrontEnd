import styled from 'styled-components';
import { flexCenter } from '@/styles/common';

//비활성화시 색상
const ButtonWrapper = styled.button`
  padding: 16px;
  height: 44px;

  ${flexCenter}
  border-radius: 10px;
  font-size: ${({ theme }) => theme.FONT_SIZE.small};
  background-color: ${({ theme }) => theme.PALETTE.blue};
  color: black;
  :disabled {
    background-color: #555;
  }
`;

const S = {
  ButtonWrapper,
};

export default S;
