import S from './style';
import { ReactNode } from 'react';

export type BasicBoxProp = {
  width: number;
  color?: string;
  children?: ReactNode;
  borderradius: number;
};

const BasicBox = (props: BasicBoxProp) => {
  const { width, color, children, borderradius } = props;
  return (
    <S.Wrapper width={width} color={color} borderradius={borderradius}>
      {children}
    </S.Wrapper>
  );
};

export default BasicBox;
