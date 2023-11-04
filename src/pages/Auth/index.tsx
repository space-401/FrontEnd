import Loading from '@pages/Loading';
import { useEffect } from 'react';
import { getLogin } from '@apis/user/getLogin';
import tokenStorage from '@utils/tokenStorage';
import { useNavigate, useParams } from 'react-router-dom';
import { PATH } from '@constants/path';
import { SocialType } from '@type/user.type';

const Auth = () => {
  const navigate = useNavigate();
  const params = useParams();
  const socialType: string = params.socialType as SocialType;
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    const state = new URL(window.location.href).searchParams.get('state');

    const fetchData = async () => {
      if (code && state) {
        try {
          const data = await getLogin({
            code,
            socialType: socialType as SocialType,
          });
          console.log('로그인 결과', data);
          tokenStorage.setAccessToken(data.accessToken, 30);
          tokenStorage.setRefreshToken(data.refreshToken, 60 * 24 * 14);
          navigate(PATH.SPACE);
        } catch (error) {
          console.error('Error:', error);
        }
      }
    };
    fetchData();
  }, []);

  return <Loading />;
};
export default Auth;
