import S from '@components/Landing/style';
import { ReactComponent as RightSvg } from '@assets/svg/landing/second_right.svg';

const SecondSection = () => (
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

export default SecondSection;
