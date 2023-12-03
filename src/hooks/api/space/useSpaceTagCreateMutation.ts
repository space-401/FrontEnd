import { PostSpaceTagType, postSpaceTag } from '@/apis';
import type { ApiResponseType } from '@/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { v4 } from 'uuid';

export const useTagMutation = () => {
  const queryClient = useQueryClient();
  const { mutate: postTagAction } = useMutation<
    ApiResponseType,
    AxiosError,
    PostSpaceTagType
  >((tagInfo) => postSpaceTag(tagInfo), {
    onMutate: async (tagInfo) => {
      const { tagName, spaceId } = tagInfo;

      await queryClient.cancelQueries({
        queryKey: ['spaceTag', spaceId],
      });

      const previousTags = queryClient.getQueryData(['spaceTag', spaceId]);

      queryClient.setQueryData(['spaceTag', spaceId], (prev: any) => {
        if (prev.length) {
          return {
            tags: [...prev, { tagId: v4(), tagName: tagName }],
          };
        }
      });

      return { previousTags };
    },
  });

  return { postTagAction };
};
