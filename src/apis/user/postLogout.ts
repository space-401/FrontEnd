import { axiosInstance } from '@/apis';
import type { ApiResponseType } from '@/types';
import { END_POINTS } from '@/constants';

export const postLogout = async () => {
  const { data } = await axiosInstance.post<ApiResponseType>(END_POINTS.LOGOUT);
  return data;
};
