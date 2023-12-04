import { axiosInstance } from '@/apis';
import { END_POINTS } from '@/constants';
import type { ApiResponseType, SubmitCommentType } from '@/types';
import { objectHelperWithNotUndefined } from '@/utils';

export const postComment = async ({
  postId,
  commentInfo,
}: {
  postId: number;
  commentInfo: SubmitCommentType;
}) => {
  const { comment, refId } = commentInfo;

  const refInfo = {
    commentRefYn: refId !== undefined,
    commentGroup: refId,
  };
  const { data } = await axiosInstance.post<ApiResponseType>(
    END_POINTS.COMMENT,
    {
      postId,
      commentContent: comment,
      ...objectHelperWithNotUndefined(refInfo),
    }
  );

  return data;
};
