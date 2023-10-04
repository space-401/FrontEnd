import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { PostDetailType } from '@/types/post.type';
import { getPostDetail } from '@apis/post/getPostDetail';

export const usePostDetailQuery = (postId: number, conditional: boolean) => {
  const { data: postDetailData } = useQuery<PostDetailType, AxiosError>(
    ['detail', postId],
    () => getPostDetail(postId!),
    {
      enabled: conditional && !!postId,
    }
  );
  return { postDetailData };
};
