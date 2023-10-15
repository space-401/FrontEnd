import S from '@components/Landing/style';
import { ReactComponent as RightSvg } from '@assets/svg/landing/fourth_right.svg';
import { ReactComponent as LeftSvg } from '@assets/svg/landing/fourth_left.svg';
import { SectionProps } from '@type/main.type';

const FourthSection = ({ marginTop }: SectionProps) => {
  return (
    <S.Wrapper>
      <S.MarginBox marginTop={marginTop} />
      <S.Container>
        <S.SubContainer>
          <S.LeftSection top={4} bottom={80}>
            <LeftSvg />
          </S.LeftSection>
          <RightSvg />
        </S.SubContainer>
      </S.Container>
    </S.Wrapper>
  );
};

export default FourthSection;
