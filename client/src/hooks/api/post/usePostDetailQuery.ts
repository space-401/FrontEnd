import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { PostDetailType } from '@type/space.type';
import { getPostDetail } from '@apis/post/getPostDetail';

export const usePostDetailQuery = (postId: number | undefined) => {
  const { data: postDetailData } = useQuery<PostDetailType, AxiosError>(
    ['detail', postId],
    () => getPostDetail(postId!)
  );
  return { postDetailData };
};
