import { getMyPostList } from '@/apis';
import { END_POINTS } from '@/constants';
import type { MyPostListType } from '@/types';
import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

export const useMyPostListQuery = (page: number) => {
  const { data: MyPostListData, refetch } = useQuery<
    MyPostListType,
    AxiosError
  >([END_POINTS.MY_POST_LIST], () => getMyPostList(page));

  return { MyPostListData, refetch };
};
