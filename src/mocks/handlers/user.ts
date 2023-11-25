import { rest, RestHandler } from 'msw';

import { END_POINTS, HTTP_STATUS_CODE, PATH } from '@/constants';
import {
  accountInfo,
  bookMarkList,
  loginResponse,
  myCommentListAndInfo,
  myPostList,
  successResponse,
} from '@/mocks/data';

export const userHandlers: RestHandler[] = [
  /**
   * 로그인하는 api
   */
  rest.get(PATH.SOCIAL_LOGIN(':socialType'), (_, res, ctx) => {
    return res(ctx.status(HTTP_STATUS_CODE.SUCCESS), ctx.json(loginResponse));
  }),
  /**
   * 로그아웃하는 api
   */
  rest.post(END_POINTS.LOGOUT, (_, res, ctx) => {
    return res(ctx.status(HTTP_STATUS_CODE.SUCCESS), ctx.json(successResponse));
  }),
  /**
   * 회원탈퇴를 하는 api
   */
  rest.delete(END_POINTS.USER, (_, res, ctx) => {
    return res(ctx.status(HTTP_STATUS_CODE.SUCCESS), ctx.json(accountInfo));
  }),
  /**
   * access token을 재발급하는 api
   */
  rest.get(END_POINTS.TOKEN, (_, res, ctx) => {
    return res(ctx.status(HTTP_STATUS_CODE.SUCCESS), ctx.json(loginResponse));
  }),
  /**
   * 사용자 정보를 불러오는 api
   */
  rest.get(END_POINTS.USERINFO, (_, res, ctx) => {
    return res(ctx.status(HTTP_STATUS_CODE.SUCCESS), ctx.json(accountInfo));
  }),
  /**
   * 내가 작성한 포스트 게시물들을 불러오는 api
   */
  rest.get(END_POINTS.MY_POST_LIST, (_, res, ctx) => {
    return res(ctx.status(HTTP_STATUS_CODE.SUCCESS), ctx.json(myPostList));
  }),
  /**
   * 내가 작성한 댓글 리스트들을 불러오는 api
   */
  rest.get(END_POINTS.MY_COMMENT_LIST, (_, res, ctx) => {
    return res(
      ctx.status(HTTP_STATUS_CODE.SUCCESS),
      ctx.json(myCommentListAndInfo)
    );
  }),
  /**
   * 내가 북마크한 포스트 게시물들을 불러오는 api
   */
  rest.get(END_POINTS.MY_BOOK_MARK_LIST, (_, res, ctx) => {
    return res(ctx.status(HTTP_STATUS_CODE.SUCCESS), ctx.json(bookMarkList));
  }),
];
