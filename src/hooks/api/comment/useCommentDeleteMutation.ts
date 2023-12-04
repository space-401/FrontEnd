import { deleteComment } from '@/apis';
import { END_POINTS } from '@/constants';
import type { ApiResponseType } from '@/types';
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
      await queryClient.invalidateQueries([
        END_POINTS.COMMENT,
        postId,
        spaceId,
      ]);
    },
  });
  return { deleteCommentAction };
};
