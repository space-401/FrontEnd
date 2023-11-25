import { axiosInstance } from '@/apis';
import type { ApiResponseType } from '@/types';
import { END_POINTS } from '@/constants';

export const deleteKkiriUser = async () => {
  const { data } = await axiosInstance.delete<ApiResponseType>(END_POINTS.USER);

  return data;
};
