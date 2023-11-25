import { tokenStorage } from '@/utils';
import { axiosInstance } from '@/apis';
import { END_POINTS } from '@/constants';

export type TokenData = {
  newAccessToken: string;
};

export const getNewAccessToken = async () => {
  const { data } = await axiosInstance.get<TokenData>(END_POINTS.TOKEN, {
    headers: {
      Authorization: `Bearer ${tokenStorage.getRefreshToken()}`,
    },
  });

  return data.newAccessToken;
};
