import { flexCenter } from '@/styles';
import styled from 'styled-components';
import type { BasicButtonProps } from './index';

//비활성화시 색상
const ButtonWrapper = styled.button<BasicButtonProps>`
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  ${flexCenter};
  border-radius: ${({ borderRadius }) => borderRadius || 10}px;
  border: ${({ border }) => (border ? border : 'none')};
  //스토리 적용
  padding: 12px;
  padding-left: ${({ padding }) => padding || 16}px;
  padding-right: ${({ padding }) => padding || 16}px;
  //스토리 적용
  font-size: ${({ fontSize, theme }) =>
    `${fontSize}px` || theme.TEXT_SIZE['text-16']};
  //스토리 적용
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor || theme.COLOR.skyblue};
  //스토리 적용
  color: ${({ color, theme }) => color || theme.COLOR.black};
  /*token required*/
  :disabled {
    background-color: #005e61;
    color: ${({ color, theme }) => color || theme.COLOR['gray-6']};
  }
`;

const S = {
  ButtonWrapper,
};

export default S;
