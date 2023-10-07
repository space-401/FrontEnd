import type { ApiResponseType } from '@type/response.type';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { deletePost } from '@/apis/post/deletePost';

export const usePostDeleteMutation = () => {
  const { mutate: deletePostAction } = useMutation<
    ApiResponseType,
    AxiosError,
    number
  >((postId) => deletePost(postId));
  return { deletePostAction };
};
