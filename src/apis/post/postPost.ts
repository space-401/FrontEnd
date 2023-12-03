import { axiosInstance } from '@/apis';
import { END_POINTS } from '@/constants';

export const postPost = async (postInfo: FormData) => {
  for (const [key, value] of postInfo.entries()) {
    console.log(`${key}: ${value}`);
  }
  const response = await axiosInstance.post<any>(END_POINTS.POST, postInfo, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};
