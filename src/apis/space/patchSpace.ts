import { axiosInstance } from '@/apis';
import type { SpaceFormResponse } from '@/types';
import { END_POINTS } from '@/constants';

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
