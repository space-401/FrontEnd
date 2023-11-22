import { getLogin } from '@apis/user/getLogin';
import { useGoogleLogin } from '@react-oauth/google';
import { LOGIN_REDIRECT_URI } from '@constants/auth';

export const SocialGoogle = () => {
  const googleSocialLogin = useGoogleLogin({
    scope: 'email profile',
    redirect_uri: `${LOGIN_REDIRECT_URI}/google`,
    onSuccess: async ({ code }) => {
      console.log(code);
      const data = await getLogin({ code, socialType: 'google', state: false });
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
