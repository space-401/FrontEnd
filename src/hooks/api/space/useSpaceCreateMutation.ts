import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { postNewSpace } from '@/apis/space/postSpace';
import { SpaceFormResponse } from '@type/response.type';

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
