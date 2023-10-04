import { END_POINTS } from '@constants/api';
import { axiosInstance } from '@apis/AxiosInstance';
import type { SpacePostListProps } from '@type/main.type';

export type FilterType = {
  userId?: string[];
  tagId?: string[];
  keyword?: string;
  date?: string;
};

export const getSpacePostList = async (
  spaceId: string,
  page: string,
  filter: FilterType
) => {
  const { data } = await axiosInstance.get<SpacePostListProps>(
    END_POINTS.SPACE_SEARCH_LIST(spaceId, page),
    { params: { ...filter } }
  );

  return data;
};
