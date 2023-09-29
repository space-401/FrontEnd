import { END_POINTS } from '@constants/api';
import { axiosInstance } from '@apis/AxiosInstance';
import { MyPostListType } from '@type/user.type';

export const getMyPostList = async (page: number) => {
  const { data } = await axiosInstance.get<MyPostListType>(
    END_POINTS.MY_POST_LIST(page)
  );

  return data;
};
