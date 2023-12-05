import { axiosInstance } from '@/apis';
import { END_POINTS } from '@/constants';
import type { SpaceFormResponse } from '@/types';

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
