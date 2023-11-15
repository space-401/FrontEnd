import { axiosInstance } from '@apis/AxiosInstance';
import { END_POINTS } from '@constants/api';
import { ApiResponseType } from '@type/response.type';

export const postLogout = async () => {
  const { data } = await axiosInstance.post<ApiResponseType>(END_POINTS.LOGOUT);
  return data;
};
