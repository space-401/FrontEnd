import { postList } from '../post.mock';
import {
  AccountDataType,
  BookMarkListType,
  MyPostListType,
} from '@type/user.type';

export const accountInfoMock: AccountDataType = {
  loginState: 'kakao',
  name: '김은주',
  email: 'qwer@kakao.com',
};

export const bookMarkListMock: BookMarkListType = {
  bookMarkList: postList,
  page: 2,
  total: 40,
  itemLength: 12,
};

export const myPostListMock: MyPostListType = {
  myPostList: postList,
  page: 2,
  total: 40,
  itemLength: 12,
};
