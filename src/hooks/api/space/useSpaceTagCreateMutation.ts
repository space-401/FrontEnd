import { PostSpaceTagType, postSpaceTag } from '@/apis';
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
      const previousTags = queryClient.getQueryData(['spaceInfo', spaceId]);
      const newTagId = Math.floor(Math.random() * 1000);
      queryClient.setQueryData(['spaceInfo', spaceId], (prev: any) => {
        return {
          ...prev,
          tagList: [...prev.tagList, { tagId: newTagId, tagName }],
        };
      });
      await queryClient.invalidateQueries({
        queryKey: ['spaceInfo', spaceId],
      });
      return { previousTags, newTagId };
    },
  });

  return { postTagAction };
};
