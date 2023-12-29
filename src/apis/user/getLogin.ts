import { axiosInstance } from '@/apis';
import { PATH } from '@/constants';
import type { SocialType } from '@/types';
import { toastColorMessage } from '@/utils';
import {UserUnknownTokenType} from "@/types";

export interface ILoginProps {
  code: string;
  socialType: SocialType;
  state?: boolean;
}

export const getLogin = async (props: ILoginProps) => {
  const { state = false, socialType, code } = props;
  try {
    const response = await axiosInstance.get<UserUnknownTokenType>(
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
  } catch (error) {
    if (error instanceof Error) {
      toastColorMessage(error.message);
    }
  }
};
