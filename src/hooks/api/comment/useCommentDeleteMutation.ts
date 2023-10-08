import { deleteComment } from '@apis/comment/deleteComment';
import type { ApiResponseType } from '@type/response.type';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

export const useCommentDeleteMutation = () => {
  const { mutate: deleteCommentAction } = useMutation<
    ApiResponseType,
    AxiosError,
    number
  >((commentId) => deleteComment(commentId));
  return { deleteCommentAction };
};
