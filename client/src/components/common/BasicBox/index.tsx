import S from './style';
import { PropsWithChildren } from 'react';

export type BasicBoxProp = {
  width: number;
  color: ColorType;
  borderradius: number;
  onClick?: React.MouseEventHandler<HTMLElement>;
};

type ColorType = 'lightgrey' | 'grey';

const BasicBox = (props: PropsWithChildren<BasicBoxProp>) => {
  const { width, color, children, borderradius, onClick } = props;
  return (
    <S.Wrapper
      width={width}
      color={color}
      borderradius={borderradius}
      onClick={onClick}
    >
      {children}
    </S.Wrapper>
  );
};

export default BasicBox;
