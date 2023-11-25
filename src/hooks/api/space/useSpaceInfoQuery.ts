import { getSpaceDetail } from '@/apis';
import type { SpaceInfoType } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const useSpaceInfoQuery = (spaceId: string) => {
  const NumberSpaceId = Number(spaceId);
  const { data: spaceInfo } = useQuery<SpaceInfoType, AxiosError>(
    ['spaceInfo', NumberSpaceId],
    () => getSpaceDetail(NumberSpaceId),
    {
      enabled: !!spaceId,
    }
  );

  return { spaceInfo };
};
