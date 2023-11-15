export const PRODUCT = process.env.NODE_ENV === 'production';
export const DEV = process.env.NODE_ENV === 'development';
export const NETWORK = {
  RETRY_COUNT: 2,
  TIMEOUT: 10000,
};

export const AXIOS_BACK_URL = PRODUCT ? import.meta.env.VITE_BACK_URL : '/';

export const END_POINTS = {
  USER: '/user',
  TOKEN: '/refreshToken',
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

export const ERROR_CODE = {} as const;

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

export const ERROR_MESSAGE = '오류가 발생했습니다. 잠시 후 다시 시도해주세요.';

export const ACCESS_TOKEN_KEY = 'ACCESS_TOKEN';
export const REFRESH_TOKEN_KEY = 'REFRESH_TOKEN_KEY';
