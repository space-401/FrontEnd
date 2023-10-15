import { axiosInstance } from '@apis/AxiosInstance';
import { END_POINTS } from '@constants/api';

export type LoginResponseType = {
  accessToken: string;
};

export const postLogin = async (token: string) => {
  const { data } = await axiosInstance.post<LoginResponseType>(
    END_POINTS.LOGIN,
    {
      token,
    }
  );

  return data;
};
