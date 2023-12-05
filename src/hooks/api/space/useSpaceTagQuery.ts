import { getSpaceTag } from '@/apis';
import { END_POINTS } from '@/constants';
import { TagType } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const useSpaceTagQuery = (spaceId: string | null) => {
  const NumberSpaceId = Number(spaceId);
  const { data } = useQuery<{ tags: TagType[] }, AxiosError>(
    [END_POINTS.SPACE_TAG, NumberSpaceId],
    () => getSpaceTag(NumberSpaceId),
    {
      enabled: !!spaceId,
    }
  );
  return data;
};
