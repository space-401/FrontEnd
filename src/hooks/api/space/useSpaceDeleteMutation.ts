import type { ApiResponseType } from '@/types';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { deleteSpace } from '@/apis';

export const useSpaceDeleteMutation = () => {
  const { mutate: deleteSpaceAction, isSuccess: isDeleteSuccess } = useMutation<
    ApiResponseType,
    AxiosError,
    string
  >({
    mutationFn: (spaceId) => deleteSpace(spaceId),
  });
  return { deleteSpaceAction, isDeleteSuccess };
};
