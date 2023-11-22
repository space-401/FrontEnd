import { theme } from '@/styles/theme/theme';
import S from '@pages/Login/style';
import { ReactComponent as KakaoIcon } from '@assets/svg/login/kakao.svg';
import { ReactComponent as NaverIcon } from '@assets/svg/login/naver.svg';
import { ReactComponent as GoogleIcon } from '@assets/svg/login/google.svg';
import { ReactComponent as SignLogo } from '@assets/svg/signlogo.svg';
import SocialKakao from '@/components/Auth/SocialKakao';
import SocialNaver from '@/components/Auth/SocialNaver';
import SocialGoogle from '@/components/Auth/SocialGoogle';

const LoginPage = () => {
  const { kakaoHandleLogin } = SocialKakao();
  const { naverHandleLogin } = SocialNaver();
  const { googleSocialLogin } = SocialGoogle();

  return (
    <S.Wrapper>
      <S.LogoBox>
        <SignLogo />
      </S.LogoBox>
      <S.Content>
        <S.Text>
          SNS로 간편하게 로그인하고 <br />
          친구들과 함께 추억을 기록하고 소통해보세요!
        </S.Text>

        <S.LoginContainer>
          <S.LoginBox
            backgroundColor={theme.LOGIN_COLOR.kakao}
            color={'#391B1B'}
            onClick={kakaoHandleLogin}
          >
            <KakaoIcon style={{ position: 'absolute', left: 16 }} />
            카카오 로그인
          </S.LoginBox>
          <S.LoginBox
            backgroundColor={theme.LOGIN_COLOR.naver}
            color={theme.COLOR.white}
            onClick={naverHandleLogin}
          >
            <NaverIcon style={{ position: 'absolute', left: 16 }} />
            네이버 로그인
          </S.LoginBox>
          <S.LoginBox
            backgroundColor={theme.LOGIN_COLOR.google}
            color={theme.COLOR['gray-6']}
            onClick={googleSocialLogin}
          >
            <GoogleIcon style={{ position: 'absolute', left: 16 }} />
            구글 로그인
          </S.LoginBox>
        </S.LoginContainer>
      </S.Content>
    </S.Wrapper>
  );
};
export default LoginPage;
