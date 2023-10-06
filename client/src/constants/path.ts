export const BASE_PATH = {
  HOME: '/',
  LANDING: '/landing',
  LOGIN: '/login',
  POST: '/posts',
  SPACE: '/space',
  USER: '/users',
  INVITE: '/invite',
  AUTH: '/auth',
};

export const PATH = {
  ...BASE_PATH,
  USER_INFO: `${BASE_PATH.USER}/mypage`,
  POST_CREATE: (spaceId: number | string) =>
    `${BASE_PATH.SPACE}/${spaceId}/create`,
  POST_UPDATE: (postId: number | string) =>
    `${BASE_PATH.POST}/update/${postId}`,
  SPACE_MAIN: (spaceId: number | string) => `${BASE_PATH.SPACE}/${spaceId}`,
  SPACE_CREATE: `${BASE_PATH.SPACE}/create`,
  SPACE_UPDATE: (spaceId: number | string) =>
    `${BASE_PATH.SPACE}/update/${spaceId}`,
};
