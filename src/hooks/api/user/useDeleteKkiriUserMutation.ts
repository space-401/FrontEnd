import type { ApiResponseType } from '@type/response.type';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { deleteKkiriUser } from '@apis/user/deleteKkiriUser';
import tokenStorage from '@utils/tokenStorage';

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
