import S from './style';
import { PropsWithChildren } from 'react';

export type BasicBoxProp = {
  width: number;
  color: ColorType;
  borderradius: number;
  onClick?: React.MouseEventHandler<HTMLElement>;
  backgroundImage?: string;
};

type ColorType = 'lightgrey' | 'grey';

const BasicBox = (props: PropsWithChildren<BasicBoxProp>) => {
  const { children, ...Wrapperprops } = props;
  return <S.Wrapper {...Wrapperprops}>{children}</S.Wrapper>;
};

export default BasicBox;
