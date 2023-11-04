import type { OneSpaceType, SpacePostType } from '@type/space.type';
import { ApiResponseType } from '@type/response.type';

export type UserType = {
  userId: number;
  userName: string;
  imgUrl?: string;
  isAdmin: boolean;
};

export type TagType = {
  tagId: number;
  tagTitle: string;
};

export type DateInfoType = {
  startDate: string;
  endDate: string;
};

//포스트 타입
export type PostDetailType = {
  spaceId: number;
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
  isBookMark: boolean;
  userList: UserType[];
  selectedUsers: UserType[];
  selectedTags: TagType[];
  imgUrl: string[];
};

//포스트 생성 + 수정 타입
export type CreatePostType = {
  spaceId: number;
  postTitle: string;
  postContent: string;
  people: number[];
  tags: number[];
  placeTitle: string;
  postLocationKeyword: string;
  postLocationLng: number;
  postLocationLat: number;
  imgs: File[];
  postBeginDate: string;
  postEndDate: string;
};

export type CreatePostTypeWithSpaceId = CreatePostType & {
  spaceId: number;
};

//포스트 생성 페이지에서는 tags가 추가적으로 필요하다.
export type FlipCardSize = 'small' | 'medium' | 'big';

export type PostInfoBackPropsType = {
  item: SpacePostType;
  isBig: boolean;
};

export type SpaceInfoBackPropsType = {
  item: OneSpaceType;
  isBig: boolean;
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
