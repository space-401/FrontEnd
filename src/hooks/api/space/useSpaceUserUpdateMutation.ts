import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { patchSpaceUser } from '@/apis';
import { ApiResponseType } from '@/types';

export const useSpaceUserUpdateMutation = (spaceId: string) => {
  const queryClient = useQueryClient();
  const { mutate: userUpdateAction } = useMutation<
    ApiResponseType,
    AxiosError,
    FormData
  >((formData) => patchSpaceUser(formData), {
    onSuccess: async () => {
      console.log('성공');
      await queryClient.invalidateQueries(['spaceInfo', Number(spaceId)]);
    },
  });
  return { userUpdateAction };
};
