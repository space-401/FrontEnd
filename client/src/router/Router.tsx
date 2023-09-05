import { createBrowserRouter } from 'react-router-dom';
import CreateSpace from '@/pages/CreateSpace';
import CreatePost from '@/pages/CreatePost';
import InviteCode from '@/pages/InviteCode/InviteCode';
import MainPage from '@/pages/MainPage';
import MainPageMock from '@mocks/data/MainPage/mainPage.mock';

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
    ],
  },
]);

export default router;
