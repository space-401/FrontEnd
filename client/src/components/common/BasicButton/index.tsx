import styled from 'styled-components';
import { flexCenter } from '@/styles/common';

type BasicButtonProps = {
  children: string;
};
const BasicButton = (props: BasicButtonProps) => {
  const { children } = props;
  return <S.ButtonWrapper>{children}</S.ButtonWrapper>;
};

export default BasicButton;

const ButtonWrapper = styled.button`
  width: 154px;
  height: 44px;
  background-color: #555;
  ${flexCenter}
  border-radius: 10px;
  font-size: ${({ theme }) => theme.FONT_SIZE.small};
`;

const S = {
  ButtonWrapper,
};
