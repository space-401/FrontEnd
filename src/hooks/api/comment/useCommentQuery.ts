import { getComment } from '@/apis';
import { END_POINTS } from '@/constants';
import { CommentType } from '@/types';
import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

/**
 * @param postId 해당 포스트의 댓글 목록을 불러옵니다.
 * @param spaceId 해당 스페이스의 유저 정보를 불러옵니다.
 * @return 댓글목록을 리턴합니다.
 */
export const useCommentQuery = (postId: number, spaceId: number) => {
  const { data: commentList } = useQuery<CommentType[], AxiosError>(
    [END_POINTS.COMMENT, postId, spaceId],
    () => getComment(postId, spaceId)
  );

  return { commentList };
};
