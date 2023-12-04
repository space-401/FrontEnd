import { deleteComment } from '@/apis';
import { END_POINTS } from '@/constants';
import type { ApiResponseType } from '@/types';
import { CommentType, PostDetailType } from '@/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

export const useCommentDeleteMutation = (postId: number, spaceId: number) => {
  const queryClient = useQueryClient();
  const { mutate: deleteCommentAction } = useMutation<
    ApiResponseType,
    AxiosError,
    number
  >((commentId) => deleteComment(commentId), {
    onMutate: async (commentId) => {
      const prevInfo = queryClient.getQueryData<PostDetailType>([
        END_POINTS.POST,
        postId,
      ])!;
      const commentData = queryClient.getQueryData<CommentType[]>([
        END_POINTS.COMMENT,
        postId,
        spaceId,
      ])!;

      await queryClient.cancelQueries([END_POINTS.POST, postId]);
      queryClient.setQueriesData<PostDetailType>([END_POINTS.POST, postId], {
        ...prevInfo,
        commentCount: commentData.filter(
          (value) => value.id !== commentId && value.refId !== commentId
        ).length,
      });
      await queryClient.setQueryData<CommentType[]>(
        [END_POINTS.COMMENT, postId, spaceId],
        commentData.filter(
          (value) => value.id !== commentId && value.refId !== commentId
        )
      );
    },
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
