import { END_POINTS } from '@/constants';
import { axiosInstance } from '@/apis';
import type { ApiResponseType } from '@/types';

export const deleteComment = async (commentId: number) => {
  const { data } = await axiosInstance.delete<ApiResponseType>(
    END_POINTS.COMMENT,
    { params: { commentId } }
  );

  return data;
};
