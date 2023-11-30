import { getPostDetail } from '@/apis';
import { PostDetailType } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

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
