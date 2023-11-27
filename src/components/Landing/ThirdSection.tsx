import { SectionProps } from '@/types';
import { ReactComponent as LeftSvg } from '@/assets/svg/landing/third_left.svg';
import { ReactComponent as RightSvg } from '@/assets/svg/landing/third_right.svg';
import S from './style';

export const ThirdSection = ({ marginTop }: SectionProps) => {
  return (
    <S.Wrapper>
      <S.MarginBox marginTop={marginTop} />
      <S.Container>
        <S.SubContainer>
          <S.LeftSection
            data-aos-duration="1500"
            data-aos="fade-up"
            top={86}
            bottom={19}
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
        </S.SubContainer>
      </S.Container>
    </S.Wrapper>
  );
};
