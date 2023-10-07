import { axiosInstance } from '@apis/AxiosInstance';
import { END_POINTS } from '@constants/api';
import { CreatePostType } from '@/types/post.type';

export const patchPost = async (postId: string) => {
  const { data } = await axiosInstance.patch<CreatePostType>(
    END_POINTS.POST + `/${postId}`
  );
  return data;
};
