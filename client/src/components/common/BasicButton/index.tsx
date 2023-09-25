import S from '@/components/common/BasicButton/style';
import { PropsWithChildren } from 'react';

export type BasicButtonProps = {
  color?: string;
  backgroundColor?: string;
  padding?: number;
  fontSize?: number;
  borderRadius?: number;
  width: number;
  height: number;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

const BasicButton = ({
  children,
  ...props
}: PropsWithChildren<BasicButtonProps>) => {
  return <S.ButtonWrapper {...props}>{children}</S.ButtonWrapper>;
};

export default BasicButton;
