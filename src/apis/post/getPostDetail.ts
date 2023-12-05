import { axiosInstance } from '@/apis';
import { END_POINTS } from '@/constants';
import type { PostDetailType } from '@/types';

export const getPostDetail = async (postId: number) => {
  const { data } = await axiosInstance.get<PostDetailType>(END_POINTS.POST, {
    params: { postId },
  });
  return data;
};
