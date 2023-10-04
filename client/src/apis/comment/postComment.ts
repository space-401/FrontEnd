import { END_POINTS } from '@constants/api';
import { axiosInstance } from '@apis/AxiosInstance';
import type { ApiResponseType } from '@type/response.type';

export const postComment = async (comment: string) => {
  const { data } = await axiosInstance.post<ApiResponseType>(
    END_POINTS.COMMENT,
    { comment }
  );

  return data;
};
