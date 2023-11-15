import { getLogin } from '@apis/user/getLogin';
import { useGoogleLogin } from '@react-oauth/google';

export const SocialGoogle = () => {
  const googleSocialLogin = useGoogleLogin({
    scope: 'email profile',
    onSuccess: async ({ code }) => {
      console.log(code);
      const data = await getLogin({ code, socialType: 'google' });
      console.log(data);
    },
    onError: (errorResponse) => {
      console.error(errorResponse);
    },
    flow: 'auth-code',
  });

  return { googleSocialLogin };
};

export default SocialGoogle;
