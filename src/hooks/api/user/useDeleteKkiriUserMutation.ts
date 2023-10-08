import type { ApiResponseType } from '@type/response.type';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { deleteKkiriUser } from '@apis/user/deleteKkiriUser';

export const useDeleteKkiriUserMutation = () => {
  const { mutate: deleteKkiriUserAction } = useMutation<
    ApiResponseType,
    AxiosError,
    number
  >((deleteUserId) => deleteKkiriUser(deleteUserId));
  return { deleteKkiriUserAction };
};
