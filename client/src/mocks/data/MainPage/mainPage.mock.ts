import { users_mock } from '@mocks/data/user/users.mock';
import { spacePostMock } from '@mocks/data/FlipCard/spaceInfo.mock';
import { MainPageType } from '@type/main.type';
import mockList from '@mocks/data/PostList/postList.mock';

const MainPageMock: MainPageType = {
  isAdmin: false,
  spaceInfo: {
    title: 'SPACE 401',
    description:
      '사면·감형 및 복권에 관한 사항은 법률로 정한다. 국정의 중요한 사항에 관한 대통령의 자문에 응하기 위하여 국가원로로 구성되는 국가원로자문회의를 둘 수 있다.어쩌구어쩌구어쩌구어쩌구',
    users: users_mock,
    img_url:
      'https://s3-alpha-sig.figma.com/img/69e5/7cd2/f6e082e1aa8e1ca7431590dfbdc116d0?Expires=1694390400&Signature=MYc2CXpsj4~59Y0mHRfwcGD-5qi-xOJuOVVJlzNzVORLqdG8Y1w-zaXVQ4k1~uN6jpy2UsAzX9BNaeGoDkBwdMo8c3KHVWYHbqMbAjmZ3eYhbrFCAxBleRQpWTSSw2sTbk~jRYViGNKBUflaxeXe2Wx316fczzy7XypApZ6kQC3deWhCUGpeJqBuDNEGe-fmQVAc4ge49pP~S74mBeydVlwss~jv3-MtgdjFxP5yNKPx533leCf5UdP8wjND7ipTfiUUE~CpULED7mdO3NQzcdui55piKmE8rfBCgCtSzLMFb6390k6Kl8fTslCvy9k22Zn0RHNEHSwvXMLdn3avpA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  },
  postList: mockList,
  tagList: spacePostMock.place_tag,
  total: 140,
  page: 1,
};

export default MainPageMock;
