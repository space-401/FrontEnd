import { ILoginProps, getLogin } from '@/apis';
import { UserUnknownTokenType} from '@/types';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const useLoginQuery = (props: ILoginProps) => {
  const { state, code, socialType } = props;
  const {
    data: LoginResponse,
    isSuccess,
    isError,
  } = useQuery<UserUnknownTokenType, AxiosError>([code, socialType], () =>
    getLogin({ code, socialType, state })
  );

  return { LoginResponse, isSuccess, isError };
};
