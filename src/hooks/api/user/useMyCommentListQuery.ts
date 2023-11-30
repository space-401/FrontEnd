import { getMyCommentList } from '@/apis';
import type { MyCommentListType } from '@/types';
import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

export const useMyCommentListQuery = (page: number) => {
  const { data: MyCommentListData } = useQuery<MyCommentListType, AxiosError>(
    ['myCommentList', page],
    () => getMyCommentList(page)
  );

  return { MyCommentListData };
};
