import { useGoogleLogin } from '@react-oauth/google';
import { getLogin } from '@apis/user/getLogin';

export const SocialGoogle = () => {
  const googleSocialLogin = useGoogleLogin({
    scope: 'email profile',
    onSuccess: async (tokenResponse) => {
      console.log(tokenResponse);
      const data = await getLogin({
        code: tokenResponse.code,
        socialType: 'google',
      });
      console.log(data);
    },
    onError: (errorResponse) => {
      console.error(errorResponse);
    },
    flow: 'auth-code',
  });

  // const fetchData = async ({
  //   code,
  //   scope,
  // }: {
  //   code: string;
  //   scope: string;
  // }) => {
  //   if (code && scope) {
  //     try {
  //       const data = await getLogin({ code, socialType: 'google' });
  //       console.log('로그인 결과', data);
  //     } catch (error) {
  //       console.error('Error:', error);
  //     }
  //   }
  // };

  return { googleSocialLogin };
};

export default SocialGoogle;
