import { DefaultBodyType, MockedRequest, rest, RestHandler } from 'msw';

import { END_POINTS, HTTP_STATUS_CODE } from '@constants/api';
import detailPageMock from '@mocks/data/DetailPage/detailPage.mock';
import postListMock from '@mocks/data/PostList/postList.mock';

export const postHandlers: RestHandler<MockedRequest<DefaultBodyType>>[] = [
  rest.get(END_POINTS.SPACE + '/:spaceId', (_, res, ctx) => {
    return res(ctx.status(HTTP_STATUS_CODE.SUCCESS), ctx.json(postListMock));
  }),

  rest.get(END_POINTS.SPACE + '/:postId', (_, res, ctx) => {
    return res(ctx.status(HTTP_STATUS_CODE.SUCCESS), ctx.json(detailPageMock));
  }),
];
