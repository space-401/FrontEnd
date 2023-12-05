import { ApiResponseType } from '@/types';
import { toastColorMessage, tokenStorage } from '@/utils';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { deleteKkiriUser } from '@/apis/user';

export const useDeleteKkiriUserMutation = () => {
  const { mutateAsync: deleteKkiriUserAction } = useMutation<
    ApiResponseType,
    AxiosError
  >(deleteKkiriUser, {
    onSuccess: () => {
      tokenStorage.clear();
      toastColorMessage('회원 탈퇴 되었습니다.');
    },
  });
  return { deleteKkiriUserAction };
};
