import { getSpaceTag } from '@/apis';
import { TagType } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

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
