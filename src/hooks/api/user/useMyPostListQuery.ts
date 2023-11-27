import { getMyPostList } from '@/apis';
import type { MyPostListType } from '@/types';
import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

export const useMyPostListQuery = (page: number) => {
  const { data: MyPostListData } = useQuery<MyPostListType, AxiosError>(
    ['myPostList', page],
    () => getMyPostList(page)
  );

  return { MyPostListData };
};
