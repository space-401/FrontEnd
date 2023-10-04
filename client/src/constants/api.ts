export const Product = process.env.NODE_ENV === 'production';
export const Dev = process.env.NODE_ENV === 'development';
export const NETWORK = {
    RETRY_COUNT: 2,
    TIMEOUT: 10000,
};

export const AXIOS_BASE_URL = Product
    ? `${window.location.protocol}//${import.meta.env.BASE_URL}`
    : '/';

export const END_POINTS = {
    USER: '/user',
    LOGIN: '/login',
    LOGOUT: '/logout',
    TOKEN: '/refreshToken',
    USERINFO: '/mypage',
    MY_PROFILE: `/profile`,
    SPACE: '/space',
    POST: '/post',
    SPACE_LIST: '/list',
    COMMENT: '/comment',
    POST_BOOK_MARK: '/post/bookmark',
    SPACE_INFO: (spaceId: number | string) => `/space/${spaceId}`,
    SPACE_TAG: (spaceId: number | string) => `/space/${spaceId}/tag`,
    SPACE_USER: (spaceId: number | string) => `/space/${spaceId}/user`,
    SPACE_SEARCH_LIST: (spaceId: number | string, page: number | string) =>
        `space/${spaceId}/search?page=${page}`,
    MY_BOOK_MARK_LIST: (page: number | string) => `/bookmark?page=${page}`,
    MY_POST_LIST: (page: number | string) => `/mypost?page=${page}`,
    MY_COMMENT_LIST: (page: number | string) => `/mycomment?page=${page}`
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

export const KAKAO_LOGIN_URL = `https://kauth.kakao.com/oauth/authorize`;
export const NAVER_LOGIN_URL = `https://nid.naver.com/oauth2.0/authorize`;
export const GOOGLE_LOGIN_URL = `https://accounts.google.com/o/oauth2/auth`;

export const LOGIN_REDIRECT_URI = 'http://localhost:3000/auth';
