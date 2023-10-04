import { rest, RestHandler } from 'msw';

import { END_POINTS, HTTP_STATUS_CODE } from '@constants/api';
import {
  spaceCreate,
  spaceInfo,
  spaceList,
  spacePostList,
} from '@mocks/data/space.mock';
import { successResponse } from '@mocks/data/response.mock';

export const spaceHandlers: RestHandler[] = [
  /**
   * 스페이스 정보를 불러오는 api
   */
  rest.get(END_POINTS.SPACE_INFO(':spaceId'), (_, res, ctx) => {
    return res(ctx.status(HTTP_STATUS_CODE.SUCCESS), ctx.json(spaceInfo));
  }),
  /**
   * 스페이스 목록들에 대한 정보를 불러오는 api
   */
  rest.get(END_POINTS.SPACE_LIST, (_, res, ctx) => {
    return res(ctx.status(HTTP_STATUS_CODE.SUCCESS), ctx.json(spaceList));
  }),
  /**
   * 스페이스 메인페이지 (리스트)를 불러오는 api
   */
  rest.get(END_POINTS.SPACE + '/:spaceId/search', (_, res, ctx) => {
    return res(ctx.status(HTTP_STATUS_CODE.SUCCESS), ctx.json(spacePostList));
  }),
  /**
   * 스페이스를 생성하는 api
   */
  rest.post(END_POINTS.SPACE, (_, res, ctx) => {
    return res(ctx.status(HTTP_STATUS_CODE.SUCCESS), ctx.json(spaceCreate));
  }),
  /**
   * 스페이스를 수정하는 api
   */
  rest.patch(END_POINTS.SPACE_INFO(':spaceId'), (_, res, ctx) => {
    return res(ctx.status(HTTP_STATUS_CODE.SUCCESS), ctx.json(spaceCreate));
  }),
  /**
   * 스페이스를 삭제하는 api
   */
  rest.delete(END_POINTS.SPACE_INFO(':spaceId'), (_, res, ctx) => {
    return res(ctx.status(HTTP_STATUS_CODE.SUCCESS), ctx.json(successResponse));
  }),
  /**
   * 닉네임 중복 체크를 해주는 api
   */
  rest.get(END_POINTS.SPACE_USER(':spaceId'), (_, res, ctx) => {
    return res(ctx.status(HTTP_STATUS_CODE.SUCCESS), ctx.json(successResponse));
  }),
  /**
   * 스페이스를 입장하는 api (패스워드 입력)
   */
  rest.post(END_POINTS.SPACE_USER(':spaceId'), (_, res, ctx) => {
    return res(ctx.status(HTTP_STATUS_CODE.SUCCESS), ctx.json(spaceCreate));
  }),
  /**
   * 스페이스의 회원 상태(방장 <-> 회원)를 변경하는 api
   */
  rest.patch(END_POINTS.SPACE_USER(':spaceId'), (_, res, ctx) => {
    return res(ctx.status(HTTP_STATUS_CODE.SUCCESS), ctx.json(successResponse));
  }),
  /**
   * 스페이스의 회원이 나가는 api
   */
  rest.delete(END_POINTS.SPACE_USER(':spaceId'), (_, res, ctx) => {
    return res(ctx.status(HTTP_STATUS_CODE.SUCCESS), ctx.json(successResponse));
  }),
  /**
   * 태그 추가하는 api
   */
  rest.post(END_POINTS.SPACE_TAG(':spaceId'), (_, res, ctx) => {
    return res(ctx.status(HTTP_STATUS_CODE.SUCCESS), ctx.json(successResponse));
  }),
  /**
   * 태그 삭제하는 api
   */
  rest.delete(END_POINTS.SPACE_TAG(':spaceId'), (_, res, ctx) => {
    return res(ctx.status(HTTP_STATUS_CODE.SUCCESS), ctx.json(successResponse));
  }),
];
