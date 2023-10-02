import { rest, RestHandler } from 'msw';

import { END_POINTS, HTTP_STATUS_CODE } from '@constants/api';
import CommentListMock from '@mocks/data/DetailPage/comment.mock';

export const commentHandlers: RestHandler[] = [
  rest.get(END_POINTS.COMMENT(':postId'), (_, res, ctx) => {
    return res(ctx.status(HTTP_STATUS_CODE.SUCCESS), ctx.json(CommentListMock));
  }),
];
