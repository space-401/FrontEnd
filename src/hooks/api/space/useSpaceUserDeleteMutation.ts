import type { ApiResponseType } from '@/types';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { deleteSpaceUser } from '@/apis';

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
