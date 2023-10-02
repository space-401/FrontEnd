import { OneSpaceType } from '@/types/space.type';
import { users_mock } from '../user/users.mock';

const spaceListMock: OneSpaceType[] = [
  {
    spaceId: 12301,
    imgUrl:
      'https://www.10wallpaper.com/wallpaper/medium/1411/SpongeBob_Cartoon_Characters_Design_Desktop_Wallpaper_medium.jpg',
    spaceTitle: '비키니시티 친목 동호회',
    userList: users_mock,
  },
  {
    spaceId: 31312,
    spaceTitle: '슈슈룬 덕질방',
    imgUrl: 'https://i.ytimg.com/vi/Z10UMD-0RbY/maxresdefault.jpg',
    userList: users_mock,
  },
  {
    spaceId: 312345,
    spaceTitle: '텔레토비 동산',
    imgUrl:
      'https://item.kakaocdn.net/do/98c5e593c3b9ae034da3f2087b3cf63e8f324a0b9c48f77dbce3a43bd11ce785',
    userList: users_mock,
  },
];
export default spaceListMock;
