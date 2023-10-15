import S from '@components/Landing/style';
import { ReactComponent as LeftSvg } from '@assets/svg/landing/third_left.svg';

export const ThirdSection = () => (
  <S.Wrapper>
    <S.Container>
      <S.SubContainer>
        <S.LeftSection>
          <LeftSvg />
        </S.LeftSection>
        <S.RightSection></S.RightSection>
      </S.SubContainer>
    </S.Container>
  </S.Wrapper>
);

export default ThirdSection;
