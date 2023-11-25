import type { ApiResponseType } from '@/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { postSpaceTag, PostSpaceTagType } from '@/apis';
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
          return [...prev, { tagId: v4(), tagTitle: tagName }];
        }
      });

      return { previousTags };
    },
    //onError
  });
  return { postTagAction };
};
