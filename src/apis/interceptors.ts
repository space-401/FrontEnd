import type { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { ERROR_CODE, HTTP_STATUS_CODE, PATH } from '@/constants';
import { axiosInstance, HTTPError, getNewAccessToken } from '@/apis';
import { tokenStorage } from '@/utils';

export interface ErrorResponseData {
  statusCode?: number;
  message?: string;
  code?: number;
}

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

export interface ErrorResponseData {
  statusCode?: number;
  message?: string;
  code?: number;
}

export const handleTokenError = async (
  error: AxiosError<ErrorResponseData>
) => {
  const originalRequest = error.config;

  if (!error.response || !originalRequest)
    throw new Error('에러가 발생했습니다.');

  const { data, status } = error.response;

  if (
    status === HTTP_STATUS_CODE.UNAUTHORIZED &&
    data.code === ERROR_CODE.EXPIRED_TOKEN
  ) {
    const newAccessToken = await getNewAccessToken();
    originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
    tokenStorage.setAccessToken(newAccessToken, 30);

    return axiosInstance(originalRequest);
  }

  if (
    status === HTTP_STATUS_CODE.UNAUTHORIZED &&
    data.code !== ERROR_CODE.EXPIRED_TOKEN
  ) {
    tokenStorage.removeAccessToken();
    throw new HTTPError(status, data.message, data.code);
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
