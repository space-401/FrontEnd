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
  spaceTitle: string;
  spaceDescription: string;
  imgUrl: string;
  userList: UserType[];
  tagList: TagType[];
  isAdmin: boolean;
  isFirst: boolean;
  spacePw: string;
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
  selectedTags: TagType[];
  postCreatedAt: string;
  postUpdatedAt: string;
  usersList: UserType[];
  imgUrl: string[];
  position: { lat: number; lng: number };
};

export type SelectSpacePropType = {
  spaceId: number;
  spaceTitle: string;
  isLike: boolean;
  userList: UserType[];
};

export type MyCommentType = {
  postId: number;
  postTitle: string;
  postContent: string;
  postCreateDate: string;
  spaceTitle: string;
  mainImgUrl: string;
  commentId: number;
  commentContent: string;
  commentCreateDate: string;
};

export type CreateSpaceType = {
  spaceTitle: string;
  spaceDescription: string;
  imgUrl: File;
  spacePassword: number;
};

export type UpdateSpaceType = CreateSpaceType & {
  spaceId: number;
};

export type SpaceResponseType = {
  spaceId: number;
  message: string;
};
