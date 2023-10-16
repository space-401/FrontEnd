import { Outlet, useNavigate } from 'react-router-dom';
//import { PATH } from '@constants/path';
import { useEffect } from 'react';
import { useUserStore } from '@store/user';

type PrivateRouteType = {
  isAllowed?: boolean;
};

const PrivateRoute = ({ isAllowed }: PrivateRouteType) => {
  const navigate = useNavigate();
  const isLogin = useUserStore((e) => e.isLogin);
  useEffect(() => {
    // if (!isAllowed && !isLogin) {
    //   navigate(PATH.LOGIN);
    // }
  }, [isAllowed, isLogin, navigate]);

  return <Outlet />;
};

export default PrivateRoute;
