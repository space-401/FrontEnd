import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { CommentType } from '@type/space.type';
import { getComment } from '@apis/comment/getComment';

export const useCommentQuery = (postId: string) => {
  const { data: commentList } = useQuery<CommentType[], AxiosError>(
    ['commentList', postId],
    () => getComment(postId)
  );

  return { commentList };
};
