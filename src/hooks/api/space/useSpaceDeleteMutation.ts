import { deleteSpace } from '@/apis';
import { PATH } from '@/constants';
import type { ApiResponseType } from '@/types';
import { toastColorMessage } from '@/utils';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

export const useSpaceDeleteMutation = () => {
  const navigate = useNavigate();
  const { mutate: deleteSpaceAction, isSuccess: isDeleteSuccess } = useMutation<
    ApiResponseType,
    AxiosError,
    string
  >({
    mutationFn: (spaceId) => deleteSpace(spaceId),
    onSuccess: () => {
      toastColorMessage('해당 스페이스가 삭제되었습니다.');
      navigate(PATH.SPACE);
    },
  });

  return { deleteSpaceAction, isDeleteSuccess };
};
