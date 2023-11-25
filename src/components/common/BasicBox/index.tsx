import { PropsWithChildren } from 'react';
import S from './style';

export type BasicBoxProp = {
  width: number;
  color?: string;
  borderradius: number;
  onClick?: React.MouseEventHandler<HTMLElement>;
  backgroundImage?: string;
};

export const BasicBox = (props: PropsWithChildren<BasicBoxProp>) => {
  const { children, ...Wrapperprops } = props;
  return <S.Wrapper {...Wrapperprops}>{children}</S.Wrapper>;
};
