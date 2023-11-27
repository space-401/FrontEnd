import { patchSpace } from '@/apis';
import { SpaceFormResponse } from '@/types';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

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
