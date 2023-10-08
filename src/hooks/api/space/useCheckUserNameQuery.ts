import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { getSpaceCheckNickName } from '@apis/space/getSpaceCheckNickName';
import type { ApiResponseType } from '@type/response.type';

/**
 * @param spaceId 확인할 스페이스 아이디
 * @param userName 해당 스페이스에서 이미 존재하는 닉네임인지 확인할 닉네임
 */
export const useCheckUserNameQuery = (spaceId: number, userName: string) => {
  const { data: checkUserNameResult } = useQuery<ApiResponseType, AxiosError>(
    ['checkUserName', spaceId, userName],
    () => getSpaceCheckNickName(spaceId, userName)
  );
  return { checkUserNameResult };
};
