import type { ApiResponseType } from '@type/response.type';
import { useMutation } from '@tanstack/react-query';
import { postComment } from '@apis/comment/postComment';
import type { AxiosError } from 'axios';
import type { SubmitCommentType } from '@type/comment.type';

export const useCommentMutation = () => {
  const { mutate: postCommentAction } = useMutation<
    ApiResponseType,
    AxiosError,
    SubmitCommentType
  >((comment) => postComment(comment));
  return { postCommentAction };
};
