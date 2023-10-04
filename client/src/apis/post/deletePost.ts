import { axiosInstance } from '@apis/AxiosInstance';
import { END_POINTS } from '@constants/api';
import { ApiResponseType } from '@type/response.type';

export const deletePost = async (postId: number) => {
  const { data } = await axiosInstance.delete<ApiResponseType>(
    END_POINTS.POST,
    { data: { postId } }
  );

  return data;
};
