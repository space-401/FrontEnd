import { AccountDataType } from '@pages/MyPage/MyBody/components/AccountManagement';
import postListMock from '@mocks/data/PostList/postList.mock';
import commentListMock from '@mocks/data/MyPage/commentListMock';

export const AccountInfoMock: AccountDataType = {
  loginState: '카카오톡',
  name: '김은주',
  email: 'qwer@kakao.com',
};

export const bookMarkListMock = {
  bookMarkList: postListMock,
  page: 2,
  total: 40,
  ItemLength: 12,
};

export const myPostListMock = {
  myPostList: postListMock,
  page: 2,
  total: 40,
  ItemLength: 12,
};

export const myCommentListMock = {
  myCommentList: commentListMock,
  page: 3,
  total: 30,
  ItemLength: 10,
};
