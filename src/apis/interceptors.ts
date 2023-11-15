import type { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { PATH } from '@constants/path';
import { HTTP_STATUS_CODE } from '@constants/api';
import { axiosInstance } from '@apis/AxiosInstance';
import { HTTPError } from '@apis/HTTPError';
import { getRefreshToken } from '@apis/user/getRefreshToken';
import tokenStorage from '@utils/tokenStorage';

export interface ErrorResponseData {
  statusCode?: number;
  message?: string;
  code?: number;
}

let isRefreshing = false;

export const checkAndSetToken = (config: InternalAxiosRequestConfig) => {
  if (!config.useAuth || !config.headers || config.headers.Authorization)
    return config;
  const accessToken = tokenStorage.getAccessToken();

  if (!accessToken) {
    window.location.href = PATH.LOGIN;
    throw new Error('토큰이 유효하지 않습니다');
  }
  config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
};

export const handleTokenError = async (
  error: AxiosError<ErrorResponseData>
) => {
  const originalRequest = error.config;

  if (!error.response || !originalRequest)
    throw new Error('에러가 발생했습니다.');

  const { data, status } = error.response;

  if (status === HTTP_STATUS_CODE.BAD_REQUEST) {
    const { newRefreshToken } = await getRefreshToken();
    originalRequest.headers.Authorization = `Bearer ${newRefreshToken}`;
    tokenStorage.setAccessToken(newRefreshToken, 30);

    return axiosInstance(originalRequest);
  }

  if (status === HTTP_STATUS_CODE.BAD_REQUEST) {
    tokenStorage.removeAccessToken();

    throw new HTTPError(status, data.message, data.code);
  }

  /*추가 부분 - 인증 에러가 날 때*/
  if (status === HTTP_STATUS_CODE.UNAUTHORIZED) {
    if (!tokenStorage.hasRefreshToken()) {
      // 리프레시 토큰도 없다면 로그인으로 이동
      window.location.href = PATH.LOGIN;
    } else {
      //리프레싱 아직 안됐을때
      if (!isRefreshing) {
        isRefreshing = true;
        const { newRefreshToken } = await getRefreshToken();
        originalRequest.headers.Authorization = `Bearer ${newRefreshToken}`;
        tokenStorage.setAccessToken(newRefreshToken, 30);

        return axiosInstance(originalRequest);
      }
    }
  }
};
export const handleAPIError = (error: AxiosError<ErrorResponseData>) => {
  if (!error.response) throw error;

  const { data, status } = error.response;

  if (status === HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR) {
    throw new HTTPError(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR, data.message);
  }

  throw new HTTPError(status, data.message, data.code);
};
