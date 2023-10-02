import { rest, RestHandler } from 'msw';

import { END_POINTS, HTTP_STATUS_CODE } from '@constants/api';
import { detailSpaceMock } from '@mocks/data/MainPage/mainPage.mock';
import spaceListMock from "@mocks/data/SpaceList/spaceList.mock";

export const spaceHandlers: RestHandler[] = [
  rest.get(END_POINTS.SPACE, (_, res, ctx) => {
    return res(ctx.status(HTTP_STATUS_CODE.SUCCESS), ctx.json(spaceListMock));
  }),
  rest.get(END_POINTS.SPACE + '/:spaceId', (_, res, ctx) => {
    return res(ctx.status(HTTP_STATUS_CODE.SUCCESS), ctx.json(detailSpaceMock));
  }),
];
