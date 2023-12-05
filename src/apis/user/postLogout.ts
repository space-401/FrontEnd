import { axiosInstance } from '@/apis';
import { END_POINTS } from '@/constants';
import type { ApiResponseType } from '@/types';

export const postLogout = async () => {
  const { data } = await axiosInstance.post<ApiResponseType>(END_POINTS.LOGOUT);
  return data;
};
