import { patchPost } from '@/apis/post/patchPost';
import type { ApiResponseType } from '@type/response.type';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

export const usePostUpdateMutation = () => {
  const { mutate: updatePostAction } = useMutation<
    ApiResponseType,
    AxiosError,
    FormData
  >((updatePostInfo) => patchPost(updatePostInfo));
  return { updatePostAction };
};
