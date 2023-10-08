import type { OneSpaceType, SpaceInfo } from '@type/space.type';
import { postList } from '@mocks/data/post.mock';
import { ApiResponseType } from '@type/response.type';
import { tagList, userList } from '@mocks/data/common';

/**
 * 스페이스 정보에 대한 목 데이터
 */
export const spaceInfo: SpaceInfo = {
  isFirst: false,
  isAdmin: true,
  title: 'SPACE 401',
  description:
    '사면·감형 및 복권에 관한 사항은 법률로 정한다. 국정의 중요한 사항에 관한 대통령의 자문에 응하기 위하여 국가원로로 구성되는 국가원로자문회의를 둘 수 있다.어쩌구어쩌구어쩌구어쩌구',
  userList: userList,
  tagList: tagList,
  spacePassword: '12345',
  imgUrl:
    'https://s3-alpha-sig.figma.com/img/69e5/7cd2/f6e082e1aa8e1ca7431590dfbdc116d0?Expires=1694390400&Signature=MYc2CXpsj4~59Y0mHRfwcGD-5qi-xOJuOVVJlzNzVORLqdG8Y1w-zaXVQ4k1~uN6jpy2UsAzX9BNaeGoDkBwdMo8c3KHVWYHbqMbAjmZ3eYhbrFCAxBleRQpWTSSw2sTbk~jRYViGNKBUflaxeXe2Wx316fczzy7XypApZ6kQC3deWhCUGpeJqBuDNEGe-fmQVAc4ge49pP~S74mBeydVlwss~jv3-MtgdjFxP5yNKPx533leCf5UdP8wjND7ipTfiUUE~CpULED7mdO3NQzcdui55piKmE8rfBCgCtSzLMFb6390k6Kl8fTslCvy9k22Zn0RHNEHSwvXMLdn3avpA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
};
/**
 * 스페이스 목록들에 대한 목 데이터
 */
export const spaceList: OneSpaceType[] = [
  {
    spaceId: 1,
    spaceTitle: '카페좋아',
    imgUrl:
      'https://www.google.com/search?q=%EC%B9%B4%ED%8E%98&tbm=isch&ved=2ahUKEwiGhej4rdCBAxUEdt4KHYvPDfkQ2-cCegQIABAA&oq=%EC%B9%B4%ED%8E%98&gs_lcp=CgNpbWcQAzIICAAQgAQQsQMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BAgjECc6BwgjEOoCECc6BAgAEANQ2QRY2Qtg_AxoAnAAeACAAXqIAZsFkgEDMC42mAEAoAEBqgELZ3dzLXdpei1pbWewAQrAAQE&sclient=img&ei=OgsXZYaAMYTs-QaLn7fIDw&bih=566&biw=707&rlz=1C5CHFA_enKR1048KR1048#imgrc=F4bk37qV7BCk3M',
    userList: userList,
  },
  {
    spaceId: 2,
    spaceTitle: '고양이를 사랑하는 모임',
    imgUrl:
      'https://health.chosun.com/site/data/img_dir/2023/07/17/2023071701753_0.jpg',
    userList: userList,
  },
  {
    spaceId: 3,
    spaceTitle: '404',
    imgUrl:
      'https://img.freepik.com/premium-vector/big-red-heart-isolated-on-white-background-vector-illustration_260787-631.jpg',
    userList: userList,
  },
  {
    spaceId: 4,
    spaceTitle: 'music lovers',
    imgUrl:
      'https://www.google.com/search?q=%EC%B9%B4%ED%8E%98&tbm=isch&ved=2ahUKEwiGhej4rdCBAxUEdt4KHYvPDfkQ2-cCegQIABAA&oq=%EC%B9%B4%ED%8E%98&gs_lcp=CgNpbWcQAzIICAAQgAQQsQMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BAgjECc6BwgjEOoCECc6BAgAEANQ2QRY2Qtg_AxoAnAAeACAAXqIAZsFkgEDMC42mAEAoAEBqgELZ3dzLXdpei1pbWewAQrAAQE&sclient=img&ei=OgsXZYaAMYTs-QaLn7fIDw&bih=566&biw=707&rlz=1C5CHFA_enKR1048KR1048#imgrc=F4bk37qV7BCk3M',
    userList: userList,
  },
];
/**
 * 스페이스의 메인 페이지 (포스트)를 불러온 목 데이터
 */
export const spacePostList = {
  postList: postList,
  page: 2,
  total: 330,
  itemLength: 12,
};
/**
 * 스페이르를 생성한 뒤 불러오는 목 데이터
 */
export const spaceCreate: ApiResponseType & { spaceId: number } = {
  message: 'success',
  spaceId: 20,
};
