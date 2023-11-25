import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { postNewSpace } from '@/apis';
import { SpaceFormResponse } from '@/types';

export const useSpaceCreateMutation = () => {
  const {
    mutate: postSpaceAction,
    isSuccess: isPostSuccess,
    data: createResponse,
  } = useMutation<SpaceFormResponse, AxiosError, FormData>((spaceInfo) =>
    postNewSpace(spaceInfo)
  );
  return { postSpaceAction, isPostSuccess, createResponse };
};
