import type { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { PATH } from '@constants/path';
import { ACCESS_TOKEN_KEY, HTTP_STATUS_CODE } from '@constants/api';
import { axiosInstance } from '@apis/AxiosInstance';
import { HTTPError } from '@apis/HTTPError';
import { getRefreshToken } from '@apis/user/getRefreshToken';

export interface ErrorResponseData {
  statusCode?: number;
  message?: string;
  code?: number;
}

export const checkAndSetToken = (config: InternalAxiosRequestConfig) => {
  if (!config.useAuth || !config.headers || config.headers.Authorization)
    return config;

  const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);

  if (!accessToken) {
    window.location.href = PATH.LANDING;
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
    const { accessToken } = await getRefreshToken();
    originalRequest.headers.Authorization = `Bearer ${accessToken}`;
    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);

    return axiosInstance(originalRequest);
  }

  if (status === HTTP_STATUS_CODE.BAD_REQUEST) {
    localStorage.removeItem(ACCESS_TOKEN_KEY);

    throw new HTTPError(status, data.message, data.code);
  }

  throw error;
};

export const handleAPIError = (error: AxiosError<ErrorResponseData>) => {
  if (!error.response) throw error;

  const { data, status } = error.response;

  if (status >= HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR) {
    throw new HTTPError(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR, data.message);
  }

  throw new HTTPError(status, data.message);
};
