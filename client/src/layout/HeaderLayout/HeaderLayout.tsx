import Header from './Header';
import S from './style';
import { PropsWithChildren } from 'react';

const HeaderLayout = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <S.Wrapper>
      <Header />
      <S.ContentWrapper>{children}</S.ContentWrapper>
    </S.Wrapper>
  );
};
export default HeaderLayout;
