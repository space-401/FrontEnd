import axios from 'axios';
import { AXIOS_BACK_URL, NETWORK } from '@constants/api';
import {
  checkAndSetToken,
  handleAPIError,
  handleTokenError,
} from '@apis/interceptors';
import { getCookie } from '@utils/cookie';

export const axiosInstance = axios.create({
  baseURL: AXIOS_BACK_URL,
  timeout: NETWORK.TIMEOUT,
  withCredentials: true,
  useAuth: true,
  headers: {
    Authorization: `Bearer ${getCookie('accessToken')}`,
  },
});
//
axiosInstance.interceptors.request.use(checkAndSetToken, handleAPIError);

axiosInstance.interceptors.response.use(
  (response) => response,
  handleTokenError
);

axiosInstance.interceptors.response.use((response) => response, handleAPIError);
