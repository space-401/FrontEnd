import { Outlet, useNavigate } from 'react-router-dom';
import { PATH } from '@constants/path';
import tokenStorage from '@utils/tokenStorage';

const PrivateRoute = () => {
  const navigate = useNavigate();
  const accessToken = tokenStorage.getAccessToken();

  if (!accessToken) {
    navigate(PATH.LOGIN);
  }

  return <Outlet />;
};

export default PrivateRoute;
