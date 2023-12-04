import { patchSpaceUser } from '@/apis';
import { END_POINTS } from '@/constants';
import { ApiResponseType } from '@/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

export const useSpaceUserUpdateMutation = (spaceId: string) => {
  const queryClient = useQueryClient();
  const { mutate: userUpdateAction, isSuccess: isUserUpdateSuccess } =
    useMutation<ApiResponseType, AxiosError, FormData>(
      (formData) => patchSpaceUser(formData),
      {
        onSuccess: async () => {
          await queryClient.invalidateQueries([END_POINTS.MY_POST_LIST]);
          await queryClient.invalidateQueries([
            END_POINTS.SPACE,
            Number(spaceId),
          ]);
        },
      }
    );
  return { userUpdateAction, isUserUpdateSuccess };
};
