import { END_POINTS } from '@constants/api';
import { axiosInstance } from '@apis/AxiosInstance';
import type { SpacePostListProps } from '@type/main.type';
import { DateInfoType } from '@/types/post.type';

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
  const { data } = await axiosInstance.get<SpacePostListProps>(
    END_POINTS.SPACE_POST_LIST,
    { params: { spaceId, page, ...filter } }
  );

  return data;
};
