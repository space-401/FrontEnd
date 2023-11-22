import { userList } from '@mocks/data/common';
import { PostDetailType, PostResponseType } from '@type/post.type';
import { SpacePostType } from '@/types/space.type';

/**
 * 포스트 게시물들의 목 데이터
 */
export const postList: SpacePostType[] = [
  {
    postId: 1,
    postTitle:
      '카페에서 한잔 카페에서 한잔 카페에서 한잔 카페에서 한잔 카페에서 한잔 카페에서 한잔',
    usersList: userList,
    imgUrl: ['https://source.unsplash.com/random/300x300/?cat'],
    placeTitle: '집앞 공원',
    selectedTags: [
      { tagId: 1, tagTitle: '일상속 하루' },
      { tagId: 2, tagTitle: '커피 한잔의 여유' },
    ],
    postCreatedAt: String(new Date()),
    postUpdatedAt: String(new Date()),
    position: {
      lat: 37.27943075229118,
      lng: 127.01763998406159,
    },
  },
  {
    postId: 2,
    postTitle: '밤 거리를 걷다',
    usersList: userList,
    imgUrl: ['https://source.unsplash.com/random/300x300/?cat'],
    placeTitle: '엉망 전시회',
    selectedTags: [
      { tagId: 1, tagTitle: '일상속 하루' },
      { tagId: 2, tagTitle: '커피 한잔의 여유' },
    ],
    postCreatedAt: String(new Date()),
    postUpdatedAt: String(new Date()),
    position: {
      lat: 37.55915668706214,
      lng: 126.92536526611102,
    },
  },
  {
    postId: 3,
    postTitle: '어디보시개',
    usersList: userList,
    imgUrl: ['https://source.unsplash.com/random/300x300/?cat'],
    placeTitle: '우리집 베란다',
    selectedTags: [
      { tagId: 1, tagTitle: '일상속 하루' },
      { tagId: 2, tagTitle: '커피 한잔의 여유' },
    ],
    postCreatedAt: String(new Date()),
    postUpdatedAt: String(new Date()),
    position: {
      lat: 35.13854258261161,
      lng: 129.1014781294671,
    },
  },
  {
    postId: 4,
    postTitle: '드로잉 카페',
    usersList: userList,
    imgUrl: ['https://source.unsplash.com/random/300x300/?cat'],
    placeTitle: 'pa, pr!',
    selectedTags: [
      { tagId: 1, tagTitle: '일상속 하루' },
      { tagId: 2, tagTitle: '커피 한잔의 여유' },
    ],
    postCreatedAt: String(new Date()),
    postUpdatedAt: String(new Date()),
    position: {
      lat: 37.55518388656961,
      lng: 126.92926237742505,
    },
  },
  {
    postId: 5,
    postTitle: '카페에서 한잔',
    usersList: userList,
    imgUrl: ['https://source.unsplash.com/random/300x300/?cat'],
    placeTitle: '집앞 공원',
    selectedTags: [
      { tagId: 1, tagTitle: '일상속 하루' },
      { tagId: 2, tagTitle: '커피 한잔의 여유' },
    ],
    postCreatedAt: String(new Date()),
    postUpdatedAt: String(new Date()),
    position: {
      lat: 35.20618517638034,
      lng: 129.07944301057026,
    },
  },
  {
    postId: 6,
    postTitle: '밤 거리를 걷다',
    usersList: userList,
    imgUrl: ['https://source.unsplash.com/random/300x300/?cat'],
    placeTitle: '엉망 전시회',
    selectedTags: [
      { tagId: 1, tagTitle: '일상속 하루' },
      { tagId: 2, tagTitle: '커피 한잔의 여유' },
    ],
    postCreatedAt: String(new Date()),
    postUpdatedAt: String(new Date()),
    position: {
      lat: 37.561110808242056,
      lng: 126.9831268386891,
    },
  },
  {
    postId: 7,
    postTitle: '어디보시개',
    usersList: userList,
    imgUrl: ['https://source.unsplash.com/random/300x300/?cat'],
    placeTitle: '우리집 베란다',
    selectedTags: [
      { tagId: 1, tagTitle: '일상속 하루' },
      { tagId: 2, tagTitle: '커피 한잔의 여유' },
    ],
    postCreatedAt: String(new Date()),
    postUpdatedAt: String(new Date()),
    position: {
      lat: 37.86187129655063,
      lng: 127.7410250820423,
    },
  },
  {
    postId: 8,
    postTitle: '드로잉 카페',
    usersList: userList,
    imgUrl: ['https://source.unsplash.com/random/300x300/?cat'],
    placeTitle: 'pa, pr!',
    selectedTags: [
      { tagId: 1, tagTitle: '일상속 하루' },
      { tagId: 2, tagTitle: '커피 한잔의 여유' },
    ],
    postCreatedAt: String(new Date()),
    postUpdatedAt: String(new Date()),
    position: {
      lat: 37.47160156778542,
      lng: 126.62818064142286,
    },
  },
  {
    postId: 9,
    postTitle: '카페에서 한잔',
    usersList: userList,
    imgUrl: ['https://source.unsplash.com/random/300x300/?cat'],
    placeTitle: '집앞 공원',
    selectedTags: [
      { tagId: 1, tagTitle: '일상속 하루' },
      { tagId: 2, tagTitle: '커피 한잔의 여유' },
    ],
    postCreatedAt: String(new Date()),
    postUpdatedAt: String(new Date()),
    position: {
      lat: 37.27943075229118,
      lng: 127.01763998406159,
    },
  },
  {
    postId: 10,
    postTitle: '밤 거리를 걷다',
    usersList: userList,
    imgUrl: ['https://source.unsplash.com/random/300x300/?cat'],
    placeTitle: '엉망 전시회',
    selectedTags: [
      { tagId: 1, tagTitle: '일상속 하루' },
      { tagId: 2, tagTitle: '커피 한잔의 여유' },
    ],
    postCreatedAt: String(new Date()),
    postUpdatedAt: String(new Date()),
    position: {
      lat: 37.55915668706214,
      lng: 126.92536526611102,
    },
  },
  {
    postId: 11,
    postTitle: '어디보시개',
    usersList: userList,
    imgUrl: ['https://source.unsplash.com/random/300x300/?cat'],
    placeTitle: '우리집 베란다',
    selectedTags: [
      { tagId: 1, tagTitle: '일상속 하루' },
      { tagId: 2, tagTitle: '커피 한잔의 여유' },
    ],
    postCreatedAt: String(new Date()),
    postUpdatedAt: String(new Date()),
    position: {
      lat: 35.13854258261161,
      lng: 129.1014781294671,
    },
  },
  {
    postId: 12,
    postTitle: '드로잉 카페',
    usersList: userList,
    imgUrl: ['https://source.unsplash.com/random/300x300/?cat'],
    placeTitle: 'pa, pr!',
    selectedTags: [
      { tagId: 1, tagTitle: '일상속 하루' },
      { tagId: 2, tagTitle: '커피 한잔의 여유' },
    ],
    postCreatedAt: String(new Date()),
    postUpdatedAt: String(new Date()),
    position: {
      lat: 37.47160156778542,
      lng: 126.62818064142286,
    },
  },
  {
    postId: 13,
    postTitle: '카페에서 한잔',
    usersList: userList,
    imgUrl: ['https://source.unsplash.com/random/300x300/?cat'],
    placeTitle: '집앞 공원',
    selectedTags: [
      { tagId: 1, tagTitle: '일상속 하루' },
      { tagId: 2, tagTitle: '커피 한잔의 여유' },
    ],
    postCreatedAt: String(new Date()),
    postUpdatedAt: String(new Date()),
    position: {
      lat: 35.20618517638034,
      lng: 129.07944301057026,
    },
  },
  {
    postId: 14,
    postTitle: '밤 거리를 걷다',
    usersList: userList,
    imgUrl: ['https://source.unsplash.com/random/300x300/?cat'],
    placeTitle: '엉망 전시회',
    selectedTags: [
      { tagId: 1, tagTitle: '일상속 하루' },
      { tagId: 2, tagTitle: '커피 한잔의 여유' },
    ],
    postCreatedAt: String(new Date()),
    postUpdatedAt: String(new Date()),
    position: {
      lat: 37.561110808242056,
      lng: 126.9831268386891,
    },
  },
  {
    postId: 15,
    postTitle: '어디보시개',
    usersList: userList,
    imgUrl: ['https://source.unsplash.com/random/300x300/?cat'],
    placeTitle: '우리집 베란다',
    selectedTags: [
      { tagId: 1, tagTitle: '일상속 하루' },
      { tagId: 2, tagTitle: '커피 한잔의 여유' },
    ],
    postCreatedAt: String(new Date()),
    postUpdatedAt: String(new Date()),
    position: {
      lat: 37.86187129655063,
      lng: 127.7410250820423,
    },
  },
  {
    postId: 16,
    postTitle: '드로잉 카페',
    usersList: userList,
    imgUrl: ['https://source.unsplash.com/random/300x300/?cat'],
    placeTitle: 'pa, pr!',
    selectedTags: [
      { tagId: 1, tagTitle: '일상속 하루' },
      { tagId: 2, tagTitle: '커피 한잔의 여유' },
    ],
    postCreatedAt: String(new Date()),
    postUpdatedAt: String(new Date()),
    position: {
      lat: 37.47160156778542,
      lng: 126.62818064142286,
    },
  },
];
/**
 * 포스트 게시물의 상세 목 데이터
 */
