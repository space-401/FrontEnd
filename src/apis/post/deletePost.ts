import { axiosInstance } from '@/apis';
import { END_POINTS } from '@/constants';
import type { ApiResponseType } from '@/types';

export const deletePost = async (postId: number) => {
  const { data } = await axiosInstance.delete<ApiResponseType>(
    END_POINTS.POST,
    { params: { postId } }
  );

  return data;
};
