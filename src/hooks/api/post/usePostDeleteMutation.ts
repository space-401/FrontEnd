import { deletePost } from '@/apis';
import { END_POINTS } from '@/constants';
import type { ApiResponseType } from '@/types';
import { toastColorMessage } from '@/utils';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

export const usePostDeleteMutation = (spaceId: number) => {
  const queryClient = useQueryClient();
  const { mutate: deletePostAction } = useMutation<
    ApiResponseType,
    AxiosError,
    number
  >((postId) => deletePost(postId), {
    onError: (error) => {
      toastColorMessage(error.message);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries([END_POINTS.POST, String(spaceId)]);
      await queryClient.invalidateQueries([END_POINTS.MY_POST_LIST]);
      await queryClient.invalidateQueries([END_POINTS.MY_BOOK_MARK_LIST]);
    },
  });
  return { deletePostAction };
};
