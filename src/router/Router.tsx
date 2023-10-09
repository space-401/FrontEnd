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
            path: PATH.HOME,
            element: <SelectSpace />,
          },
          {
            path: PATH.SPACE_MAIN(':spaceId'),
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
            path: PATH.POST_CREATE(':spaceId'),
            element: <CreatePost />,
          },
          {
            path: PATH.POST_UPDATE(':spaceId', ':postId'),
            element: (
              <Suspense fallback={<></>}>
                <CreatePost />
              </Suspense>
            ),
          },
          {
            path: PATH.SPACE_CREATE,
            element: <CreateSpace />,
          },
          {
            path: PATH.SPACE_UPDATE(':spaceId'),
            element: (
              <Suspense fallback={<></>}>
                <CreateSpace />
              </Suspense>
            ),
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
