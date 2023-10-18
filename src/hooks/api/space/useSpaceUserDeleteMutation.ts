import type { ApiResponseType } from '@type/response.type';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { deleteSpaceUser } from '@apis/space/deleteSpaceUser';

type deleteSpaceType = {
  spaceId: number;
  userId: number;
};

export const useSpaceDeleteMutation = () => {
  const { mutate: deleteSpaceAction } = useMutation<
    ApiResponseType,
    AxiosError,
    deleteSpaceType
  >((deleteInfo) => deleteSpaceUser(deleteInfo.spaceId, deleteInfo.spaceId));
  return { deleteSpaceAction };
};
