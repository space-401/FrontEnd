import { useQuery } from '@tanstack/react-query';
import { FilterType, getPostList } from '@apis/post/getPostList';
import { AxiosError } from 'axios';
import { SpacePostListProps } from '@type/main.type';

export const usePostListQuery = (
  spaceId: string,
  page: string,
  filter: FilterType
) => {
  const { data: myPostListData, refetch } = useQuery<
    SpacePostListProps,
    AxiosError
  >(['postList', spaceId], () => getPostList(spaceId, page, filter));
  console.log(filter);
  return { myPostListData, refetch };
};
