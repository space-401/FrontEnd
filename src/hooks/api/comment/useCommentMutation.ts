import { postComment } from '@/apis';
import type { ApiResponseType, SubmitCommentType } from '@/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

export const useCommentMutation = (postId: number, spaceId: number) => {
  const queryClient = useQueryClient();
  const { mutate: postCommentAction } = useMutation<
    ApiResponseType,
    AxiosError,
    SubmitCommentType
  >((comment) => postComment(comment), {
    onSuccess: async () => {
      await queryClient.invalidateQueries(['commentList', postId, spaceId]);
    },
  });
  return { postCommentAction };
};
