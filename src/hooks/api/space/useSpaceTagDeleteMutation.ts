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

      await queryClient.cancelQueries(['spaceTag', spaceId]);

      queryClient.setQueryData(['spaceTag', spaceId], (prev: any) => {
        return prev.tags.filter((tag: any) => tag.tagId !== tagId);
      });
    },
  });
  return { deleteTagAction };
};
