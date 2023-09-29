import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { getMyCommentList } from '@apis/user/getMyCommentList';
import { MyCommentListType } from '@type/user.type';

export const useMyCommentListQuery = (page: number) => {
  const { data: MyCommentListData } = useQuery<MyCommentListType, AxiosError>(
    ['myCommentList', page],
    () => getMyCommentList(page)
  );

  return { MyCommentListData };
};
