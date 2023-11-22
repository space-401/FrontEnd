import { END_POINTS } from '@constants/api';
import { ApiResponseType } from '@/types/response.type';
import { axiosInstance } from '@apis/AxiosInstance';

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
