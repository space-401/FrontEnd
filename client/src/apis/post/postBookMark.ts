import { axiosInstance } from '@apis/AxiosInstance';
import { END_POINTS } from '@constants/api';
import { ApiResponseType } from '@type/response.type';

export const postBookMark = async (postId: number) => {
  const { data } = await axiosInstance.post<ApiResponseType>(
    END_POINTS.POST_BOOK_MARK,
    { postId }
  );

  return data;
};
