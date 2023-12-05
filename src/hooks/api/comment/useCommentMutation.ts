import { postComment } from '@/apis';
import { END_POINTS } from '@/constants';
import type {
  ApiResponseType,
  PostDetailType,
  SubmitCommentType,
} from '@/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

export const useCommentMutation = (postId: number, spaceId: number) => {
  const queryClient = useQueryClient();
  const { mutate: postCommentAction } = useMutation<
    ApiResponseType,
    AxiosError,
    SubmitCommentType
  >((comment) => postComment({ postId, commentInfo: comment }), {
    onMutate: async () => {
      const detailData = queryClient.getQueryData<PostDetailType>([
        END_POINTS.POST,
        postId,
      ])!;
      await queryClient.cancelQueries([END_POINTS.POST, postId]);
      await queryClient.setQueryData<PostDetailType>(
        [END_POINTS.POST, postId, spaceId],
        {
          ...detailData,
          commentCount: detailData.commentCount + 1,
        }
      );
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries([
        END_POINTS.COMMENT,
        postId,
        spaceId,
      ]);
      await queryClient.invalidateQueries([END_POINTS.POST, postId]);
    },
  });
  return { postCommentAction };
};
