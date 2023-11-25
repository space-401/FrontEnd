import { createBrowserRouter } from 'react-router-dom';
import { PrivateRoute, Lazy, VisitorRoute } from '@/router';
import { PATH } from '@/constants';
import { Suspense } from 'react';
import { MainPageSkeleton } from '@/components/Main';
import { MyPageSkeleton } from '@/components/MyPage';
import { CreatePostSkeleton } from '@/components/Create';
import { HeaderLayOut, BackLayout } from '@/layout';
import { SelectSpaceSkeleton } from '@/components/SelectSpace';
import { CreateSpaceSkeleton } from '@/components/Create';
import { Loading, ErrorComponent, ErrorBoundary } from '@/components/common';
import LandingPage from '@/pages/Landing';
import Auth from '@/pages/Auth';

export const createRouter = (reset: () => void) => {
  return createBrowserRouter([
    {
      element: <ErrorBoundary onReset={reset} />,
      children: [
        {
          element: <PrivateRoute />,
          children: [
            {
              element: <HeaderLayOut />,
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
          element: <VisitorRoute />,
          children: [
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
          ],
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
          element: <ErrorComponent />,
        },
      ],
    },
  ]);
};
