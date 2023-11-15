import Loading from '@pages/Loading';
import { getLogin } from '@apis/user/getLogin';
import tokenStorage from '@utils/tokenStorage';
import { useNavigate, useParams } from 'react-router-dom';
import { PATH } from '@constants/path';
import { SocialType } from '@type/user.type';
import { useEffect } from 'react';
import { useUserStore } from '@store/user';

const Auth = () => {
  const navigate = useNavigate();
  const params = useParams();
  const socialType: string = params.socialType as SocialType;
  const {
    setIsLogin,
    setRefreshToken,
    setAccessToken,
    setUserEmail,
    setSocialType,
  } = useUserStore();
  // ... (previous code)

  const fetchData = async () => {
    const code = new URL(window.location.href).searchParams.get('code');
    const state = new URL(window.location.href).searchParams.get('state');

    console.log('Code:', code);
    console.log('State:', state);

    let data;
    if (code && state) {
      try {
        data = await getLogin({
          code,
          socialType: socialType as SocialType,
        });

        console.log('Login Data:', data);
      } catch (error) {
        console.error('Error:', error);
      }

      if (data) {
        tokenStorage.setAccessToken(data.accessToken, 30);
        tokenStorage.setRefreshToken(data.refreshToken, 60 * 24 * 14);
        setIsLogin(true);
        setRefreshToken(data.refreshToken);
        setAccessToken(data.accessToken);
        setUserEmail(data.userEmail);
        setSocialType(data.socialType);
      }

      console.log('Navigating to SPACE');
      navigate(PATH.SPACE);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <Loading />;
};

export default Auth;
