import { END_POINTS } from '@constants/api';
import { axiosInstance } from '@apis/AxiosInstance';
import type { ApiResponseType } from '@type/response.type';

export const deleteComment = async (commentId: number) => {
  const { data } = await axiosInstance.delete<ApiResponseType>(
    END_POINTS.COMMENT,
    { params: { commentId } }
  );

  return data;
};
