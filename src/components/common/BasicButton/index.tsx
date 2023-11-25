import { PropsWithChildren } from 'react';
import S from './style';

export type BasicButtonProps = {
  color?: string;
  backgroundColor?: string;
  padding?: number;
  fontSize?: number;
  borderRadius?: number;
  width?: number;
  height?: number;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  border?: string;
};

export const BasicButton = ({
  children,
  onClick,
  ...props
}: PropsWithChildren<BasicButtonProps>) => {
  return (
    <S.ButtonWrapper onClick={onClick} {...props}>
      {children}
    </S.ButtonWrapper>
  );
};
