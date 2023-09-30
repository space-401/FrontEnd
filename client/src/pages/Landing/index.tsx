import { theme } from '@/styles/theme/theme';
import S from './style';
import { ReactComponent as KakaoIcon } from '@assets/svg/login/kakao.svg';
import { ReactComponent as NaverIcon } from '@assets/svg/login/naver.svg';
import { ReactComponent as GoogleIcon } from '@assets/svg/login/google.svg';

const Landing = () => {
  return (
    <S.Wrapper>
      <S.Image />
      <S.Text>
        SNS로 간편하게 로그인하고 <br />
        친구들과 함께 추억을 기록하고 소통해보세요!
      </S.Text>
      <S.LoginContainer>
        <S.LoginBox backgroundColor={theme.LOGIN_COLOR.kakao} color="black">
          <KakaoIcon style={{ position: 'absolute', left: 16 }} />
          카카오 로그인
        </S.LoginBox>
        <S.LoginBox backgroundColor={theme.LOGIN_COLOR.naver} color="white">
          <NaverIcon style={{ position: 'absolute', left: 16 }} />
          네이버 로그인
        </S.LoginBox>
        <S.LoginBox backgroundColor={theme.LOGIN_COLOR.google} color="black">
          <GoogleIcon style={{ position: 'absolute', left: 16 }} />
          Google 로그인
        </S.LoginBox>
      </S.LoginContainer>
    </S.Wrapper>
  );
};
export default Landing;
