import S from '@/components/common/BasicBox/style';
import { PropsWithChildren } from 'react';

export type BasicBoxProp = {
  width: number;
  color: string;
  borderradius: number;
  onClick?: React.MouseEventHandler<HTMLElement>;
  backgroundImage?: string;
};

const BasicBox = (props: PropsWithChildren<BasicBoxProp>) => {
  const { children, ...Wrapperprops } = props;
  return <S.Wrapper {...Wrapperprops}>{children}</S.Wrapper>;
};

export default BasicBox;
