import { axiosInstance } from '@/apis';
import { END_POINTS } from '@/constants';
import type { ApiResponseType } from '@/types';

export const postBookMark = async (postId: number) => {
  const { data } = await axiosInstance.post<ApiResponseType>(
    END_POINTS.POST_BOOK_MARK,
    { postId }
  );

  return data;
};
