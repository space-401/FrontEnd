import axios from 'axios';
import { NETWORK } from '@constants/api';
import tokenStorage from '@utils/tokenStorage';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACK_URL,
  timeout: NETWORK.TIMEOUT,
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${tokenStorage.getAccessToken()}`,
  },
});

let isRefreshing = false;
axiosInstance.interceptors.response.use(
  //성공시 발생
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      tokenStorage.removeAccessToken();
      if (!tokenStorage.hasRefreshToken()) {
        //리프레시 토큰도 없는 경우 로그인으로 리다이렉트
        window.location.href = '/login';
      } else {
        //리프레싱이 false 일 떄만 토큰 재발급 시도
        if (!isRefreshing) {
          isRefreshing = true;
          try {
            const { data } = await axios.get(
              `${import.meta.env.VITE_BACK_URL}/user/refreshToken`,
              {
                headers: {
                  Authorization: `Bearer ${tokenStorage.getRefreshToken()}`,
                },
              }
            );
            tokenStorage.setAccessToken(data.newAccessToken, 30);
          } catch (error) {
            throw new Error('토큰 요청 실패');
          }
          //재발급한 토큰으로 재요청
          console.log('재요청 토큰', tokenStorage.getAccessToken());
          await axiosInstance(error.config);
        }
      }
    }
  }
);

//에러시 발생
// handleTokenError

// axiosInstance.interceptors.response.use(
//   (response) => response,
//   handleAPIError
// );
