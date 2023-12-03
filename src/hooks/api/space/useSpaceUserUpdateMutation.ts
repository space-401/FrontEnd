import { patchSpaceUser } from '@/apis';
import { ApiResponseType } from '@/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

export const useSpaceUserUpdateMutation = (spaceId: string) => {
  const queryClient = useQueryClient();
  const { mutate: userUpdateAction } = useMutation<
    ApiResponseType,
    AxiosError,
    FormData
  >((formData) => patchSpaceUser(formData), {
    onSuccess: () => {
      queryClient.invalidateQueries(['spaceInfo', Number(spaceId)]);
    },
  });
  return { userUpdateAction };
};
