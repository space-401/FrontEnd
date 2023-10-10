import { createBrowserRouter } from 'react-router-dom';
import PrivateRoute from '@router/Private';
import { PATH } from '@constants/path';
import { Suspense } from 'react';

import * as Lazy from '@router/lazy';
import MainPageSkeleton from '@components/Main/Skeleton';
import MyPageSkeleton from '@components/MyPage/Skeleton';

const router = createBrowserRouter([
  {
    path: PATH.HOME,
    element: <PrivateRoute />,
    children: [
      {
        element: <Lazy.HeaderLayout />,
        children: [
          /*스페이스*/
          {
            path: PATH.HOME,
            element: (
              <Suspense fallback={<></>}>
                <Lazy.SelectSpacePage />
              </Suspense>
            ),
          },
          {
            path: PATH.SPACE_MAIN(':spaceId'),
            element: (
              <Suspense fallback={<MainPageSkeleton />}>
                <Lazy.MainPage />
              </Suspense>
            ),
          },
          {
            path: PATH.USER_INFO,
            element: (
              <Suspense fallback={<MyPageSkeleton />}>
                <Lazy.MyPage />
              </Suspense>
            ),
          },
        ],
      },
      {
        element: (
          <Suspense fallback={<></>}>
            <Lazy.BackLayout />
          </Suspense>
        ),
        children: [
          {
            path: PATH.POST_CREATE(':spaceId'),
            element: (
              <Suspense fallback={<></>}>
                <Lazy.CreatePostPage />
              </Suspense>
            ),
          },
          {
            path: PATH.POST_UPDATE(':spaceId', ':postId'),
            element: (
              <Suspense fallback={<></>}>
                <Lazy.CreatePostPage />
              </Suspense>
            ),
          },
          {
            path: PATH.SPACE_CREATE,
            element: (
              <Suspense fallback={<></>}>
                <Lazy.CreateSpacePage />
              </Suspense>
            ),
          },
          {
            path: PATH.SPACE_UPDATE(':spaceId'),
            element: (
              <Suspense fallback={<></>}>
                <Lazy.CreateSpacePage />
              </Suspense>
            ),
          },
          {
            path: PATH.INVITE,
            element: (
              <Suspense fallback={<></>}>
                <Lazy.InviteCodePage />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
  {
    path: PATH.LANDING,
    element: (
      <Suspense fallback={<></>}>
        <Lazy.SignPage />
      </Suspense>
    ),
  },
  {
    path: PATH.AUTH,
    element: (
      <Suspense fallback={<></>}>
        <Lazy.AuthPage />
      </Suspense>
    ),
  },
]);
export default router;
