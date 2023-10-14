import S from '@components/Landing/style';
import { ReactComponent as RightSvg } from '@assets/svg/landing/fourth_right.svg';

const FourthSection = () => (
  <S.Wrapper>
    <S.Container>
      <S.SubContainer>
        <S.LeftSection></S.LeftSection>
        <S.RightSection>
          <RightSvg />
        </S.RightSection>
      </S.SubContainer>
    </S.Container>
  </S.Wrapper>
);

export default FourthSection;
