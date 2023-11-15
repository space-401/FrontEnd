import type { ApiResponseType } from '@type/response.type';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { postPost } from '@/apis/post/postPost';
import { CreatePostType } from '@/types/post.type';

export const usePostCreateMutation = () => {
  const { mutate: createPostAction } = useMutation<
    ApiResponseType,
    AxiosError,
    CreatePostType
  >((spacePostInfo) => postPost(spacePostInfo));
  return { createPostAction };
};
