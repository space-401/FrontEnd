import { MyCommentType, SpacePostType } from '@type/space.type';

export type AccountDataType = {
  loginState: '카카오톡' | '네이버' | 'Google';
  name: string;
  email: string;
};

export type BookMarkListType = {
  bookMarkList: SpacePostType[];
  page: number;
  total: number;
  itemLength: number;
};

export type MyPostListType = {
  myPostList: SpacePostType[];
  page: number;
  total: number;
  itemLength: number;
};

export type MyCommentListType = {
  myCommentList: MyCommentType[];
  page: number;
  total: number;
  itemLength: number;
};
