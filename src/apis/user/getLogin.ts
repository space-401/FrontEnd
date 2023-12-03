import { axiosInstance } from '@/apis';
import { PATH } from '@/constants';
import type { SocialType, UserTokenType } from '@/types';

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
  console.log('response', response);
  return response.data;
};
