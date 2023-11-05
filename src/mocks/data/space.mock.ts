import type {OneSpaceType, SpaceInfoType, SpaceResponseType,} from '@type/space.type';
import {postList} from '@mocks/data/post.mock';
import {tagList, userList} from '@mocks/data/common';

/**
 * 스페이스 정보에 대한 목 데이터
 */
export const spaceInfo: SpaceInfoType = {
  isFirst: true,
  isAdmin: true,
  spaceTitle: 'SPACE 401',
  spaceDescription:
    '사면·감형 및 복권에 관한 사항은 법률로 정한다. 국정의 중요한 사항에 관한 대통령의 자문에 응하기 위하여 국가원로로 구성되는 국가원로자문회의를 둘 수 있다.어쩌구어쩌구어쩌구어쩌구',
  userList: userList,
  tagList: tagList,
  spacePw: '12345',
  imgUrl: 'https://source.unsplash.com/random/300x300/?cat',
};
/**
 * 스페이스 목록들에 대한 목 데이터
 */
export const spaceList: OneSpaceType[] = [
  {
    spaceId: 1,
    spaceTitle: '카페좋아',
    imgUrl: 'https://source.unsplash.com/random/300x300/?cat',
    userList: userList,
  },
  {
    spaceId: 2,
    spaceTitle: '고양이를 사랑하는 모임',
    imgUrl: 'https://source.unsplash.com/random/300x300/?cat',
    userList: userList,
  },
  {
    spaceId: 3,
    spaceTitle: '404',
    imgUrl: 'https://source.unsplash.com/random/300x300/?cat',
    userList: userList,
  },
  {
    spaceId: 4,
    spaceTitle: 'music lovers',
    imgUrl: 'https://source.unsplash.com/random/300x300/?cat',
    userList: userList,
  },
];
/**
 * 스페이스의 메인 페이지 (포스트)를 불러온 목 데이터
 */
export const spacePostList = {
  postList: postList,
  page: 1,
  total: 330,
  itemLength: 12,
};
/**
 * 스페이르를 생성한 뒤 불러오는 목 데이터
 */
export const spaceCreate: SpaceResponseType = {
  message: 'success',
  spaceId: 20,
};

export const SpaceTag = {
  tagList: tagList,
};
