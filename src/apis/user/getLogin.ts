import axios from 'axios';
import { SocialType } from '@type/user.type';

export const getLogin = async ({
  code,
  socialType,
  scope,
}: {
  code: string;
  socialType: SocialType;
  scope?: string;
}) => {
  let socialUrl;
  if (socialType === 'kakao') {
    socialUrl = `/user/auth/${socialType}?code=${code}&state=false`;
  } else if (socialType === 'naver') {
    socialUrl = `/user/auth/${socialType}?code=${code}&state=false`;
  } else {
    socialUrl = `/user/auth/${socialType}?code=${code}&scope=${scope}`;
  }
  const response = await axios.get(import.meta.env.VITE_BACK_URL + socialUrl);
  return response.data;
};
