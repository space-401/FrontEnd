import { END_POINTS, HTTP_STATUS_CODE } from '@/constants';
import { RestHandler, rest } from 'msw';
import { postCreate, postDetail, successResponse } from '@/mocks/data';

export const postHandlers: RestHandler[] = [
  /**
   * 상세 정보를 불러오는 api
   */
  rest.get(END_POINTS.POST, (_, res, ctx) => {
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
