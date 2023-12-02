import { getLogin } from '@/apis';
import { useGoogleLogin } from '@react-oauth/google';

export const SocialGoogle = () => {
  const googleSocialLogin = useGoogleLogin({
    onSuccess: async ({ code }) => {
      const data = await getLogin({ code, socialType: 'google', state: false });
      console.log('aaa', data);
    },
    onError: (errorResponse) => {
      console.error(errorResponse);
    },
    flow: 'auth-code',
  });

  return { googleSocialLogin };
};

export default SocialGoogle;