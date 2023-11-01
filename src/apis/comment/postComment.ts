import { END_POINTS } from '@constants/api';
import { axiosInstance } from '@apis/AxiosInstance';
import type { ApiResponseType } from '@type/response.type';
import { SubmitCommentType } from '@type/comment.type';

export const postComment = async (commentInfo: SubmitCommentType) => {
  const { postId, comment, refInfo } = commentInfo;
  const { data } = await axiosInstance.post<ApiResponseType>(
    END_POINTS.COMMENT,
    {
      commentContent: comment, postId, commentRefYn: refInfo === undefined, commentGroup: refInfo?.refId,
    },
  );

  return data;
};
