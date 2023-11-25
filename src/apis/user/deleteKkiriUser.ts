import { axiosInstance } from '@/apis';
import { END_POINTS } from '@/constants';
import type { ApiResponseType } from '@/types';

export const deleteKkiriUser = async () => {
  const { data } = await axiosInstance.delete<ApiResponseType>(END_POINTS.USER);

  return data;
};
