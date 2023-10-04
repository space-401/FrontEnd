import { rest, RestHandler } from 'msw';

import { END_POINTS, HTTP_STATUS_CODE } from '@constants/api';
import {
  commentList,
  deleteComment,
  postComment,
} from '@mocks/data/comment.mock';

export const commentHandlers: RestHandler[] = [
  /**
   * 댓글 정보를 불러오는 api
   */
  rest.get(END_POINTS.COMMENT, (_, res, ctx) => {
    return res(ctx.status(HTTP_STATUS_CODE.SUCCESS), ctx.json(commentList));
  }),
  /**
   * 댓글을 추가하는 api
   */
  rest.post(END_POINTS.COMMENT, (_, res, ctx) => {
    return res(ctx.status(HTTP_STATUS_CODE.SUCCESS), ctx.json(postComment));
  }),
  /**
   * 댓글을 삭제하는 api
   */
  rest.delete(END_POINTS.COMMENT, (_, res, ctx) => {
    return res(ctx.status(HTTP_STATUS_CODE.SUCCESS), ctx.json(deleteComment));
  }),
];
