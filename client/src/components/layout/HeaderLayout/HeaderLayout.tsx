import Header from './Header';
import S from './style';

type HeaderLayoutProps = {
  children: React.ReactNode;
  $isContentBox: boolean;
};
//헤더 레이아웃
//isContentBox : 뒤에 연한 배경색이 있는가? boolean 타입으로 지정
const HeaderLayout = ({ children, $isContentBox }: HeaderLayoutProps) => {
  return (
    <>
      <S.Wrapper>
        <Header />
        <S.ContentWrapper $isContentBox={$isContentBox}>
          {children}
        </S.ContentWrapper>
      </S.Wrapper>
    </>
  );
};
export default HeaderLayout;
