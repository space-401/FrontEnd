import type { ApiResponseType } from '@/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { deletePost } from '@/apis';
import { toastColorMessage } from '@/utils';

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
