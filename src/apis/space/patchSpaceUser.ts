import { axiosInstance } from '@/apis';
import { END_POINTS } from '@/constants';
import type { ApiResponseType } from '@/types';

export const patchSpaceUser = async (patchInfo: FormData) => {
  const { data } = await axiosInstance.patch<ApiResponseType>(
    END_POINTS.SPACE_USER,
    patchInfo,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );

  return data;
};
