import { useMutation } from '@tanstack/react-query';
import { postLogout } from '@apis/user/postLogout';
import tokenStorage from '@utils/tokenStorage';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@constants/path';

export const useLogOutMutation = () => {
  const navigate = useNavigate();
  const { mutate: logoutAction } = useMutation(postLogout, {
    onSuccess: () => {
      tokenStorage.clear();
      navigate(PATH.LOGIN);
    },
  });

  return { logoutAction };
};
