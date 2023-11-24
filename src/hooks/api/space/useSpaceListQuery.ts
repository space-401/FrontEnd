import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { getSpaceList } from '@apis/space/getSpaceList';
import { OneSpaceType } from '@type/space.type';

export const useSpaceListQuery = () => {
  const { data: spaceList } = useQuery<
    { spaceList: OneSpaceType[] },
    AxiosError
  >(['spaceList'], () => getSpaceList());

  return { spaceList };
};
