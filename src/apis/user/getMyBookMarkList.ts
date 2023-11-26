import { axiosInstance } from '@/apis';
import { END_POINTS } from '@/constants';
import type { BookMarkListType } from '@/types';

export const getMyBookMarkList = async (page: number) => {
  const { data } = await axiosInstance.get<BookMarkListType>(
    END_POINTS.MY_BOOK_MARK_LIST,
    { params: { page } }
  );

  return data;
};
