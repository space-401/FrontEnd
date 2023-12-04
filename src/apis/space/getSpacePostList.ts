//완성
import { axiosInstance } from '@/apis';
import { END_POINTS } from '@/constants';
import type { DateInfoType, SpacePostListProps } from '@/types';
import { objectHelperWithNotUndefined } from '@/utils';


export type SearchValuesType = Partial<DateInfoType> & {
  spaceId: string;
  page: string;
  userId?: string[];
  tagId?: string[];
  keyword?: string;
};

export const getSpacePostList = async (searchValues: SearchValuesType) => {
  const { data } = await axiosInstance.post<SpacePostListProps>(
    END_POINTS.SPACE_POST_LIST,
    { ...objectHelperWithNotUndefined(searchValues) }
  );
  console.log('data', data);
  return data;
};