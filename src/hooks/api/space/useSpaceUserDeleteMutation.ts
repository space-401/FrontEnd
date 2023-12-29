import { deleteSpaceUser } from '@/apis';
import { END_POINTS } from '@/constants';
import type { ApiResponseType } from '@/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

type deleteSpaceType = {
  spaceId: number;
  userId: number;
};

export const useSpaceUserDeleteMutation = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteSpaceAction } = useMutation<
    ApiResponseType,
    AxiosError,
    deleteSpaceType
  >((deleteInfo) => deleteSpaceUser(deleteInfo.spaceId, deleteInfo.spaceId), {
    onSuccess: async () => {
      await queryClient.invalidateQueries([END_POINTS.SPACE_LIST]);
    },
  });
  return { deleteSpaceAction };
};
