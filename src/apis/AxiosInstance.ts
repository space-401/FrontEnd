import { checkAndSetToken, handleAPIError, handleTokenError } from '@/apis';
import { AXIOS_BASE_URL, NETWORK } from '@/constants';
import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: AXIOS_BASE_URL,
  timeout: NETWORK.TIMEOUT,
  withCredentials: true,
  useAuth: true,
});

axiosInstance.interceptors.request.use(checkAndSetToken, handleAPIError);

axiosInstance.interceptors.response.use(
  (response) => response,
  handleTokenError
);

axiosInstance.interceptors.response.use((response) => response, handleAPIError);
