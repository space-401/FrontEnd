import { createBrowserRouter } from 'react-router-dom';
import CreateSpace from '@/pages/CreateSpace';
import CreatePost from '@/pages/CreatePost';
import MainPage from '@/pages/Main';
import InviteCode from '@pages/InviteCode';
import MyPage from '@pages/MyPage';
import PrivateRoute from '@router/Private';
import Landing from '@/pages/Landing';
import SelectSpace from '@/pages/SelectSpace';
import HeaderLayout from '@/layout/HeaderLayout/HeaderLayout';
import Auth from '@/pages/Auth';
import { PATH } from '@constants/path';
import { Suspense } from 'react';
import BackLayout from '@/layout/BackLayout';

const router = createBrowserRouter([
  {
    path: PATH.HOME,
    element: <PrivateRoute />,
    children: [
      {
        element: <HeaderLayout />,
        children: [
          /*스페이스*/
          {
            path: PATH.SPACE_SELECT,
            element: <SelectSpace />,
          },
          {
            path: PATH.SPACE + '/:spaceId',
            element: (
              <Suspense fallback={<></>}>
                <MainPage />
              </Suspense>
            ),
          },
          {
            path: PATH.USER_INFO,
            element: <MyPage />,
          },
        ],
      },
      {
        element: <BackLayout />,
        children: [
          {
            path: PATH.SPACE + '/:spaceId' + '/post' + '/:postId',
            element: <CreatePost />,
          },
          {
            path: PATH.SPACE + '/:spaceId' + '/post',
            element: <CreatePost />,
          },
          {
            path: PATH.SPACE_CREATE,
            element: <CreateSpace />,
          },
          {
            path: PATH.INVITE,
            element: <InviteCode />,
          },
        ],
      },
    ],
  },
  {
    path: PATH.LANDING,
    element: <Landing />,
  },
  {
    path: PATH.AUTH,
    element: <Auth />,
  },
]);

export default router;
