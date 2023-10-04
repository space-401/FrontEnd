import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import type { PostDetailType } from '@type/space.type';
import { getPostDetail } from '@apis/post/getPostDetail';

/**
 * @param postId 가져올 포스트 아이디를 입력합니다.
 */
export const usePostDetailQuery = (postId: number) => {
  const { data: postDetailData } = useQuery<PostDetailType, AxiosError>(
    ['detail', postId],
    () => getPostDetail(postId)
  );
  return { postDetailData };
};
