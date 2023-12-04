import { DeleteSpaceTagType, deleteSpaceTag } from '@/apis';
import type { ApiResponseType } from '@/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

export const useTagDeleteMutation = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteTagAction } = useMutation<
    ApiResponseType,
    AxiosError,
    DeleteSpaceTagType
  >((deleteInfo) => deleteSpaceTag(deleteInfo), {
    onMutate: async (deleteInfo) => {
      const { spaceId, tagId } = deleteInfo;

      await queryClient.cancelQueries(['spaceInfo', spaceId]);

      queryClient.setQueryData(['spaceInfo', spaceId], (prev: any) => ({
        ...prev,
        tagList: prev.tagList.filter((tag: any) => tag.tagId !== tagId),
      }));
    },
  });
  return { deleteTagAction };
};
