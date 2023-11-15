import { END_POINTS } from '@constants/api';
import { axiosInstance } from '@apis/AxiosInstance';
import { CommentType } from '@type/comment.type';

export const getComment = async (postId: number, spaceId: number) => {
  const { data } = await axiosInstance.get<CommentType[]>(END_POINTS.COMMENT, {
    params: { postId, spaceId },
  });
  return data;
};
