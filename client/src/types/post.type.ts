import { selectType } from './main.type';
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

export type PostType = {
  title: string;
  content: string;
  people: selectType[];
  tag: selectType[];
  place: {
    content: string;
    position: {
      lng: string;
      lat: string;
    };
  };
  imgs: File[];
  date: {
    startDate: Date | null;
    endDate: Date | null;
  };
};

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
