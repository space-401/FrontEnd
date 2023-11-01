import Loading from '@pages/Loading';
import { useEffect } from 'react';
import axios from 'axios';

const Auth = () => {
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    const state = new URL(window.location.href).searchParams.get('state');
    console.log('code', code);
    console.log('state', state);
    const fetchData = async () => {
      if (code && state) {
        try {
          const response = await axios.get(
            `http://52.79.57.246:8081/user/auth/kakao?code=${code}&state=${state}`
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
