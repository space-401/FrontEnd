import S from './style';
import { PropsWithChildren } from 'react';

export type BasicButtonProps = {
  color?: string;
  backgroundColor?: string;
  padding?: number;
  fontSize?: number;
  width?: number;
  height?: number;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const BasicButton = ({
  children,
  ...props
}: PropsWithChildren<BasicButtonProps>) => {
  return <S.ButtonWrapper {...props}>{children}</S.ButtonWrapper>;
};

export default BasicButton;
