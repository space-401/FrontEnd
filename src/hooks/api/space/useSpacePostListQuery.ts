import { SearchValuesType, getSpacePostList } from '@/apis';
import { END_POINTS } from '@/constants';
import { SpacePostListProps } from '@/types';
import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

/**
 * @param spaceId 조회할 스페이스 아이디를 입력합니다.
 * @param page 해당 페이지의 내용을 받아옵니다.
 * @param filter 해당 필터값으로 조회를 합니다.
 */
export const useSpacePostListQuery = (searchValues: SearchValuesType) => {
  const { data: spacePostList, refetch } = useQuery<
    SpacePostListProps,
    AxiosError
  >([END_POINTS.POST, searchValues.spaceId], () =>
    getSpacePostList(searchValues)
  );
  return { spacePostList, refetch };
};
