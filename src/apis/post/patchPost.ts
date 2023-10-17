import { axiosInstance } from '@apis/AxiosInstance';
import { END_POINTS } from '@constants/api';
import { CreatePostType } from '@/types/post.type';

export const patchPost = async (postInfo: any) => {
  const { data } = await axiosInstance.patch<CreatePostType>(END_POINTS.POST, {
    postInfo,
  });
  return data;
};
