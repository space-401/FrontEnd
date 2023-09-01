import S from './style';
import { PropsWithChildren } from 'react';

export type BasicBoxProp = {
  width: number;
  color: ColorType;
  borderradius: number;
};

type ColorType = 'lightgrey' | 'grey';

const BasicBox = (props: PropsWithChildren<BasicBoxProp>) => {
  const { width, color, children, borderradius } = props;
  return (
    <S.Wrapper width={width} color={color} borderradius={borderradius}>
      {children}
    </S.Wrapper>
  );
};

export default BasicBox;
