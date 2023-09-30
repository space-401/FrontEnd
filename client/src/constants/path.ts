export const BASE_PATH = {
  HOME: '/',
  LANDING: '/landing',
  LOGIN: '/login',
  POST: '/posts',
  SPACE: '/space',
  USER: '/users',
  INVITE: '/invite',
};

export const PATH = {
  ...BASE_PATH,
  USER_INFO: `${BASE_PATH.USER}/myPage`,
  POST_CREATE: `${BASE_PATH.POST}/create`,
  POST_UPDATE: `${BASE_PATH.POST}/update`,
  SPACE_CREATE: `${BASE_PATH.SPACE}/create`,
  SPACE_UPDATE: `${BASE_PATH.SPACE}/update`,
  SPACE_SELECT: `${BASE_PATH.SPACE}/select`,
};
