import { useQuery } from '@tanstack/react-query';
import { getLogout } from '@apis/user/getLogout';

export const useLogOutQuery = () => {
  const { data: isSuccess } = useQuery(['logout'], () => getLogout());

  return { isSuccess };
};
