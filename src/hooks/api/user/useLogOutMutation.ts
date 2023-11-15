import { useMutation } from '@tanstack/react-query';
import { useUserStore } from '@store/user';
import { postLogout } from '@apis/user/postLogout';
import tokenStorage from '@utils/tokenStorage';

export const useLogOutMutation = () => {
  const setIsLogin = useUserStore((e) => e.setUserInfo);
  const { mutate: logoutAction } = useMutation(postLogout, {
    onSuccess: () => {
      setIsLogin(undefined);
      tokenStorage.clear();
    },
  });

  return { logoutAction };
};
