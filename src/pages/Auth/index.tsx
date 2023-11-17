import Loading from '@pages/Loading';
import { useNavigate, useParams } from 'react-router-dom';
import {SocialType, UserTokenType} from '@type/user.type';
import { useLoginQuery } from '@hooks/api/user/useLoginQuery';
import { useEffect } from 'react';
import tokenStorage from '@utils/tokenStorage';
import { PATH } from '@constants/path';

const Auth = () => {
  const navigate = useNavigate();
  const params = useParams();
  const socialType = params.socialType as SocialType;

  const code = new URL(window.location.href).searchParams.get('code')!;
  const state = new URL(window.location.href).searchParams.get('state')!;

  const { LoginResponse, isSuccess } = useLoginQuery({
    code,
    socialType,
    state: Boolean(state),
  });

  useEffect(() => {
    if (isSuccess) {
      const { accessToken, refreshToken } = LoginResponse as UserTokenType;
      tokenStorage.setAccessToken(accessToken, 30);
      tokenStorage.setRefreshToken(refreshToken, 60 * 24 * 14);
      navigate(PATH.SPACE);
    }
  }, [isSuccess, LoginResponse, navigate]);

  return <Loading />;
};

export default Auth;
