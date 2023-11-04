import Loading from '@pages/Loading';
import { useEffect } from 'react';
import { getLogin } from '@apis/user/getLogin';

const Auth = () => {
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    const state = new URL(window.location.href).searchParams.get('state');

    const fetchData = async () => {
      if (code && state) {
        try {
          const data = await getLogin({ code, socialType: 'naver' });
          console.log('로그인 결과', data);
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
