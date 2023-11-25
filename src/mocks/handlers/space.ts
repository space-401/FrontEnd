import { rest, RestHandler } from 'msw';

import { END_POINTS, HTTP_STATUS_CODE } from '@/constants';
import {
  spaceCreate,
  spaceInfo,
  spaceList,
  spacePostList,
  SpaceTag,
  successResponse,
} from '@/mocks/data';

export const spaceHandlers: RestHandler[] = [
  /**
   * 스페이스 정보를 불러오는 api
   */
  rest.get(END_POINTS.SPACE, (_, res, ctx) => {
    return res(ctx.status(HTTP_STATUS_CODE.SUCCESS), ctx.json(spaceInfo));
  }),
  /**
   * 스페이스 메인페이지 (리스트)를 불러오는 api
   */
  rest.get(END_POINTS.SPACE_POST_LIST, (req, res, ctx) => {
    const referrer = req.url;
    const url = new URL(referrer);
    const page = url.searchParams.get('page')!;
    return res(
      ctx.status(HTTP_STATUS_CODE.SUCCESS),
      ctx.json({ ...spacePostList, page: Number(page) })
    );
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
  rest.patch(END_POINTS.SPACE, (_, res, ctx) => {
    return res(ctx.status(HTTP_STATUS_CODE.SUCCESS), ctx.json(spaceCreate));
  }),
  /**
   * 스페이스를 삭제하는 api
   */
  rest.delete(END_POINTS.SPACE, (_, res, ctx) => {
    return res(ctx.status(HTTP_STATUS_CODE.SUCCESS), ctx.json(successResponse));
  }),
  /**
   * 스페이스 목록들에 대한 정보를 불러오는 api
   */
  rest.get(END_POINTS.SPACE_LIST, (_, res, ctx) => {
    return res(ctx.status(HTTP_STATUS_CODE.SUCCESS), ctx.json(spaceList));
  }),
  /**
   * 스페이스를 입장하는 api (패스워드 입력)
   */
  rest.post(END_POINTS.SPACE_USER, (_, res, ctx) => {
    return res(ctx.status(HTTP_STATUS_CODE.SUCCESS), ctx.json(spaceCreate));
  }),
  /**
   * 스페이스의 회원 상태를 변경하는 api
   */
  rest.patch(END_POINTS.SPACE_USER, (_, res, ctx) => {
    return res(ctx.status(HTTP_STATUS_CODE.SUCCESS), ctx.json(successResponse));
  }),
  /**
   * 스페이스의 회원이 나가는 api
   */
  rest.delete(END_POINTS.SPACE_USER, (_, res, ctx) => {
    return res(ctx.status(HTTP_STATUS_CODE.SUCCESS), ctx.json(successResponse));
  }),
  /**
   * 태그 조회하는 api
   */
  rest.get(END_POINTS.SPACE_TAG, (_, res, ctx) => {
    return res(ctx.status(HTTP_STATUS_CODE.SUCCESS), ctx.json(SpaceTag));
  }),
  /**
   * 태그 추가하는 api
   */
  rest.post(END_POINTS.SPACE_TAG, (_, res, ctx) => {
    return res(ctx.status(HTTP_STATUS_CODE.SUCCESS), ctx.json(successResponse));
  }),
  /**
   * 태그 삭제하는 api
   */
  rest.delete(END_POINTS.SPACE_TAG, (_, res, ctx) => {
    return res(ctx.status(HTTP_STATUS_CODE.SUCCESS), ctx.json(successResponse));
  }),
];
