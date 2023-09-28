import { END_POINTS } from '@constants/api';
import { axiosInstance } from '@apis/AxiosInstance';
import type { PostType } from '@type/post.type';

export type FilterType = {
  userId?: string;
  tagId?: string;
  keyword?: string;
  data?: string;
  page: string;
};

export const getPostList = async (spaceId: string, filter: FilterType) => {
  const { data } = await axiosInstance.get<PostType[]>(
    END_POINTS.POST_LIST(spaceId),
    { params: { ...filter } }
  );

  return data;
};
