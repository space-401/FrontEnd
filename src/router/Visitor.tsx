import { PATH } from '@/constants';
import { tokenStorage } from '@/utils';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export const VisitorRoute = () => {
  const navigate = useNavigate();
  const accessToken = tokenStorage.getAccessToken();

  useEffect(() => {
    if (accessToken) {
      navigate(PATH.SPACE, { replace: true });
    }
  }, [navigate, accessToken]);

  return <Outlet />;
};
