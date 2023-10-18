import { useQuery } from '@tanstack/react-query';
import { FilterType, getSpacePostList } from '@apis/space/getSpacePostList';
import type { AxiosError } from 'axios';
import { SpacePostListProps } from '@type/main.type';

/**
 * @param spaceId 조회할 스페이스 아이디를 입력합니다.
 * @param page 해당 페이지의 내용을 받아옵니다.
 * @param filter 해당 필터값으로 조회를 합니다.
 */
export const useSpacePostListQuery = (
  spaceId: string,
  page: string,
  filter: FilterType
) => {
  const { data: spacePostList, refetch } = useQuery<
    SpacePostListProps,
    AxiosError
  >(['postList', spaceId], () => getSpacePostList(spaceId, page, filter));
  return { spacePostList, refetch };
};
