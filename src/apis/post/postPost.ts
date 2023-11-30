import { axiosInstance } from '@/apis';
import { END_POINTS } from '@/constants';
import type { ApiResponseType } from '@/types';

export const postPost = async (postInfo: FormData) => {
  const response = await axiosInstance.post<ApiResponseType>(
    END_POINTS.POST,
    {
      ...postInfo,
    },
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );
  return response.data;
};
