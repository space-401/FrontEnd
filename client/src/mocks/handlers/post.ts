import { rest, RestHandler } from 'msw';

import { END_POINTS, HTTP_STATUS_CODE } from '@constants/api';
import { postCreate, postDetail } from '@mocks/data/post.mock';
import { successResponse } from '@mocks/data/response.mock';

export const postHandlers: RestHandler[] = [
  /**
   * 상세 정보를 불러오는 api
   */
  rest.get(END_POINTS.POST + `/:postId`, (_, res, ctx) => {
    return res(ctx.status(HTTP_STATUS_CODE.SUCCESS), ctx.json(postDetail));
  }),
  /**
   * 게시물을 추가하는 api
   */
  rest.post(END_POINTS.POST, (_, res, ctx) => {
    return res(ctx.status(HTTP_STATUS_CODE.SUCCESS), ctx.json(postCreate));
  }),
  /**
   * 게시물을 수정하는 api
   */
  rest.patch(END_POINTS.POST, (_, res, ctx) => {
    return res(ctx.status(HTTP_STATUS_CODE.SUCCESS), ctx.json(postCreate));
  }),
  /**
   * 게시물을 삭제하는 api
   */
  rest.delete(END_POINTS.POST, (_, res, ctx) => {
    return res(ctx.status(HTTP_STATUS_CODE.SUCCESS), ctx.json(successResponse));
  }),
  /**
   * 북마크를 하는 api
   */
  rest.post(END_POINTS.POST_BOOK_MARK, (_, res, ctx) => {
    return res(ctx.status(HTTP_STATUS_CODE.SUCCESS), ctx.json(successResponse));
  }),
];
