import { axiosInstance } from '@/apis';
import { END_POINTS } from '@/constants';
import type { SpaceFormResponse } from '@/types';

export const patchSpace = async (spaceInfo: FormData) => {
  const { data } = await axiosInstance.patch<SpaceFormResponse>(
    END_POINTS.SPACE,
    spaceInfo,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );
  return data;
};
