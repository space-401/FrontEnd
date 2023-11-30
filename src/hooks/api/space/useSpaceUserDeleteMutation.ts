import { deleteSpaceUser } from '@/apis';
import type { ApiResponseType } from '@/types';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

type deleteSpaceType = {
  spaceId: number;
  userId: number;
};

export const useSpaceUserDeleteMutation = () => {
  const { mutate: deleteSpaceAction } = useMutation<
    ApiResponseType,
    AxiosError,
    deleteSpaceType
  >((deleteInfo) => deleteSpaceUser(deleteInfo.spaceId, deleteInfo.spaceId));
  return { deleteSpaceAction };
};
