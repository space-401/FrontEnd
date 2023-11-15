import { SocialType } from '@type/user.type';
import { axiosInstance } from '@apis/AxiosInstance';
import { PATH } from '@constants/path';

export const getLogin = async ({
  code,
  socialType,
}: {
  code: string;
  socialType: SocialType;
}) => {
  const response = await axiosInstance.get(PATH.SOCIAL_LOGIN(socialType), {
    params: {
      code,
      state: false,
    },
    useAuth: false,
  });
  return response.data;
};
