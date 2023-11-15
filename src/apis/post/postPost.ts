import { formDataAxiosInstance } from '@apis/AxiosInstance';
import { END_POINTS } from '@constants/api';
import { ApiResponseType } from '@/types/response.type';

export const postPost = async (postInfo: FormData) => {
  const response = await formDataAxiosInstance.post<ApiResponseType>(
    END_POINTS.POST,
    {
      ...postInfo,
    }
  );
  return response.data;
};
