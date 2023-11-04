import axios from 'axios';
import { NETWORK } from '@constants/api';
import tokenStorage from '@utils/tokenStorage';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACK_URL,
  timeout: NETWORK.TIMEOUT,
  withCredentials: true,
  useAuth: true,
  headers: {
    Authorization: `Bearer ${tokenStorage.getAccessToken()}`,
  },
});
// axiosInstance.interceptors.request.use(checkAndSetToken, handleAPIError);

axiosInstance.interceptors.response.use(
  //성공시 발생
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      console.log('401');
      //리프레시 토큰도 없는 경우 로그인으로 리다이렉트
      if (!tokenStorage.hasRefreshToken()) {
        window.location.href = '/login';
      } else {
        await tokenRefresh();
        //재발급한 토큰으로 재요청
        return axiosInstance(error.config);
      }
    }
  }
);
//
let isRefreshing = false;
const tokenRefresh = async () => {
  if (!isRefreshing) {
    isRefreshing = true;
    try {
      const { data } = await axiosInstance.get(
        `${import.meta.env.VITE_BACK_URL} + /user/refreshToken`,
        {
          headers: {
            'Content-Type': 'application/json',
            'RefreshToken': `Bearer ${tokenStorage.getRefreshToken()}`,
          },
        }
      );
      tokenStorage.setAccessToken(data.accessToken, 30);
    } catch (error) {
      // 에러 처리
      console.log('토큰 요청 실패');
    } finally {
      isRefreshing = false;
    }
  }
};
//에러시 발생
// handleTokenError

// axiosInstance.interceptors.response.use(
//   (response) => response,
//   handleAPIError
// );
