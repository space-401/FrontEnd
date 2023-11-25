import { axiosInstance } from '@/apis';
import type { MyPostListType } from '@/types';
import { END_POINTS } from '@/constants';

export const getMyPostList = async (page: number) => {
  const { data } = await axiosInstance.get<MyPostListType>(
    END_POINTS.MY_POST_LIST,
    { params: { page } }
  );

  return data;
};
