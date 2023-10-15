import S from '@components/Landing/style';
import { ReactComponent as RightSvg } from '@assets/svg/landing/fourth_right.svg';
import { ReactComponent as LeftSvg } from '@assets/svg/landing/fourth_left.svg';
import { ReactComponent as BackSvg } from '@assets/svg/landing/foruth_background.svg';
import { SectionProps } from '@type/main.type';

const FourthSection = ({ marginTop }: SectionProps) => {
  return (
    <S.Wrapper>
      <S.MarginBox marginTop={marginTop} />
      <S.Container>
        <S.SubContainer>
          <S.LeftSection
            data-aos-duration="1500"
            data-aos="fade-up"
            top={4}
            bottom={80}
          >
            <LeftSvg />
          </S.LeftSection>
          <S.RightSection
            data-aos-duration="1500"
            data-aos="fade-up"
            top={0}
            bottom={0}
          >
            <RightSvg />
          </S.RightSection>
          <S.SvgBackGround>
            <BackSvg />
          </S.SvgBackGround>
        </S.SubContainer>
      </S.Container>
    </S.Wrapper>
  );
};

export default FourthSection;
