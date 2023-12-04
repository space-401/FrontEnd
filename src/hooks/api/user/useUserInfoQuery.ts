import { getUserInfo } from '@/apis';
import { END_POINTS } from '@/constants';
import type { AccountDataType } from '@/types';
import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

export const useUserInfoQuery = () => {
  const { data: MyInfoData } = useQuery<AccountDataType, AxiosError>(
    [END_POINTS.MY_PROFILE],
    () => getUserInfo()
  );

  return { MyInfoData };
};
