import type { UserType } from '@/types';

export const userList: UserType[] = [
  {
    userId: 147394546,
    userName: '짱구',
    imgUrl: 'https://source.unsplash.com/random/300x300/?cat',
    isAdmin: false,
  },
  {
    userId: 148263681,
    userName: '짱아',
    imgUrl: 'https://source.unsplash.com/random/300x300/?cat',
    isAdmin: false,
  },
  {
    userId: 3,
    userName: '철수',
    imgUrl: 'https://source.unsplash.com/random/300x300/?cat',
    isAdmin: false,
  },
  {
    userId: 4,
    userName: '유리',
    imgUrl: 'https://source.unsplash.com/random/300x300/?cat',
    isAdmin: false,
  },
  {
    userId: 5,
    userName: '훈이',
    imgUrl: 'https://source.unsplash.com/random/300x300/?cat',
    isAdmin: false,
  },
  {
    userId: 6,
    userName: '맹구',
    imgUrl: 'https://source.unsplash.com/random/300x300/?cat',
    isAdmin: false,
  },
  {
    userId: 7,
    userName: '수지',
    imgUrl: 'https://source.unsplash.com/random/300x300/?cat',
    isAdmin: false,
  },
  {
    userId: 8,
    userName: '액션가면',
    imgUrl: 'https://source.unsplash.com/random/300x300/?cat',
    isAdmin: false,
  },
];
/**
 * 태그 정보에 대한 목 데이터
 */
type TagType = {
  tagId: number;
  tagTitle: string;
};
export const tagList: TagType[] = [
  { tagId: 1, tagTitle: '흥미진진한' },
  { tagId: 2, tagTitle: '긴장감이 넘치는' },
  { tagId: 3, tagTitle: '인기가 많은' },
  { tagId: 4, tagTitle: '한참 시간이 붐비는' },
  { tagId: 5, tagTitle: '흥미진진한' },
  { tagId: 6, tagTitle: '긴장감이 넘치는' },
  { tagId: 7, tagTitle: '인기가 많은' },
  { tagId: 8, tagTitle: '한참 시간이 붐비는' },
];
