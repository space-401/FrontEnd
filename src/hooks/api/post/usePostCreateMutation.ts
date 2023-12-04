import { postPost } from '@/apis';
import type { ApiResponseType } from '@/types';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

export const usePostCreateMutation = () => {
  const { mutate: createPostAction, isSuccess: postCreateSuccess } =
    useMutation<ApiResponseType, AxiosError, FormData>(
      (spacePostInfo) => postPost(spacePostInfo),
      {}
    );
  return { createPostAction, postCreateSuccess };
};
