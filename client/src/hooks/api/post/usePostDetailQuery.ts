import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { PostDetailType } from '@/types/post.type';
import { getPostDetail } from '@apis/post/getPostDetail';

export const usePostDetailQuery = (postId: number) => {
  const { data: postDetailData } = useQuery<PostDetailType, AxiosError>(
    ['detail', postId],
    () => getPostDetail(postId!),
    {
      enabled: !!postId,
    }
  );
  return { postDetailData };
};
