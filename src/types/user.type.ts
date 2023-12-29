import { MyCommentType, UserType } from '@/types';

export type AccountDataType = {
  loginState: SocialType;
  name: string;
  email: string;
};

export type SocialType = 'kakao' | 'naver';

type OneMyBookMarkType = {
  postId: number;
  postTitle: string;
  postCommentCount: number;
  postCreatedAt: string;
  postWriterName: string;
};

export type BookMarkListType = {
  bookMarkList: OneMyBookMarkType[];
  page: number;
  total: number;
  itemLength: number;
};

export type OneMyPostType = {
  spaceId: number;
  postId: number;
  postTitle: string;
  postCreatedAt: string;
  postCommentCount: number;
  selectedUsers: UserType[];
};

export type MyPostListType = {
  myPostList: OneMyPostType[];
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

export type UserTokenType = {
  accessToken: string;
  refreshToken: string;
};

export type UserUnknownTokenType = UserTokenType | unknown;
