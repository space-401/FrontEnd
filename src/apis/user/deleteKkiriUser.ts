import { axiosInstance } from '@apis/AxiosInstance';
import { ApiResponseType } from '@type/response.type';
import { END_POINTS } from '@constants/api';

export const deleteKkiriUser = async (userId: number) => {
  const { data } = await axiosInstance.delete<ApiResponseType>(
    END_POINTS.USER,
    { data: userId }
  );

  return data;
};
