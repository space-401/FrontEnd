//완성
import { axiosInstance } from '@/apis';
import { END_POINTS } from '@/constants';
import type { DateInfoType, SpacePostListProps } from '@/types';

export type FilterType = {
  userId?: number[];
  tagId?: number[];
  keyword?: string;
  date?: DateInfoType;
};

export const getSpacePostList = async (
  spaceId: string,
  page: string,
  filter: FilterType
) => {
  const searchValue = { spaceId, page, ...filter };
  const { data } = await axiosInstance.post<SpacePostListProps>(
    END_POINTS.SPACE_POST_LIST,
    { data: searchValue }
  );
  return data;
};
