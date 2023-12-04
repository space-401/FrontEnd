import { DeleteSpaceTagType, deleteSpaceTag } from '@/apis';
import { END_POINTS } from '@/constants';
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
      queryClient.setQueryData([END_POINTS.SPACE, spaceId], (prev: any) => ({
        ...prev,
        tagList: prev.tagList.filter((tag: any) => tag.tagId !== tagId),
      }));

      await queryClient.invalidateQueries([END_POINTS.SPACE, spaceId]);

      return { spaceId, tagId };
    },
  });
  return { deleteTagAction };
};
