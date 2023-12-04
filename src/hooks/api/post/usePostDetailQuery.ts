import { getPostDetail } from '@/apis';
import { END_POINTS } from '@/constants';
import { PostDetailType } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const usePostDetailQuery = (postId: number) => {
  const { data: postDetailData } = useQuery<PostDetailType, AxiosError>(
    [END_POINTS.POST, postId],
    () => getPostDetail(postId!),
    {
      enabled: !!postId,
    }
  );
  return { postDetailData };
};
