import { NAVER_LOGIN_URL, LOGIN_REDIRECT_URI } from '@/constants/auth';

export const SocialNaver = () => {
  const naverURL = `${NAVER_LOGIN_URL}?client_id=${
    import.meta.env.VITE_NAVER_CLIENT_ID
  }&redirect_uri=${LOGIN_REDIRECT_URI}/naver&response_type=code`;
  const naverHandleLogin = () => {
    window.location.href = naverURL;
  };
  return { naverHandleLogin };
};

export default SocialNaver;
