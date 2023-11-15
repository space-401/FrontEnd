import { useQuery } from '@tanstack/react-query';
import { getSpaceDetail } from '@apis/space/getSpaceDetail';
import type { SpaceInfoType } from '@type/space.type';
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
