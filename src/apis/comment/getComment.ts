import { axiosInstance } from '@/apis';
import { END_POINTS } from '@/constants';
import { CommentType } from '@/types';

export const getComment = async (postId: number, spaceId: number) => {
  const { data } = await axiosInstance.get<CommentType[]>(END_POINTS.COMMENT, {
    params: { postId, spaceId },
  });
  return data;
};
