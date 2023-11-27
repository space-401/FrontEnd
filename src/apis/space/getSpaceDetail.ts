import { axiosInstance } from '@/apis';
import { END_POINTS } from '@/constants';
import type { SpaceInfoType } from '@/types';

export const getSpaceDetail = async (spaceId: number) => {
  const { data } = await axiosInstance.get<SpaceInfoType>(END_POINTS.SPACE, {
    params: { spaceId },
  });
  return data;
};
