import { axiosInstance } from '@apis/AxiosInstance';
import { END_POINTS } from '@constants/api';
import { CreatePostType } from '@/types/post.type';

export const postPost = async (spaceId: number) => {
  const { data } = await axiosInstance.post<CreatePostType>(END_POINTS.POST, {
    params: { spaceId },
  });
  return data;
};
