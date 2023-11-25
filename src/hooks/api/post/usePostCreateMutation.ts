import type { ApiResponseType } from '@/types';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { postPost } from '@/apis';

export const usePostCreateMutation = () => {
  const { mutate: createPostAction, isSuccess: postCreateSuccess } =
    useMutation<ApiResponseType, AxiosError, FormData>((spacePostInfo) =>
      postPost(spacePostInfo)
    );
  return { createPostAction, postCreateSuccess };
};
