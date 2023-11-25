import { axiosInstance } from '@/apis';
import type { BookMarkListType } from '@/types';
import { END_POINTS } from '@/constants';

export const getMyBookMarkList = async (page: number) => {
  const { data } = await axiosInstance.get<BookMarkListType>(
    END_POINTS.MY_BOOK_MARK_LIST,
    { params: { page } }
  );

  return data;
};
