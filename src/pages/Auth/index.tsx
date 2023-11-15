import Loading from '@pages/Loading';
import { useNavigate, useParams } from 'react-router-dom';
import { SocialType } from '@type/user.type';
import { useUserStore } from '@store/user';
import { useLoginQuery } from '@hooks/api/user/useLoginQuery';
import { useEffect } from 'react';
import tokenStorage from '@utils/tokenStorage';
import { PATH } from '@constants/path';

const Auth = () => {
  const navigate = useNavigate();
  const params = useParams();
  const socialType = params.socialType as SocialType;
  const setUserInfo = useUserStore((state) => state.setUserInfo);

  const code = new URL(window.location.href).searchParams.get('code')!;
  const state = new URL(window.location.href).searchParams.get('state')!;

  const { LoginResponse, isSuccess } = useLoginQuery({
    code,
    socialType,
    state: Boolean(state),
  });

  useEffect(() => {
    if (isSuccess) {
      const { accessToken, refreshToken } = LoginResponse;
      tokenStorage.setAccessToken(accessToken, 30);
      tokenStorage.setRefreshToken(refreshToken, 60 * 24 * 14);
      setUserInfo(LoginResponse);
      console.log('LoginResponse', LoginResponse);
      navigate(PATH.SPACE);
    }
  }, [isSuccess]);

  return <Loading />;
};

export default Auth;
