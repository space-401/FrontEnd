import { END_POINTS } from '@constants/api';
import { axiosInstance } from '@apis/AxiosInstance';

type TokenData = {
  accessToken: string;
};

export const getRefreshToken = async () => {
  const { data } = await axiosInstance.post<TokenData>(END_POINTS.TOKEN);

  return data;
};
