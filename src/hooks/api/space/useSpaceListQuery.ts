import { getSpaceList } from '@/apis';
import { OneSpaceType } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const useSpaceListQuery = () => {
  const { data: spaceList } = useQuery<
    { spaceList: OneSpaceType[] },
    AxiosError
  >(['spaceList'], () => getSpaceList());

  return { spaceList };
};
