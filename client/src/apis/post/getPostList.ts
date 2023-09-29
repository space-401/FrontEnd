import { END_POINTS } from '@constants/api';
import { axiosInstance } from '@apis/AxiosInstance';
import { SpacePostListProps } from '@type/main.type';

export type FilterType = {
  userId?: string;
  tagId?: string;
  keyword?: string;
  data?: string;
};

export const getPostList = async (
  spaceId: string,
  page: string,
  filter: FilterType
) => {
  const { data } = await axiosInstance.get<SpacePostListProps>(
    END_POINTS.POST_SEARCH_LIST(spaceId, page),
    { params: { ...filter } }
  );

  return data;
};
