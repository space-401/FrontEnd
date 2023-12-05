import { HTTPError } from '@/apis';
import { HTTP_STATUS_CODE, PATH } from '@/constants';
import { toastColorMessage } from '@/utils';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const useResetError = () => {
  const navigate = useNavigate();

  const handleErrorReset = useCallback(
    (error: Error | HTTPError) => {
      if (!(error instanceof HTTPError)) {
        navigate(PATH.HOME);

        toastColorMessage('홈 화면으로 돌아갑니다.');

        return;
      }

      if (error.statusCode >= HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR) {
        navigate(PATH.RELOAD);
      } else {
        navigate(PATH.HOME);
      }
      toastColorMessage('홈 화면으로 돌아갑니다.');
    },
    [navigate]
  );

  return { handleErrorReset };
};
