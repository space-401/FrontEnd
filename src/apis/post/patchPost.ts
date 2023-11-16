import { END_POINTS } from '@constants/api';
import { ApiResponseType } from '@/types/response.type';
import { axiosInstance } from '@apis/AxiosInstance';

export const patchPost = async (postInfo: FormData) => {
  const { data } = await axiosInstance.patch<ApiResponseType>(
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
  return data;
};
