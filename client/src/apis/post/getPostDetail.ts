import { axiosInstance } from '@apis/AxiosInstance';
import { END_POINTS } from '@constants/api';
import { PostDetailType } from '@/types/post.type';

export const getPostDetail = async (postId: string) => {
  const { data } = await axiosInstance.get<PostDetailType>(
    END_POINTS.POST + `/${postId}`
  );
  return data;
};
