import { useGoogleLogin } from '@react-oauth/google';

export const SocialGoogle = () => {
  const googleSocialLogin = useGoogleLogin({
    onSuccess: (codeResponse) => console.log(codeResponse),
    flow: 'auth-code',
  });

  return { googleSocialLogin };
};

export default SocialGoogle;
