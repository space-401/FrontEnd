import { axiosInstance } from '@/apis';
import type { SocialType, UserTokenType } from '@/types';
import { PATH } from '@/constants';

export interface ILoginProps {
  code: string;
  socialType: SocialType;
  state?: boolean;
}

export const getLogin = async (props: ILoginProps) => {
  const { state = false, socialType, code } = props;
  const response = await axiosInstance.get<UserTokenType>(
    PATH.SOCIAL_LOGIN(socialType),
    {
      params: {
        code,
        state,
      },
      useAuth: false,
    }
  );
  return response.data;
};
