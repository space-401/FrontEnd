import { rest, RestHandler } from 'msw';

import { END_POINTS, HTTP_STATUS_CODE } from '@constants/api';
import {
  accountInfo,
  bookMarkList,
  myCommentListAndInfo,
  myPostList,
} from '@mocks/data/user.mock';

export const userHandlers: RestHandler[] = [
  /**
   * 로그인하는 api
   */
  rest.get(END_POINTS.LOGIN, (_, res, ctx) => {
    return res(ctx.status(HTTP_STATUS_CODE.SUCCESS), ctx.json(accountInfo));
  }),
  /**
   * 로그아웃하는 api
   */
  rest.get(END_POINTS.LOGOUT, (_, res, ctx) => {
    return res(ctx.status(HTTP_STATUS_CODE.SUCCESS), ctx.json(accountInfo));
  }),
  /**
   * 회원가입하는 api
   */
  rest.post(END_POINTS.USER, (_, res, ctx) => {
    return res(ctx.status(HTTP_STATUS_CODE.SUCCESS), ctx.json(accountInfo));
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
  rest.get(END_POINTS.MY_POST_LIST('page'), (_, res, ctx) => {
    return res(ctx.status(HTTP_STATUS_CODE.SUCCESS), ctx.json(myPostList));
  }),
  /**
   * 내가 작성한 댓글 리스트들을 불러오는 api
   */
  rest.get(END_POINTS.MY_COMMENT_LIST('page'), (_, res, ctx) => {
    return res(
      ctx.status(HTTP_STATUS_CODE.SUCCESS),
      ctx.json(myCommentListAndInfo)
    );
  }),
  /**
   * 내가 북마크한 포스트 게시물들을 불러오는 api
   */
  rest.get(END_POINTS.MY_BOOK_MARK_LIST('page'), (_, res, ctx) => {
    return res(ctx.status(HTTP_STATUS_CODE.SUCCESS), ctx.json(bookMarkList));
  }),
];
