import { axiosInstance } from '@/apis';
import { END_POINTS } from '@/constants';
import type { ApiResponseType } from '@/types';

export const patchPost = async (postInfo: FormData) => {
  const { data } = await axiosInstance.patch<ApiResponseType>(
    END_POINTS.POST,
    postInfo,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );
  return data;
};
