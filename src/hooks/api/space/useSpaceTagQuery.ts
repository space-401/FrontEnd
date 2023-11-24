import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { getSpaceTag } from '@/apis/space/getSpaceTag';
import { TagType } from '@/types/post.type';

export const useSpaceTagQuery = (spaceId: string | null) => {
  const NumberSpaceId = Number(spaceId);
  const { data } = useQuery<{ tags: TagType[] }, AxiosError>(
    ['spaceTag', NumberSpaceId],
    () => getSpaceTag(NumberSpaceId),
    {
      enabled: !!spaceId,
    }
  );

  return data;
};
