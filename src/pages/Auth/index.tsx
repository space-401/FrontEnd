import Loading from '@pages/Loading';
import { useEffect } from 'react';
import axios from 'axios';
import { AXIOS_BACK_URL } from '@constants/api';

const Auth = () => {
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    const state = new URL(window.location.href).searchParams.get('state');

    const fetchData = async () => {
      if (code && state) {
        try {
          const response = await axios.get(
            `${AXIOS_BACK_URL}/user/auth/kakao?code=${code}&state=${state}`
          );
          console.log('data', response.data);
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
