import { axiosInstance } from '@/apis';
import type { AccountDataType } from '@/types';
import { END_POINTS } from '@/constants';

export const getUserInfo = async () => {
  const { data } = await axiosInstance.get<AccountDataType>(
    END_POINTS.USERINFO
  );

  return data;
};
