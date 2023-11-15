import type { ApiResponseType } from '@type/response.type';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postComment } from '@apis/comment/postComment';
import type { AxiosError } from 'axios';
import type { SubmitCommentType } from '@type/comment.type';

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
