import { axiosInstance } from '@apis/AxiosInstance';
import { END_POINTS } from '@constants/api';
import { ApiResponseType } from '@type/response.type';

export const postLogin = async (token: string) => {
  const { data } = await axiosInstance.post<ApiResponseType>(END_POINTS.LOGIN, {
    token,
  });

  return data;
};
