import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '@/constants';
import { deleteCookie, getCookie, hasCookie, setCookie } from '@/utils';

export const tokenStorage = {
  getAccessToken() {
    if (hasCookie(ACCESS_TOKEN_KEY)) {
      return getCookie(ACCESS_TOKEN_KEY);
    }
  },
  getRefreshToken() {
    return getCookie(REFRESH_TOKEN_KEY);
  },

  setAccessToken(accessToken: string, maxAgeInMinutes: number) {
    setCookie(ACCESS_TOKEN_KEY, accessToken, maxAgeInMinutes);
  },

  setRefreshToken(refreshToken: string, maxAgeInMinutes: number) {
    setCookie(REFRESH_TOKEN_KEY, refreshToken, maxAgeInMinutes);
  },

  hasAccessToken() {
    return !!getCookie(ACCESS_TOKEN_KEY);
  },

  hasRefreshToken() {
    return !!getCookie(REFRESH_TOKEN_KEY);
  },

  removeAccessToken() {
    deleteCookie(ACCESS_TOKEN_KEY);
  },

  removeRefreshToken() {
    deleteCookie(REFRESH_TOKEN_KEY);
  },

  clear() {
    this.removeAccessToken();
    this.removeRefreshToken();
  },
};
