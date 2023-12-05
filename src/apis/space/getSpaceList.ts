import { axiosInstance } from '@/apis';
import { END_POINTS } from '@/constants';
import type { OneSpaceType } from '@/types';

export const getSpaceList = async () => {
  try {
    const { data } = await axiosInstance.get<{ spaceList: OneSpaceType[] }>(
      END_POINTS.SPACE_LIST
    );
    return data;
  } catch (err: any) {
    throw new Error(err);
  }
};
