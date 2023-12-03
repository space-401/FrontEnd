import { axiosInstance } from '@/apis';
import { END_POINTS } from '@/constants';

export const postPost = async (postInfo: FormData) => {
  const response = await axiosInstance.post<any>(END_POINTS.POST, postInfo, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};
