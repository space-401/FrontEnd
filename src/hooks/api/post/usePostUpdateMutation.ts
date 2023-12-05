import { patchPost } from '@/apis';
import type { ApiResponseType } from '@/types';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

export const usePostUpdateMutation = () => {
  const { mutate: updatePostAction, isSuccess: updatePostSuccess } =
    useMutation<ApiResponseType, AxiosError, FormData>((updatePostInfo) =>
      patchPost(updatePostInfo)
    );
  return { updatePostAction, updatePostSuccess };
};
