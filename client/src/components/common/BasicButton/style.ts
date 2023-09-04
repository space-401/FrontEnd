import styled from 'styled-components';
import { flexCenter } from '@/styles/common';

export interface IBasicButton {
  color?: string;
  backgroundColor?: string;
  padding?: number;
  fontSize?: number;
}

//비활성화시 색상
const ButtonWrapper = styled.button<IBasicButton>`
  height: 44px;
  ${flexCenter}
  border-radius: 10px;
  //스토리 적용
  padding: ${({ padding }) => padding || 16}px;
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
    background-color: #292929;
  }
`;

const S = {
  ButtonWrapper,
};

export default S;
