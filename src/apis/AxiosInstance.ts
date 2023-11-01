import axios from 'axios';
import { NETWORK } from '@constants/api';
import {
  checkAndSetToken,
  handleAPIError,
  handleTokenError,
} from '@apis/interceptors';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACK_URL,
  timeout: NETWORK.TIMEOUT,
  withCredentials: true,
  useAuth: true,
  headers: {
    // Authorization: `Bearer ${getCookie('accessToken')}`,
    Authorization: 'accesstoken1',
  },
});
//
axiosInstance.interceptors.request.use(checkAndSetToken, handleAPIError);

axiosInstance.interceptors.response.use(
  (response) => response,
  handleTokenError
);

axiosInstance.interceptors.response.use((response) => response, handleAPIError);
