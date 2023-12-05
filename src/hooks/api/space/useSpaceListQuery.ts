import { getSpaceList } from '@/apis';
import { END_POINTS } from '@/constants';
import { OneSpaceType } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const useSpaceListQuery = () => {
  const { data: spaceList } = useQuery<
    { spaceList: OneSpaceType[] },
    AxiosError
  >([END_POINTS.SPACE], () => getSpaceList());

  return { spaceList };
};
