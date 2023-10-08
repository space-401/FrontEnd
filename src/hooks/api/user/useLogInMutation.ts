import type { ApiResponseType } from '@type/response.type';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { postLogin } from '@apis/user/postLogin';

export const useLogInMutation = () => {
  const { mutate: loginAction } = useMutation<
    ApiResponseType,
    AxiosError,
    string
  >((token) => postLogin(token));
  return { loginAction };
};
