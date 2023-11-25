import { Outlet, useNavigate } from 'react-router-dom';
import { PATH } from '@constants/path';
import tokenStorage from '@utils/tokenStorage';
import { useEffect } from 'react';

const VisitorRoute = () => {
  const navigate = useNavigate();
  const accessToken = tokenStorage.getAccessToken();

  useEffect(() => {
    if (accessToken) {
      navigate(PATH.SPACE, { replace: true });
    }
  }, [navigate, accessToken]);

  return <Outlet />;
};

export default VisitorRoute;
