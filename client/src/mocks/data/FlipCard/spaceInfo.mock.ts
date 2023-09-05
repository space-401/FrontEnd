import {SelectSpacePropType, SpacePostType} from '@type/space.type';
import {users_mock} from '@mocks/data/user/users.mock';

export const spacePostMock: SpacePostType = {
    post_id: 1,
    post_title: '오늘도 내일도\n 개미는 뚠뚠 일을하네',
    users: users_mock,
    place_title: 'Baker St',
    place_tag: [
        {tag_id: 1, tag_title: '흥미진진한'},
        {tag_id: 2, tag_title: '긴장감이 넘치는'},
        {tag_id: 3, tag_title: '인기가 많은'},
        {tag_id: 4, tag_title: '한참 시간이 붐비는'},
        {tag_id: 5, tag_title: '흥미진진한'},
        {tag_id: 6, tag_title: '긴장감이 넘치는'},
        {tag_id: 7, tag_title: '인기가 많은'},
        {tag_id: 8, tag_title: '한참 시간이 붐비는'}
    ],
    main_img_url:
        'https://s3-alpha-sig.figma.com/img/5337/9618/c6819ebc891905be191c8fc51d7fba08?Expires=1694390400&Signature=CLYrMEEb-bGGDh7aiZEjWO6Ro0Hg9BJXY~WYxaqccDwMZKH5-BEf2te8ilYZmJPKvZGORzoDlYYWTmnS3wHa1NWgQj5KZl92LFPew2BQuii1B1wbfyWs8iOzHYONgw8DD1A1vj3YA~onF7y4U6AtM7ZT~-B-Ypnv1zwyEJZBM-xpNaOnLY2Ct5VtCjwie3GyvHt-bbhaA7c9KbKz93ejOPKPf1rreY-lYMnvTrcR1riYg5cdrORNSq6PZ1tK0blI3jCjZaM2s8rI74FYxaHmW6tBoLAtWyDMtBnVlgMjvpSNLYkzZQY62mzEIWauTYuIhoJHuTyYm8TC9LBuLQKoCw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    place_create_at: new Date('2023-09-01T16:38:38.520Z'),
};

export const spaceInfoMock: SelectSpacePropType = {
    space_id: 1,
    user: users_mock,
    isLike: false,
    space_title: 'KKIRI_SPACE',
};
