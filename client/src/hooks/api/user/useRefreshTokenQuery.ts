import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { getRefreshToken, TokenData } from '@apis/user/getRefreshToken';

export const useRefreshTokenQuery = () => {
  const { data: accessToken } = useQuery<TokenData, AxiosError>(
    ['refreshToken'],
    () => getRefreshToken()
  );

  return { accessToken };
};
