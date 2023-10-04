import { axiosInstance } from '@apis/AxiosInstance';
import { END_POINTS } from '@constants/api';
import { ApiResponseType } from '@type/response.type';

export const getLogout = async () => {
  const { data } = await axiosInstance.get<ApiResponseType>(END_POINTS.LOGOUT);

  return data;
};
