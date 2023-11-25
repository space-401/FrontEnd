import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { patchSpace } from '@/apis/space/patchSpace';
import { SpaceFormResponse } from '@type/response.type';

export const useSpaceUpdateMutation = () => {
  const {
    mutate: updateSpaceAction,
    isSuccess: isUpdateSuccess,
    data: updateResponse,
  } = useMutation<SpaceFormResponse, AxiosError, FormData>((spaceInfo) =>
    patchSpace(spaceInfo)
  );
  return { updateSpaceAction, isUpdateSuccess, updateResponse };
};
