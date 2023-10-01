import { rest, RestHandler } from 'msw';

import { END_POINTS, HTTP_STATUS_CODE } from '@constants/api';
import {
  accountInfoMock,
  bookMarkListMock,
  myCommentListMock,
  myPostListMock,
} from '@mocks/data/MyPage/MyPageMock';

export const userHandlers: RestHandler[] = [
  rest.get(END_POINTS.USERINFO, (_, res, ctx) => {
    return res(ctx.status(HTTP_STATUS_CODE.SUCCESS), ctx.json(accountInfoMock));
  }),

  rest.get(END_POINTS.USERINFO + '/postList', (_, res, ctx) => {
    return res(ctx.status(HTTP_STATUS_CODE.SUCCESS), ctx.json(myPostListMock));
  }),

  rest.get(END_POINTS.USERINFO + '/commentList', (_, res, ctx) => {
    return res(
      ctx.status(HTTP_STATUS_CODE.SUCCESS),
      ctx.json(myCommentListMock)
    );
  }),

  rest.get(END_POINTS.USERINFO + '/bookmarkList', (_, res, ctx) => {
    return res(
      ctx.status(HTTP_STATUS_CODE.SUCCESS),
      ctx.json(bookMarkListMock)
    );
  }),
];
