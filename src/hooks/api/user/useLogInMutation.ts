import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { LoginResponseType, postLogin } from '@apis/user/postLogin';
import tokenStorage from '@utils/tokenStorage';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@constants/path';
import { toastColorMessage } from '@utils/toastMessage';
import { useUserStore } from '@store/user';

export const useLogInMutation = () => {
  const navigate = useNavigate();
  const setIsLogin = useUserStore((e) => e.setIsLogin);
  const { mutate: loginAction } = useMutation<
    LoginResponseType,
    AxiosError,
    string
  >((token) => postLogin(token), {
    onSuccess: (data) => {
      tokenStorage.setAccessToken(data.accessToken);
      setIsLogin(true);
      navigate(PATH.SPACE);
    },
    onError: (error) => {
      toastColorMessage(error.message);
      navigate(PATH.LOGIN);
    },
  });
  return { loginAction };
};
