import { useQuery } from '@tanstack/react-query';
import { FilterType, getPostList } from '@apis/post/getPostList';
import { PostType } from '@type/post.type';
import { AxiosError } from 'axios';

export const usePostListQuery = (spaceId: string, filter: FilterType) => {
  const { data } = useQuery<PostType[], AxiosError>(['postList', spaceId], () =>
    getPostList(spaceId, filter)
  );

  return { postList: data! };
};
