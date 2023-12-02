import { PATH } from '@/constants';
import { BackLayout, HeaderLayout } from '@/layout';
import { Lazy, PrivateRoute } from '@/router';
import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Auth from '@/pages/Auth';
import LandingPage from '@/pages/Landing';
import NotFound from '@/pages/NotFound';
import { CreatePostSkeleton } from '@/components/Create';
import { CreateSpaceSkeleton } from '@/components/Create';
import { MainPageSkeleton } from '@/components/Main';
import { MyPageSkeleton } from '@/components/MyPage';
import { SelectSpaceSkeleton } from '@/components/SelectSpace';
import { Loading } from '@/components/common';

export const router = createBrowserRouter([
  {
    element: <PrivateRoute />,
    children: [
      {
        element: <HeaderLayout />,
        children: [
          {
            path: PATH.SPACE,
            element: (
              <Suspense fallback={<SelectSpaceSkeleton />}>
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
        element: <BackLayout />,
        children: [
          {
            path: PATH.POST_CREATE(':spaceId'),
            element: (
              <Suspense fallback={<CreatePostSkeleton />}>
                <Lazy.CreatePostPage />
              </Suspense>
            ),
          },
          {
            path: PATH.POST_UPDATE(':spaceId', ':postId'),
            element: (
              <Suspense fallback={<CreatePostSkeleton />}>
                <Lazy.CreatePostPage />
              </Suspense>
            ),
          },
          {
            path: PATH.SPACE_CREATE,
            element: (
              <Suspense fallback={<CreateSpaceSkeleton />}>
                <Lazy.CreateSpacePage />
              </Suspense>
            ),
          },
          {
            path: PATH.SPACE_UPDATE(':spaceId'),
            element: (
              <Suspense fallback={<CreateSpaceSkeleton />}>
                <Lazy.CreateSpacePage />
              </Suspense>
            ),
          },
          {
            path: PATH.INVITE,
            element: (
              <Suspense fallback={<Loading />}>
                <Lazy.InviteCodePage />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
  {
    path: PATH.LOGIN,
    element: (
      <Suspense fallback={<Loading />}>
        <Lazy.SignPage />
      </Suspense>
    ),
  },
  {
    path: PATH.AUTH + '/:socialType',
    element: (
      <Suspense fallback={<Loading />}>
        <Auth />
      </Suspense>
    ),
  },
  {
    path: PATH.HOME,
    element: (
      <Suspense fallback={<Loading />}>
        <LandingPage />
      </Suspense>
    ),
  },
  {
    path: '/*',
    element: <NotFound />,
  },
]);
