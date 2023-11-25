import tokenStorage from '@/utils/tokenStorage';
import { END_POINTS } from '@constants/api';
import { axiosInstance } from '@apis/AxiosInstance';

export type TokenData = {
  newAccessToken: string;
};

export const getNewAccessToken = async () => {
  console.log('aa', tokenStorage.getRefreshToken());
  const { data } = await axiosInstance.get<TokenData>(END_POINTS.TOKEN, {
    headers: {
      Authorization: `Bearer ${tokenStorage.getRefreshToken()}`,
    },
  });

  return data.newAccessToken;
};
