import { deletePost } from '@/apis';
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
      await queryClient.invalidateQueries(['postList', String(spaceId)]);
    },
  });
  return { deletePostAction };
};
