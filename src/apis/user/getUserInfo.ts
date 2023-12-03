import { axiosInstance } from '@/apis';
import { END_POINTS } from '@/constants';
import type { AccountDataType } from '@/types';

export const getUserInfo = async () => {
  const { data } = await axiosInstance.get<AccountDataType>(
    END_POINTS.USERINFO
  );

  console.log('dat', data);

  return data;
};
