import type { ApiResponseType } from '@type/response.type';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { deleteSpace } from '@apis/space/deleteSpace';

export const useSpaceDeleteMutation = () => {
  const { mutate: deleteSpaceAction } = useMutation<
    ApiResponseType,
    AxiosError,
    number
  >((spaceId) => deleteSpace(spaceId));
  return { deleteSpaceAction };
};
