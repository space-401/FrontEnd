import { deleteComment } from '@apis/comment/deleteComment';
import type { ApiResponseType } from '@type/response.type';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

export const usePostMutation = () => {
  const { mutate: createPostAction } = useMutation<
    ApiResponseType,
    AxiosError,
    number
  >((postId) => deleteComment(postId));
  return { createPostAction };
};
