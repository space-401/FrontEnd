import type { ApiResponseType } from '@type/response.type';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { postPost } from '@/apis/post/postPost';

export const usePostCreateMutation = () => {
  const { mutate: createPostAction, isSuccess: postCreateSuccess } =
    useMutation<ApiResponseType, AxiosError, FormData>((spacePostInfo) =>
      postPost(spacePostInfo)
    );
  return { createPostAction, postCreateSuccess };
};
