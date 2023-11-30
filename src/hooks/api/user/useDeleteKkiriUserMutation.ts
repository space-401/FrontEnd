import type { ApiResponseType } from '@/types';
import { tokenStorage } from '@/utils';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { deleteKkiriUser } from '@/apis/user';

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
