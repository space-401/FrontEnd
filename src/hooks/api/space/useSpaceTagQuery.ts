import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { getSpaceTag } from '@/apis/space/getSpaceTag';
import { TagType } from '@/types/post.type';

export const useSpaceTagQuery = (spaceId: string) => {
  const NumberSpaceId = Number(spaceId);
  const { data: spaceTag } = useQuery<TagType[], AxiosError>(
    ['spaceTag', NumberSpaceId],
    () => getSpaceTag(NumberSpaceId),
    {
      enabled: !!spaceId,
    }
  );

  return { spaceTag };
};
