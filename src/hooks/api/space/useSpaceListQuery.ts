import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { getSpaceList } from '@/apis';
import { OneSpaceType } from '@/types';

export const useSpaceListQuery = () => {
  const { data: spaceList } = useQuery<
    { spaceList: OneSpaceType[] },
    AxiosError
  >(['spaceList'], () => getSpaceList());

  return { spaceList };
};
