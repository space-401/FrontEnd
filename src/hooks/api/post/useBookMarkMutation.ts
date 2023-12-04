import { postBookMark } from '@/apis';
import { END_POINTS } from '@/constants';
import type { ApiResponseType, PostDetailType } from '@/types';
import { toastColorMessage } from '@/utils';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

interface IPostInfo {
  postId: number;
}

export const UseBookMarkMutation = () => {
  const queryClient = useQueryClient();
  const { mutate: postBookMarkAction } = useMutation<
    ApiResponseType,
    AxiosError,
    IPostInfo
  >((postInfo) => postBookMark(postInfo.postId), {
    onMutate: async (postInfo) => {
      const prevInfo: PostDetailType = queryClient.getQueryData([
        END_POINTS.POST,
        postInfo.postId,
      ])!;
      await queryClient.cancelQueries([END_POINTS.POST, postInfo.postId]);
      queryClient.setQueriesData<PostDetailType>(
        [END_POINTS.POST, postInfo.postId],
        {
          ...prevInfo,
          isBookmark: !prevInfo.isBookmark,
        }
      );
    },
    onError: async (error, variables) => {
      toastColorMessage(error.message);
      await queryClient.invalidateQueries([END_POINTS.POST, variables.postId]);
    },
    onSettled: async (_1, _2, variables) => {
      await queryClient.invalidateQueries([END_POINTS.POST, variables.postId]);
    },
  });

  return { postBookMarkAction };
};
