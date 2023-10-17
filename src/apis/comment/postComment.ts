import { END_POINTS } from '@constants/api';
import { axiosInstance } from '@apis/AxiosInstance';
import type { ApiResponseType } from '@type/response.type';
import { SubmitCommentType } from '@type/comment.type';

export const postComment = async (commentInfo: SubmitCommentType) => {
  const { data } = await axiosInstance.post<ApiResponseType>(
    END_POINTS.COMMENT,
    { commentInfo }
  );

  return data;
};
