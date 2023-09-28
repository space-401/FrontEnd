import { Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  // 로그인된 유저만 들어오게하기
  return <Outlet />;
};

export default PrivateRoute;
