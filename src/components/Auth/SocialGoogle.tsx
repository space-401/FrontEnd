import { useGoogleLogin } from '@react-oauth/google';

export const SocialGoogle = () => {
  const googleSocialLogin = useGoogleLogin({
    scope: 'email profile',
    onSuccess: (tokenResponse) => console.log(tokenResponse),
    onError: (errorResponse) => {
      console.error(errorResponse);
    },
    flow: 'auth-code',
  });

  return { googleSocialLogin };
};

export default SocialGoogle;
