import { axiosInstance } from '@/apis';
import type { SpaceInfoType } from '@/types';
import { END_POINTS } from '@/constants';
export const getSpaceDetail = async (spaceId: number) => {
  const { data } = await axiosInstance.get<SpaceInfoType>(END_POINTS.SPACE, {
    params: { spaceId },
  });
  return data;
};
