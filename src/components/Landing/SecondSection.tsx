import S from '@components/Landing/style';
import { ReactComponent as RightSvg } from '@assets/svg/landing/second_right.svg';
import { ReactComponent as LeftSvg } from '@assets/svg/landing/second_left.svg';
import { SectionProps } from '@type/main.type';

const SecondSection = ({ marginTop }: SectionProps) => {
  return (
    <S.Wrapper>
      <S.MarginBox marginTop={marginTop} />
      <S.Container>
        <S.SubContainer>
          <S.LeftSection top={70} bottom={128}>
            <LeftSvg />
          </S.LeftSection>
          <RightSvg />
        </S.SubContainer>
      </S.Container>
    </S.Wrapper>
  );
};

export default SecondSection;
