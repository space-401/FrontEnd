import { axiosInstance } from '@/apis';
import { END_POINTS } from '@/constants';
import type { MyCommentListType } from '@/types';

export const getMyCommentList = async (page: number) => {
  const { data } = await axiosInstance.get<MyCommentListType>(
    END_POINTS.MY_COMMENT_LIST,
    { params: { page } }
  );

  return data;
};
