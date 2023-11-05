import axios from 'axios';
import { SocialType } from '@type/user.type';

export const getLogin = async ({
  code,
  socialType,
}: {
  code: string;
  socialType: SocialType;
}) => {
  const socialUrl = `/user/auth/${socialType}?code=${code}&state=false`;
  console.log('socialUrl', socialUrl);

  const response = await axios.get(import.meta.env.VITE_BACK_URL + socialUrl);
  return response.data;
};
