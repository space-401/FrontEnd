import { END_POINTS } from '@constants/api';
import { axiosInstance } from '@apis/AxiosInstance';
import { BookMarkListType } from '@type/user.type';

export const getMyBookMarkList = async (page: number) => {
  const { data } = await axiosInstance.get<BookMarkListType>(
    END_POINTS.MY_BOOK_MARK_LIST(page)
  );

  return data;
};
