import { SectionProps } from '@/types';
import { ReactComponent as ArrowSvg } from '@/assets/svg/landing/arrow_right.svg';
import { ReactComponent as BottomBackImg } from '@/assets/svg/landing/landing_bottom.svg';
import S from './style';

export const FifthSection = ({ marginTop }: SectionProps) => {
  const onClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <S.Wrapper>
      <S.MarginBox marginTop={marginTop} />
      <S.BackGround data-aos-duration="1500" data-aos="fade-down">
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
