import { createBrowserRouter } from 'react-router-dom';
import CreateSpace from '@/pages/createSpace';
import CreatePost from '@/pages/createPost';
import MainPage from '@/pages/main';
import MainPageMock from '@/mocks/data/MainPage/mainPage.mock';
import InviteCode from '@/pages/inviteCode';
import ImgEditModal from '@/components/common/ImageEditModal';
const router = createBrowserRouter([
  {
    path: '/',

    children: [
      {
        //모달이라 나중에 지울것
        path: '/createSpace',
        element: <CreateSpace />,
      },
      {
        path: '/createPost',
        element: <CreatePost />,
      },
      {
        //모달이라 나중에 지울것
        path: '/inviteCode',
        element: <InviteCode />,
      },
      {
        path: '/main',
        element: <MainPage {...MainPageMock} />,
      },
      {
        path: '/img',
        element: <ImgEditModal />,
      },
    ],
  },
]);

export default router;
