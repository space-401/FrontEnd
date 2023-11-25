import { END_POINTS } from '@/constants';
import { axiosInstance } from '@/apis';
import type { ApiResponseType, SubmitCommentType } from '@/types';

export const postComment = async (commentInfo: SubmitCommentType) => {
  const { postId, comment, refInfo } = commentInfo;
  const { data } = await axiosInstance.post<ApiResponseType>(
    END_POINTS.COMMENT,
    {
      commentContent: comment,
      postId,
      commentRefYn: refInfo === undefined,
      commentGroup: refInfo?.refId,
    }
  );

  return data;
};
