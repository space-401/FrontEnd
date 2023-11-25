import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { getUserInfo } from '@/apis';
import type { AccountDataType } from '@/types';

export const useUserInfoQuery = () => {
  const { data: MyInfoData } = useQuery<AccountDataType, AxiosError>(
    ['myInfo'],
    () => getUserInfo()
  );

  return { MyInfoData };
};
