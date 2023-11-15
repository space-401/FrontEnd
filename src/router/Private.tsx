import { Outlet, useNavigate } from 'react-router-dom';
import { PATH } from '@constants/path';
import { useEffect } from 'react';
import { useUserStore } from '@store/user';
import tokenStorage from '@utils/tokenStorage';

type PrivateRouteType = {
  isAllowed: boolean;
};

const PrivateRoute = ({ isAllowed }: PrivateRouteType) => {
  const navigate = useNavigate();
  const isLogin = useUserStore((user) => user.userInfo);
  useEffect(() => {
    if (!isAllowed && !isLogin) {
      navigate(PATH.LOGIN);
    }
    if (!isLogin) {
      console.log('로그인 상태가 아니라서 token 없어짐');
      tokenStorage.clear();
    }
  }, [isAllowed, isLogin, navigate]);

  return <Outlet />;
};

export default PrivateRoute;
