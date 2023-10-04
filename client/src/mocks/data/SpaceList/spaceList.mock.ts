import { OneSpaceType } from '@/types/space.type';
import { users_mock } from '../user/users.mock';

const spaceListMock: OneSpaceType[] = [
  {
    spaceId: 1,
    spaceTitle: '카페좋아',
    imgUrl:
      'https://www.google.com/search?q=%EC%B9%B4%ED%8E%98&tbm=isch&ved=2ahUKEwiGhej4rdCBAxUEdt4KHYvPDfkQ2-cCegQIABAA&oq=%EC%B9%B4%ED%8E%98&gs_lcp=CgNpbWcQAzIICAAQgAQQsQMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BAgjECc6BwgjEOoCECc6BAgAEANQ2QRY2Qtg_AxoAnAAeACAAXqIAZsFkgEDMC42mAEAoAEBqgELZ3dzLXdpei1pbWewAQrAAQE&sclient=img&ei=OgsXZYaAMYTs-QaLn7fIDw&bih=566&biw=707&rlz=1C5CHFA_enKR1048KR1048#imgrc=F4bk37qV7BCk3M',
    userList: users_mock,
  },
  {
    spaceId: 2,
    spaceTitle: '고양이를 사랑하는 모임',
    imgUrl:
      'https://health.chosun.com/site/data/img_dir/2023/07/17/2023071701753_0.jpg',
    userList: users_mock,
  },
  {
    spaceId: 3,
    spaceTitle: '404',
    imgUrl:
      'https://img.freepik.com/premium-vector/big-red-heart-isolated-on-white-background-vector-illustration_260787-631.jpg',
    userList: users_mock,
  },
  {
    spaceId: 4,
    spaceTitle: 'music lovers',
    imgUrl:
      'https://www.google.com/search?q=%EC%B9%B4%ED%8E%98&tbm=isch&ved=2ahUKEwiGhej4rdCBAxUEdt4KHYvPDfkQ2-cCegQIABAA&oq=%EC%B9%B4%ED%8E%98&gs_lcp=CgNpbWcQAzIICAAQgAQQsQMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BAgjECc6BwgjEOoCECc6BAgAEANQ2QRY2Qtg_AxoAnAAeACAAXqIAZsFkgEDMC42mAEAoAEBqgELZ3dzLXdpei1pbWewAQrAAQE&sclient=img&ei=OgsXZYaAMYTs-QaLn7fIDw&bih=566&biw=707&rlz=1C5CHFA_enKR1048KR1048#imgrc=F4bk37qV7BCk3M',
    userList: users_mock,
  },
];
export default spaceListMock;
