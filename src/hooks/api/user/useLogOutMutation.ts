import { useMutation } from '@tanstack/react-query';
import { postLogout } from '@apis/user/getLogout';
import { useUserStore } from '@store/user';

export const useLogOutMutation = () => {
  const setIsLogin = useUserStore((e) => e.setIsLogin);
  const { mutate: logoutAction } = useMutation(['logout'], postLogout, {
    onSuccess: () => {
      setIsLogin(false);
    },
  });

  return { logoutAction };
};
