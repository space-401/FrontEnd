import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { getLogin, ILoginProps } from '@apis/user/getLogin';
import { UserStateType } from '@store/user';

export const useLoginQuery = (props: ILoginProps) => {
  const { state, code, socialType } = props;
  const { data: LoginResponse, isSuccess } = useQuery<
    UserStateType,
    AxiosError
  >([code, socialType], () => getLogin({ code, socialType, state }));

  return { LoginResponse, isSuccess };
};
