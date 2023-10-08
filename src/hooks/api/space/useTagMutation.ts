import type { ApiResponseType } from '@type/response.type';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { postSpaceTag, PostSpaceTagType } from '@apis/space/postSpaceTag';

export const useTagMutation = () => {
  const { mutate: postTagAction } = useMutation<
    ApiResponseType,
    AxiosError,
    PostSpaceTagType
  >((postInfo) => postSpaceTag(postInfo));
  return { postTagAction };
};
