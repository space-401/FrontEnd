import postListMock from '@mocks/data/PostList/postList.mock';
import commentListMock from '@mocks/data/MyPage/commentListMock';
import {
  AccountDataType,
  BookMarkListType,
  MyCommentListType,
  MyPostListType,
} from '@type/user.type';

export const accountInfoMock: AccountDataType = {
  loginState: 'kakao',
  name: '김은주',
  email: 'qwer@kakao.com',
};

export const bookMarkListMock: BookMarkListType = {
  bookMarkList: postListMock,
  page: 2,
  total: 40,
  itemLength: 12,
};

export const myPostListMock: MyPostListType = {
  myPostList: postListMock,
  page: 2,
  total: 40,
  itemLength: 12,
};

export const myCommentListMock: MyCommentListType = {
  myCommentList: commentListMock,
  page: 3,
  total: 30,
  itemLength: 10,
};
