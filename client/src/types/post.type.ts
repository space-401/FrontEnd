import type { SpacePostType, OneSpaceType } from '@type/space.type';
import { ApiResponseType } from '@type/response.type';

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
  position: {
    lat: number;
    lng: number;
  };
  postCreatedAt: string;
  postUpdatedAt: string;
  date: DateInfoType;
  commentCount: number;
  isBookmark: boolean;
  selectedUsers: UserType[];
  selectedTags: TagType[];
  userList: UserType[];
  tagList: TagType[];
  imgUrl: string[]; //나중에 File만 가능하게 바꿀 것, 목데이터 때문
};

//포스트 생성 페이지에서는 tags가 추가적으로 필요하다.
export type FlipCardSize = 'small' | 'medium' | 'big';

export type PostInfoBackPropsType = {
  item: SpacePostType;
  size: FlipCardSize;
};

export type SpaceInfoBackPropsType = {
  item: OneSpaceType;
  size: FlipCardSize;
};

export type FlipType = {
  /**
   * 해당 이미지의 주소를 넣어주세요
   */
  imgUrl: string;
  onClick: () => void;
  borderRadius?: string;
};

export type PostResponseType = ApiResponseType & { postId: number };
