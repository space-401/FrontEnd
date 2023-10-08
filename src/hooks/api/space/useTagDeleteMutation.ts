import type { ApiResponseType } from '@type/response.type';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { deleteSpaceTag, DeleteSpaceTagType } from '@apis/space/deleteSpaceTag';

export const useTagDeleteMutation = () => {
  const { mutate: deleteTagAction } = useMutation<
    ApiResponseType,
    AxiosError,
    DeleteSpaceTagType
  >((deleteInfo) => deleteSpaceTag(deleteInfo));
  return { deleteTagAction };
};
