import { axiosInstance } from '@apis/AxiosInstance';
import { END_POINTS } from '@constants/api';
import { ApiResponseType } from '@/types/response.type';

export const postPost = async (postInfo: FormData) => {
  const { data } = await axiosInstance.post<ApiResponseType>(END_POINTS.POST, {
    postInfo,
  });
  console.log(data);
  return data;
};
