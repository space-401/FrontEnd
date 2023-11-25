import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { getMyCommentList } from '@/apis';
import type { MyCommentListType } from '@/types';

export const useMyCommentListQuery = (page: number) => {
  const { data: MyCommentListData } = useQuery<MyCommentListType, AxiosError>(
    ['myCommentList', page],
    () => getMyCommentList(page)
  );

  return { MyCommentListData };
};