export const postDetail: PostDetailType = {
  spaceId: 1,
  isMine: false,
  position: {
    lat: 37.27943075229118,
    lng: 127.01763998406159,
  },
  postDescription:
    '메론소다가 너어어무 먹고싶어서 엄선해서 9714!\n' +
    '완전 무채색의 매장인테리어에 쨍한 메론소 다가 일단 이뻐서 흡족\n' +
    '크 크 그리고 귀여워 서 레오 쿠키도 하나 시켰다...쫀킹',
  postCreatedAt: String(new Date()),
  postUpdatedAt: String(new Date()),
  selectedUsers: [
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
  ],
  userList: userList,
  selectedTags: [
    { tagId: 1, tagTitle: '흥미진진한' },
    { tagId: 2, tagTitle: '긴장감이 넘치는' },
  ],
  imgUrl: [
    'https://source.unsplash.com/random/1000x1000/?cat',
    'https://source.unsplash.com/random/1000x1000/?cat',
    'https://source.unsplash.com/random/1000x1000/?cat',
  ],
  postTitle: '전국 카페투어',
  placeTitle: '둔촌동 커피맛집',
  commentCount: 13,
  isBookMark: true,
  date: {
    startDate: '2023-01-01',
    endDate: '2023-01-03',
  },
};

/**
 * 포스트를 작성 혹은 수정하고 나서 목 데이터
 */
export const postCreate: PostResponseType = {
  message: 'success',
  postId: 20,
};
