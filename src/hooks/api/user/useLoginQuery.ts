import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { getLogin, ILoginProps } from '@/apis';
import { UserTokenType } from '@/types';

export const useLoginQuery = (props: ILoginProps) => {
  const { state, code, socialType } = props;
  const { data: LoginResponse, isSuccess } = useQuery<
    UserTokenType,
    AxiosError
  >([code, socialType], () => getLogin({ code, socialType, state }));

  return { LoginResponse, isSuccess };
};
