import { useLogInMutation } from '@hooks/api/user/useLogInMutation';
import Loading from '@pages/Loading';
import { useEffect } from 'react';

const Auth = () => {
  const code = new URL(window.location.href).searchParams.get('code');
  const { loginAction } = useLogInMutation();
  useEffect(() => {
    loginAction(code!);
  }, [code, loginAction]);

  return <Loading />;
};

export default Auth;
