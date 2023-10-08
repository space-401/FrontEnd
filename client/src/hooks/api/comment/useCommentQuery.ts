import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import type { CommentType } from '@type/space.type';
import { getComment } from '@apis/comment/getComment';

/**
 * @param postId 해당 포스트의 댓글 목록을 불러옵니다.
 * @return 댓글목록을 리턴합니다.
 */
export const useCommentQuery = (postId: string) => {
  const { data: commentList } = useQuery<CommentType[], AxiosError>(
    ['commentList', postId],
    () => getComment(postId)
  );

  return { commentList };
};
