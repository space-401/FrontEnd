import { axiosInstance } from '@/apis';
import type { SpaceFormResponse } from '@/types';
import { END_POINTS } from '@/constants';

export const postNewSpace = async (spaceInfo: FormData) => {
  const response = await axiosInstance.post<SpaceFormResponse>(
    END_POINTS.SPACE,
    spaceInfo,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );
  return response.data;
};
