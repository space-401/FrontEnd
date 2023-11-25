import { PATH } from '@/constants';
import { tokenStorage } from '@/utils';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export const PrivateRoute = () => {
  const navigate = useNavigate();
  const accessToken = tokenStorage.getAccessToken();

  useEffect(() => {
    if (!accessToken) {
      navigate(PATH.LOGIN);
    }
  }, [navigate, accessToken]);

  return <Outlet />;
};
