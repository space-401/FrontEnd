export const Dev = process.env.NODE_ENV !== 'development';

export const NETWORK = {
  RETRY_COUNT: 2,
  TIMEOUT: 10000,
};

export const BASE_URL = Dev
  ? 'http:localhost:3000'
  : import.meta.env.VITE_BASE_URL;

export const AXIOS_BASE_URL = Dev ? '/' : import.meta.env.VITE_BACK_URL;

export const END_POINTS = {
  USER: '/user',
  TOKEN: '/user/refreshToken',
  MY_POST_LIST: `/mypost`,
  USERINFO: '/mypage',
  MY_COMMENT_LIST: `/mycomment`,
  LOGOUT: '/logout',
  LOGIN: '/login',
  MY_BOOK_MARK_LIST: `/bookmark`,
  SPACE: '/space',
  SPACE_LIST: '/space/list',
  SPACE_USER: `/space/user`,
  SPACE_TAG: `/space/tag`,
  SPACE_POST_LIST: `/space/search`,
  MY_PROFILE: `/space/profile`,
  POST: '/post',
  POST_BOOK_MARK: '/post/bookmark',
  COMMENT: '/comment',
} as const;

export const HTTP_STATUS_CODE = {
  SUCCESS: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  CONTENT_TOO_LARGE: 413,
  INTERNAL_SERVER_ERROR: 500,
} as const;

export const ERROR_CODE = {
  INVALID_REQUEST: 1000,
  MISSING_PARAMETER: 1001,
  DUPLICATED_MEMBER_NICKNAME: 1002,
  ALREADY_SAVED_SPACE: 1003,
  INVALID_SPACE_CODE_OR_PASSWORD: 1004,
  ALREADY_DELETED_SPACE: 2001,
  ALREADY_DELETED_POST: 2002,
  OVER_SIZED_IMAGE: 5001,
  MISSING_IMAGE: 5002,
  INVALID_TOKEN: 9101,
  EXPIRED_TOKEN: 9102,
  FAIL_TO_VALIDATE_TOKEN: 9103,
  TOKEN_NOT_FOUND: 9104,
  UNAUTHORIZED_REQUEST: 9105,
  SERVER_ERROR: 9999,
} as const;

export const HTTP_ERROR_MESSAGE = {
  [HTTP_STATUS_CODE.NOT_FOUND]: {
    HEADING: '길을 잃었나요?',
    BODY: '요청하신 페이지를 찾을 수 없습니다.',
    BUTTON: '홈으로 가기',
  },
  [HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR]: {
    HEADING: '현재 페이지를 표시할 수 없습니다.',
    BODY: `잠시 후 다시 시도해주세요.`,
    BUTTON: '새로고침',
  },
  [HTTP_STATUS_CODE.BAD_REQUEST]: {
    HEADING: '잘못된 요청입니다.',
    BODY: '확인 후 다시 시도해주세요.',
    BUTTON: '홈으로 가기',
  },
} as const;

export const ACCESS_TOKEN_KEY = 'ACCESS_TOKEN';
export const REFRESH_TOKEN_KEY = 'REFRESH_TOKEN';
