import type {AxiosError, InternalAxiosRequestConfig} from 'axios';
import {PATH} from '@constants/path';
import {HTTP_STATUS_CODE} from '@constants/api';
import {axiosInstance} from '@apis/AxiosInstance';
import {HTTPError} from '@apis/HTTPError';
import {getRefreshToken} from '@apis/user/getRefreshToken';
import tokenStorage from "@utils/tokenStorage";

export interface ErrorResponseData {
  statusCode?: number;
  message?: string;
  code?: number;
}

export const checkAndSetToken = (config: InternalAxiosRequestConfig) => {
  if (!config.useAuth || !config.headers || config.headers.Authorization)
    return config;
  const accessToken = tokenStorage.getAccessToken()

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

  const {data, status} = error.response;

  if (status === HTTP_STATUS_CODE.BAD_REQUEST) {
    const {newRefreshToken} = await getRefreshToken();
    originalRequest.headers.Authorization = `Bearer ${newRefreshToken}`;
    tokenStorage.setAccessToken(newRefreshToken, 30);

    return axiosInstance(originalRequest);
  }

  if (status === HTTP_STATUS_CODE.BAD_REQUEST) {
    tokenStorage.removeAccessToken();

    throw new HTTPError(status, data.message, data.code);
  }

  throw error;
};

export const handleAPIError = (error: AxiosError<ErrorResponseData>) => {
  if (!error.response) throw error;

  const {data, status} = error.response;

  if (status === HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR) {
    throw new HTTPError(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR, data.message);
  }

  throw new HTTPError(status, data.message, data.code)
};


  if (status === HTTP_STATUS_CODE.UNAUTHORIZED) {
    if (!tokenStorage.hasRefreshToken()) {
      //리프레시 토큰도 없는 경우 로그인으로 리다이렉트
      window.location.href = PATH.LOGIN;
    } else {
      //리프레싱이 false 일 떄만 토큰 재발급 시도
      if (!isRefreshing) {
        isRefreshing = true;
        try {
          const { data } = await axios.get(PATH.REFRESH_TOKEN, {
            headers: {
              Authorization: `Bearer ${tokenStorage.getRefreshToken()}`,
            },
          });
          if (
              data.status === HTTP_STATUS_CODE.SUCCESS ||
              HTTP_STATUS_CODE.CREATED
          ) {
            console.log('리프레시 발급 성공!', data);
            // tokenStorage.setAccessToken(data.newAccessToken, 30);
            // axios.defaults.headers.common.Authorization = `Bearer ${data.newAccessToken}`;
            // config.headers.Authorization = `Bearer ${data.newAccessToken}`;
          }
          // config.headers.Authorization = `Bearer ${data.newAccessToken}`;
          // return axiosInstance(error.config);
        } catch (error) {
          throw new Error('토큰 요청 실패');
        }
      }
    }
  }
  return Promise.reject(error);
};