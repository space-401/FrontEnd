import { SectionProps } from '@/types';
import { ReactComponent as LeftSvg } from '@/assets/svg/landing/second_left.svg';
import { ReactComponent as RightSvg } from '@/assets/svg/landing/second_right.svg';
import S from './style';

export const SecondSection = ({ marginTop }: SectionProps) => {
  return (
    <S.Wrapper>
      <S.MarginBox marginTop={marginTop} />
      <S.Container>
        <S.SubContainer>
          <S.LeftSection
            data-aos-duration="1500"
            data-aos="fade-up"
            top={70}
            bottom={128}
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
