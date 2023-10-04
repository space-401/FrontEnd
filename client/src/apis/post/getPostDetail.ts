import { axiosInstance } from '@apis/AxiosInstance';
import { END_POINTS } from '@constants/api';
import { PostDetailType } from '@/types/post.type';

export const getPostDetail = async (postId: number) => {
  const { data } = await axiosInstance.get<PostDetailType>(
<<<<<<< HEAD
    END_POINTS.POST_DETAIL(String(postId))
=======
    END_POINTS.POST + `/${postId}`
>>>>>>> 6f40f99b6521b1c08c26bc62af5e3c1be30c4346
  );
  console.log('postDetail 호출');
  return data;
};
