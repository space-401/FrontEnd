import { useMutation } from '@tanstack/react-query';
import { postLogout } from '@/apis';
import { tokenStorage } from '@/utils';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/constants';

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
