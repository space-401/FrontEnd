import { deleteCookie, hasCookie } from '@utils/cookie';
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '@constants/api';

const tokenStorage = {
  get accessToken() {
    return sessionStorage.getItem(ACCESS_TOKEN_KEY);
  },

  setAccessToken(accessToken: string) {
    sessionStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
  },

  hasAccessToken() {
    return Boolean(this.accessToken);
  },

  hasRefreshToken() {
    return hasCookie(REFRESH_TOKEN_KEY);
  },

  removeAccessToken() {
    sessionStorage.removeItem(ACCESS_TOKEN_KEY);
  },

  removeRefreshToken() {
    deleteCookie(REFRESH_TOKEN_KEY);
  },

  clear() {
    this.removeAccessToken();
    this.removeRefreshToken();
  },
};

export default tokenStorage;
