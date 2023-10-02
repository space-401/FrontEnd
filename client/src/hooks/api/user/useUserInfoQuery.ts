import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { getUserInfo } from '@apis/user/getUserInfo';
import { AccountDataType } from '@type/user.type';

export const useUserInfoQuery = () => {
  const { data: MyInfoData } = useQuery<AccountDataType, AxiosError>(
    ['myInfo'],
    () => getUserInfo()
  );

  return { MyInfoData };
};