import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { getMyBookMarkList } from '@apis/user/getMyBookMarkList';
import { BookMarkListType } from '@type/user.type';

export const useBookMarkListQuery = (page: number) => {
  const { data: BookMarkListData } = useQuery<BookMarkListType, AxiosError>(
    ['myBookmarkList', page],
    () => getMyBookMarkList(page)
  );

  return { BookMarkListData };
};
