import { PostSpaceTagType, postSpaceTag } from '@/apis';
import { END_POINTS } from '@/constants';
import type { ApiResponseType } from '@/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

export const useTagMutation = () => {
  const queryClient = useQueryClient();
  const { mutate: postTagAction } = useMutation<
    ApiResponseType,
    AxiosError,
    PostSpaceTagType
  >((tagInfo) => postSpaceTag(tagInfo), {
    onMutate: async (tagInfo) => {
      const { tagName, spaceId } = tagInfo;
      const previousTags = queryClient.getQueryData([
        END_POINTS.SPACE,
        spaceId,
      ]);
      const newTagId = Math.floor(Math.random() * 1000);
      queryClient.setQueryData([END_POINTS.SPACE, spaceId], (prev: any) => {
        return {
          ...prev,
          tagList: [...prev.tagList, { tagId: newTagId, tagName }],
        };
      });
      await queryClient.invalidateQueries({
        queryKey: [END_POINTS.SPACE, spaceId],
      });
      return { previousTags, newTagId };
    },
  });

  return { postTagAction };
};
