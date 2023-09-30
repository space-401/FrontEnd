import { TagType, UserType } from '@type/post.type';

export type HeaderType = {
  spaceInfo: OneSpaceType[];
  alarmMessages: AlarmType[];
};

export type OneSpaceType = {
  spaceId: number;
  spaceTitle: string;
  imgUrl: string;
  userList: UserType[];
};

export type SpaceInfo = {
  title: string;
  description: string;
  imgUrl: string;
  userList: UserType[];
  tagList: TagType[];
  isAdmin: boolean;
};

export type AlarmType = {
  spaceId: string;
  isNew: boolean;
  user: UserType;
  imgUrl: string;
  create_at: string;
  alarmMessage: string;
};

export type SpacePostType = {
  postId: number;
  postTitle: string;
  placeTitle: string;
  placeTag: TagType[];
  postCreatedAt: string;
  postUpdatedAt: string;
  usersList: UserType[];
  mainImgUrl: string;
  subImgUrl?: string[];
  position: { lat: number; lng: number };
};

export type PostDetailType = {
  isMine: boolean;
  postId: number;
  postTitle: string;
  postDescription: string;
  placeTitle: string;
  placeTag: TagType[];
  postCreatedAt: string;
  postUpdatedAt: string;
  tagUsers: UserType[];
  userList: UserType[];
  mainImgUrl: string;
  subImgUrl: string[];
  position: { lat: number; lng: number };
  commentCount: number;
  isBookmark: boolean;
};

export type SelectSpacePropType = {
  spaceId: number;
  spaceTitle: string;
  isLike: boolean;
  userList: UserType[];
};

export type CommentType = {
  id: number;
  // 참조하고 있는 아이디가 있는지 없으면 depth 0 댓글
  refId: number;
  // 댓글 작성자의 정보
  writer: {
    id: string;
    // 토큰키 또는 소켓 아이디
    memberKey: string;
    nick: string;
    url: string;
  };
  replyMember?: {
    id: string;
    // 토큰키 또는 소켓 아이디
    memberKey: string;
    nick: string;
  };
  content: string;
  createDate: string;
  updateDate: string;
  // 이 댓글은 참조중인가?
  isRef: boolean;
  // 이 댓글의 작성자인가?
  isMyComment: boolean;
};

export type MyCommentType = {
  id: number;
  postId: number;
  spaceTitle: string;
  createDate: string;
  writer: {
    nick: string;
    url: string;
  };
  content: string;
  mainImgUrl: string;
};
