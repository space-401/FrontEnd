import { rest, RestHandler } from 'msw';

import { END_POINTS, HTTP_STATUS_CODE } from '@constants/api';
import detailPageMock from '@mocks/data/DetailPage/detailPage.mock';
import { spacePostListMock } from '@mocks/data/MainPage/mainPage.mock';

export const postHandlers: RestHandler[] = [
  rest.get(END_POINTS.POST_SEARCH_LIST(':spaceId', ':page'), (_, res, ctx) => {
    return res(
      ctx.status(HTTP_STATUS_CODE.SUCCESS),
      ctx.json(spacePostListMock)
    );
  }),
  rest.get(END_POINTS.POST_DETAIL(':postId'), (_, res, ctx) => {
    return res(ctx.status(HTTP_STATUS_CODE.SUCCESS), ctx.json(detailPageMock));
  }),
];
