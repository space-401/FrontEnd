import { SelectSpacePropType, SpacePostType } from '@type/space.type';
import { users_mock } from '@mocks/users.mock';

export const spacePostMock: SpacePostType = {
  post_title: '오늘도 내일도\n 개미는 뚠뚠 일을하네',
  users: users_mock,
  place_title: 'Baker St',
  place_tag: [
    { tag_id: 1, tag_title: '흥미진진한' },
    { tag_id: 2, tag_title: '긴장감이 넘치는' },
    { tag_id: 3, tag_title: '인기가 많은' },
  ],
  place_create_at: new Date('2023-09-01T16:38:38.520Z'),
};

export const spaceInfoMock: SelectSpacePropType = {
  user: users_mock,
  isLike: false,
  space_title: 'KKIRI_SPACE',
};
