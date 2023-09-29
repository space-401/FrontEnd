import { SelectSpacePropType, SpacePostType } from '@type/space.type';
import { users_mock } from '@mocks/data/user/users.mock';

export const spacePostMock: SpacePostType = {
  postId: 1,
  postTitle: '오늘도 내일도\n 개미는 뚠뚠 일을하네',
  usersList: users_mock,
  placeTitle: 'Baker St',
  placeTag: [
    { tagId: 1, tagTitle: '흥미진진한' },
    { tagId: 2, tagTitle: '긴장감이 넘치는' },
    { tagId: 3, tagTitle: '인기가 많은' },
    { tagId: 4, tagTitle: '한참 시간이 붐비는' },
    { tagId: 5, tagTitle: '흥미진진한' },
    { tagId: 6, tagTitle: '긴장감이 넘치는' },
    { tagId: 7, tagTitle: '인기가 많은' },
    { tagId: 8, tagTitle: '한참 시간이 붐비는' },
  ],
  mainImgUrl:
    'https://s3-alpha-sig.figma.com/img/5337/9618/c6819ebc891905be191c8fc51d7fba08?Expires=1694390400&Signature=CLYrMEEb-bGGDh7aiZEjWO6Ro0Hg9BJXY~WYxaqccDwMZKH5-BEf2te8ilYZmJPKvZGORzoDlYYWTmnS3wHa1NWgQj5KZl92LFPew2BQuii1B1wbfyWs8iOzHYONgw8DD1A1vj3YA~onF7y4U6AtM7ZT~-B-Ypnv1zwyEJZBM-xpNaOnLY2Ct5VtCjwie3GyvHt-bbhaA7c9KbKz93ejOPKPf1rreY-lYMnvTrcR1riYg5cdrORNSq6PZ1tK0blI3jCjZaM2s8rI74FYxaHmW6tBoLAtWyDMtBnVlgMjvpSNLYkzZQY62mzEIWauTYuIhoJHuTyYm8TC9LBuLQKoCw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  postUpdatedAt: '2023-09-01T16:38:38.520Z',
  postCreatedAt: '2023-09-01T16:38:38.520Z',
  position: { lat: 37.27943075229118, lng: 127.01763998406159 },
};

export const spaceInfoMock: SelectSpacePropType = {
  spaceId: 1,
  userList: users_mock,
  isLike: false,
  spaceTitle: 'KKIRI_SPACE',
};
