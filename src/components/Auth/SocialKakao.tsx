import { KAKAO_LOGIN_URL, LOGIN_REDIRECT_URI } from '@/constants';

export const SocialKakao = () => {
  const kakaoURL = `${KAKAO_LOGIN_URL}?client_id=${
    import.meta.env.VITE_KAKAO_REST_API
  }&redirect_uri=${LOGIN_REDIRECT_URI}/kakao&response_type=code&state=false`;
  const kakaoHandleLogin = () => {
    window.location.href = kakaoURL;
  };
  return { kakaoHandleLogin };
};
