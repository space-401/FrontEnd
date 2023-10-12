import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { ApiResponseType } from '@type/response.type';
import { postBookMark } from '@apis/post/postBookMark';
import type { AxiosError } from 'axios';
import { toastColorMessage } from '@utils/toastMessage';
import { Dispatch, SetStateAction } from 'react';

interface IPostInfo {
  postId: string;
  setState: Dispatch<SetStateAction<boolean>>;
}

export const UseBookMarkMutation = () => {
  const queryClient = useQueryClient();
  const { mutate: postBookMarkAction } = useMutation<
    ApiResponseType,
    AxiosError,
    IPostInfo
  >((postInfo) => postBookMark(Number(postInfo.postId)), {
    onMutate: async (postInfo) => {
      await queryClient.cancelQueries(['detail', postInfo.postId]);
      postInfo.setState((state) => !state);
    },
    onError: async (error) => {
      toastColorMessage(error.message);
    },
  });

  return { postBookMarkAction };
};
