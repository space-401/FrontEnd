import { DefaultBodyType, MockedRequest, rest, RestHandler } from 'msw';

import { END_POINTS, HTTP_STATUS_CODE } from '@constants/api';
import { detailSpaceMock } from '@mocks/data/MainPage/mainPage.mock';

export const spaceHandlers: RestHandler<MockedRequest<DefaultBodyType>>[] = [
  rest.get(END_POINTS.SPACE + '/:spaceId', (_, res, ctx) => {
    return res(ctx.status(HTTP_STATUS_CODE.SUCCESS), ctx.json(detailSpaceMock));
  }),
];
