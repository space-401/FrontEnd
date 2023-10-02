import { END_POINTS } from '@constants/api';
import { axiosInstance } from '@apis/AxiosInstance';
import { CommentType } from '@type/space.type';

export const getComment = async (postId: string) => {
  const { data } = await axiosInstance.get<CommentType[]>(
    END_POINTS.COMMENT(postId)
  );

  return data;
};
