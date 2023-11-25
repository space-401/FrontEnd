import tokenStorage from '@utils/tokenStorage';
import { PATH } from '@constants/path';
import { useNavigate } from 'react-router-dom';

const useResetError = (resetError: () => void) => {
  const navigate = useNavigate();
  const accessToken = tokenStorage.getAccessToken();
  const path = accessToken ? PATH.SPACE : PATH.HOME;
  const resetHandling = (isRetry: boolean) => {
    resetError();
    return isRetry ? navigate(-1) : navigate(path, { replace: true });
  };

  return { resetHandling };
};

export default useResetError;
