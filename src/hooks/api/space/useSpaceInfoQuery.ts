import { getSpaceDetail } from '@/apis';
import { END_POINTS } from '@/constants';
import type { SpaceInfoType } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const useSpaceInfoQuery = (spaceId: string) => {
  const NumberSpaceId = Number(spaceId);
  const { data: spaceInfo, refetch } = useQuery<SpaceInfoType, AxiosError>(
    [END_POINTS.SPACE, NumberSpaceId],
    () => getSpaceDetail(NumberSpaceId),
    {
      enabled: !!spaceId,
    }
  );

  return { spaceInfo, refetch };
};
