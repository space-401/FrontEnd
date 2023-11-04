import axios from 'axios';
import { SocialType } from '@type/user.type';

export const getLogin = async ({
  code,
  socialType,
}: {
  code: string;
  socialType: SocialType;
}) => {
  const response = await axios.get(
    import.meta.env.VITE_BACK_URL + `/user/auth/${socialType}?code=${code}`
  );
  return response.data;
};
