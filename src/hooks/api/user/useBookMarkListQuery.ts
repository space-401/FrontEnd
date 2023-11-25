import { getMyBookMarkList } from '@/apis';
import { BookMarkListType } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const useBookMarkListQuery = (page: number) => {
  const { data: BookMarkListData } = useQuery<BookMarkListType, AxiosError>(
    ['myBookmarkList', page],
    () => getMyBookMarkList(page)
  );

  return { BookMarkListData };
};
