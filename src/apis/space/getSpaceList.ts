import { axiosInstance } from '@/apis';
import type { OneSpaceType } from '@/types';
import { END_POINTS } from '@/constants';

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
