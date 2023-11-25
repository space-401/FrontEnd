// 완성

import { axiosInstance } from '@/apis';
import { END_POINTS } from '@/constants';

export const getSpaceTag = async (spaceId: number) => {
  const { data } = await axiosInstance.get<any>(END_POINTS.SPACE_TAG, {
    params: { spaceId },
  });
  return data;
};
