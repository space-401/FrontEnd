import { getMyCommentList } from '@/apis';
import { END_POINTS } from '@/constants';
import type { MyCommentListType } from '@/types';
import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

export const useMyCommentListQuery = (page: number) => {
  const { data: MyCommentListData } = useQuery<MyCommentListType, AxiosError>(
    [END_POINTS.MY_COMMENT_LIST],
    () => getMyCommentList(page)
  );

  return { MyCommentListData };
};
