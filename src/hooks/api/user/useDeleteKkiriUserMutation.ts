import type { ApiResponseType } from '@/types';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { deleteKkiriUser } from '@/apis/user';
import { tokenStorage } from '@/utils';

export const useDeleteKkiriUserMutation = () => {
  const { mutate: deleteKkiriUserAction } = useMutation<
    ApiResponseType,
    AxiosError
  >(() => deleteKkiriUser(), {
    onMutate: () => {
      tokenStorage.clear();
    },
  });
  return { deleteKkiriUserAction };
};
