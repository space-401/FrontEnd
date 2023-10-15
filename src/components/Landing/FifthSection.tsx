import S from '@components/Landing/style';
import { SectionProps } from '@type/main.type';
import { ReactComponent as BottomBackImg } from '@assets/svg/landing/landing_bottom.svg';
import { ReactComponent as ArrowSvg } from '@assets/svg/landing/arrow_right.svg';

const FifthSection = ({ marginTop }: SectionProps) => {
  const onClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <S.Wrapper>
      <S.MarginBox marginTop={marginTop} />
      <S.BackGround>
        <S.ImgBox>
          <BottomBackImg />
          <S.RandingButton onClick={onClick} bottom={72}>
            처음으로
            <ArrowSvg />
          </S.RandingButton>
        </S.ImgBox>
      </S.BackGround>
    </S.Wrapper>
  );
};

export default FifthSection;
