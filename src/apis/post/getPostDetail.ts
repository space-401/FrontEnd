import { axiosInstance } from '@apis/AxiosInstance';
import { END_POINTS } from '@constants/api';
import { PostDetailType } from '@/types/post.type';

export const getPostDetail = async (postId: number) => {
  const { data } = await axiosInstance.get<PostDetailType>(END_POINTS.POST, {
    params: { postId },
  });
  console.log('포스트 정보', data);
  return data;
};
