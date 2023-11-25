import { postLogout } from '@/apis';
import { PATH } from '@/constants';
import { tokenStorage } from '@/utils';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

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
