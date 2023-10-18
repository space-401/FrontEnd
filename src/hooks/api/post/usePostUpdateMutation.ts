import { patchPost } from '@/apis/post/patchPost';
import type { ApiResponseType } from '@type/response.type';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { CreatePostTypeWithSpaceId } from '@/types/post.type';

export const usePostUpdateMutation = () => {
  const { mutate: updatePostAction } = useMutation<
    ApiResponseType,
    AxiosError,
    CreatePostTypeWithSpaceId
  >((updatePostInfo) => patchPost(updatePostInfo));
  return { updatePostAction };
};
