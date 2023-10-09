import { MyCommentType } from '@type/space.type';
import { UserType } from '@type/post.type';

export type AccountDataType = {
  loginState: 'kakao' | 'naver' | 'google';
  name: string;
  email: string;
};

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
