import { END_POINTS } from '@constants/api';
import { axiosInstance } from '@apis/AxiosInstance';
import { MyCommentListType } from '@type/user.type';

export const getMyCommentList = async (page: number) => {
  const { data } = await axiosInstance.get<MyCommentListType>(
    END_POINTS.MY_COMMENT_LIST,
    { params: { page } }
  );

  return data;
};
