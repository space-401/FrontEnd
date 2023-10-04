import { selectType } from './main.type';

export type UserType = {
  userId: number;
  userName: string;
  imgUrl?: string;
};

export type TagType = {
  tagId: number;
  tagTitle: string;
};

export type DateInfoType = {
  startDate: string | null;
  endDate: string | null;
};

//포스트 타입
export type PostDetailType = {
  postId: number;
  isMine: boolean;
  postTitle: string;
  postDescription: string;
  placeTitle: string;
  placeTag: TagType[];
  location: {
    lat: number;
    lng: number;
  };
  postCreatedAt: string;
  postUpdatedAt: string;
  date: DateInfoType;
  commentCount: number;
  isBookmark: boolean;
  tagUsers: selectType[];
  userList: selectType[];
  tagList: TagType[];
  imgs: string[]; //나중에 File만 가능하게 바꿀 것, 목데이터 때문
};

//포스트 생성 페이지에서는 tags가 추가적으로 필요하다.
