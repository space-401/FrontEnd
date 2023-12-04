import { getMyBookMarkList } from '@/apis';
import { END_POINTS } from '@/constants';
import { BookMarkListType } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const useBookMarkListQuery = (page: number) => {
  const { data: BookMarkListData } = useQuery<BookMarkListType, AxiosError>(
    [END_POINTS.MY_BOOK_MARK_LIST],
    () => getMyBookMarkList(page)
  );

  return { BookMarkListData };
};
