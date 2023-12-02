import {PATH, BASE_URL} from "@/constants";

export const KAKAO_LOGIN_URL = `https://kauth.kakao.com/oauth/authorize`;
export const NAVER_LOGIN_URL = `https://nid.naver.com/oauth2.0/authorize`;
export const GOOGLE_LOGIN_URL = `https://accounts.google.com/o/oauth2/auth`;

export const LOGIN_REDIRECT_URI = BASE_URL + PATH.AUTH;
