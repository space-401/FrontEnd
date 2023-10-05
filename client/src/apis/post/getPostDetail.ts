import { axiosInstance } from '@apis/AxiosInstance';
import { END_POINTS } from '@constants/api';
import { PostDetailType } from '@/types/post.type';

export const getPostDetail = async (postId: number) => {
  const { data } = await axiosInstance.get<PostDetailType>(
    END_POINTS.POST + `/${postId}`
  );
  console.log('postDetail 호출');
  return data;
};
