import { useMutation } from '@tanstack/react-query';
import type { ApiResponseType } from '@type/response.type';
import { postBookMark } from '@apis/post/postBookMark';
import type { AxiosError } from 'axios';

export const UseBookMarkMutation = () => {
  const { mutate: postBookMarkAction } = useMutation<
    ApiResponseType,
    AxiosError,
    number
  >((postId) => postBookMark(postId));

  return { postBookMarkAction };
};
