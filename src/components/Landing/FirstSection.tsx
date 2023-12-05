import { PATH } from '@/constants';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as ArrowSvg } from '@/assets/svg/landing/arrow_right.svg';
import { ReactComponent as LandingTopImg } from '@/assets/svg/landing/landing_top.svg';
import L from './style';

export const FirstSection = () => {
  const navigate = useNavigate();
  return (
    <L.Wrapper>
      <L.Container>
        <L.ImgBox data-aos-duration="1500" data-aos="fade-up">
          <LandingTopImg />
          <L.RandingButton
            onClick={() => navigate(PATH.LOGIN, { replace: true })}
            bottom={145}
          >
            시작하기
            <ArrowSvg />
          </L.RandingButton>
        </L.ImgBox>
      </L.Container>
    </L.Wrapper>
  );
};
