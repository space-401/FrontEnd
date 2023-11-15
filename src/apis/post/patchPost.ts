import { axiosInstance } from '@apis/AxiosInstance';
import { END_POINTS } from '@constants/api';
import { ApiResponseType } from '@/types/response.type';

export const patchPost = async (postInfo: FormData) => {
  const { data } = await axiosInstance.patch<ApiResponseType>(END_POINTS.POST, {
    ...postInfo,
  });
  return data;
};
