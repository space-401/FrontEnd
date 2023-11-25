import { axiosInstance } from '@/apis';
import type { MyCommentListType } from '@/types';
import { END_POINTS } from '@/constants';

export const getMyCommentList = async (page: number) => {
  const { data } = await axiosInstance.get<MyCommentListType>(
    END_POINTS.MY_COMMENT_LIST,
    { params: { page } }
  );

  return data;
};
