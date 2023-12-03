import { PATH } from '@/constants';
import type { ApiResponseType } from '@/types';
import { toastColorMessage, tokenStorage } from '@/utils';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { deleteKkiriUser } from '@/apis/user';

export const useDeleteKkiriUserMutation = () => {
  const navigate = useNavigate();
  const { mutate: deleteKkiriUserAction } = useMutation<
    ApiResponseType,
    AxiosError
  >(() => deleteKkiriUser(), {
    onMutate: () => {
      tokenStorage.clear();
    },
    onSuccess: () => {
      toastColorMessage('회원 탈퇴 되었습니다.');
      navigate(PATH.HOME);
    },
  });
  return { deleteKkiriUserAction };
};
