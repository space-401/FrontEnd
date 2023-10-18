import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { patchSpaceUser } from '@/apis/space/patchSpaceUser';
import { ApiResponseType } from '@/types/response.type';
import { SpaceUserPropsType } from '@/apis/space/patchSpaceUser';

export const useSpaceUserUpdateMutation = (spaceId: string) => {
  const queryClient = useQueryClient();
  const { mutate: userUpdateAction } = useMutation<
    ApiResponseType,
    AxiosError,
    SpaceUserPropsType
  >((userInfo) => patchSpaceUser(userInfo), {
    onSuccess: async () => {
      await queryClient.invalidateQueries(['spaceInfo', Number(spaceId)]);
    },
  });
  return { userUpdateAction };
};
