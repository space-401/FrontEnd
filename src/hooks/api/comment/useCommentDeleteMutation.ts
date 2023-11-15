import { deleteComment } from '@apis/comment/deleteComment';
import type { ApiResponseType } from '@type/response.type';
import { QueryClient, useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

export const useCommentDeleteMutation = (postId: number, spaceId: number) => {
  const queryClient = new QueryClient();
  const { mutate: deleteCommentAction } = useMutation<
    ApiResponseType,
    AxiosError,
    number
  >((commentId) => deleteComment(commentId), {
    onSuccess: async () => {
      await queryClient.invalidateQueries(['commentList', postId, spaceId]);
    },
  });
  return { deleteCommentAction };
};
