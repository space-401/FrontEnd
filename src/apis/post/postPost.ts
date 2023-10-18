import { axiosInstance } from '@apis/AxiosInstance';
import { END_POINTS } from '@constants/api';
import { ApiResponseType } from '@/types/response.type';
import { CreatePostType } from '@/types/post.type';

export const postPost = async (postInfo: CreatePostType) => {
  const { data } = await axiosInstance.post<ApiResponseType>(END_POINTS.POST, {
    postInfo,
  });
  console.log(data);
  return data;
};
