import { END_POINTS } from '@constants/api';
import { axiosInstance } from '@apis/AxiosInstance';
import { AccountDataType } from '@type/user.type';

export const getUserInfo = async () => {
  const { data } = await axiosInstance.get<AccountDataType>(
    END_POINTS.USERINFO
  );

  return data;
};
